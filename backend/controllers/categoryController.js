import asyncHandler from 'express-async-handler';
import Category from '../models/categoriesModel.js';

// @desc    Fetch all categories
// @route    Get /api/categories
// @access    Public
const getCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find();

  res.json(categories);
});

export { getCategories };
