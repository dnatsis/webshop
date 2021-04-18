import asyncHandler from 'express-async-handler';
import Category from '../models/categoriesModel.js';

/**
 * Fetch all categories
 * @route Get /api/categoriew
 * @access Public
 */
const getCategories = asyncHandler(async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;

  const count = await Category.countDocuments();
  const categories = await Category.find()
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ categories, page, pages: Math.ceil(count / pageSize) });
});

// @desc    Create a new Category
// @route    Post /api/categories
// @access    Private/Admin
const createCategory = asyncHandler(async (req, res) => {
  const { name, image } = req.body;

  const category = new Category({
    name: name,
    image: image,
  });

  console.log(category);
  const createdCategory = await category.save();

  res.status(201).json(createdCategory);
});

// @desc    Delete a Category
// @route    DELETE /api/categories/:id
// @access    Private/Admin
const deleteCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (category) {
    await category.remove();
    res.json({ message: 'Category removed' });
  } else {
    res.status(404);
    throw new Error('Category not found');
  }
});

export { getCategories, createCategory, deleteCategory };
