import asyncHandler from 'express-async-handler';
import Category from '../models/categoriesModel.js';

// @desc    Fetch all categories
// @route    Get /api/categories
// @access    Public
const getCategories = asyncHandler(async (req, res) => {
  const pageSize = 2;
  const page = Number(req.query.pageNumber) || 1;

  const count = await Category.countDocuments();
  const categories = await Category.find()
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ categories, page, pages: Math.ceil(count / pageSize) });
});

export { getCategories };
