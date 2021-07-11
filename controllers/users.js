import UserSchema from "../models/userSchema.js";

export const getUsers = async (req, res) => {
  try {
    const users = await UserSchema.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createUsers = async (req, res) => {
  const user = req.body;
  const newUser = new UserSchema(user);
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
