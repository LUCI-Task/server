import express from "express";
import mongoose from "mongoose";
import UserSchema from "../models/userSchema.js";

const router = express.Router();

export const getUsers = async (_, res) => {
  try {
    const users = await UserSchema.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;
  if (!UserSchema.findById(id)) return res.status(404).send("No user found!");
  try {
    const user = await UserSchema.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createUser = async (req, res) => {
  const user = req.body;
  const newUser = new UserSchema(user);
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const updatedUserInfo = req.body;
  if (!UserSchema.findById(id)) return res.status(404).send("No user found!");

  try {
    const updatedUser = await UserSchema.findByIdAndUpdate(
      id,
      { ...updatedUserInfo, id },
      {
        new: true,
      }
    );

    res.json(updatedUser);
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!UserSchema.findById(id)) return res.status(404).send("No user found!");

  await UserSchema.findByIdAndRemove(id);
  res.json({ message: "User deleted!" });
};

export default router;
