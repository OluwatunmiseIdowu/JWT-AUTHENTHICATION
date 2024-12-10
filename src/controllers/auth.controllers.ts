import { Request, Response } from "express";
import * as bcrypt from "bcryptjs";
import { AppDataSource } from "../data-source"; 
import { User } from "../entities/User.ts";
import { createToken } from "../utils/jwt";  a utility file

const userRepository = AppDataSource.getRepository(User);


export const register = async (req: Request, res: Response) => {
  const { fullName, email, password } = req.body;

  try {
    const existingUser = await userRepository.findOneBy({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

   
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the new user
    const newUser = userRepository.create({
      fullName,
      email,
      password: hashedPassword,
    });
    await userRepository.save(newUser);

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error during user registration:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Login a user
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const existingUser = await userRepository.findOneBy({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the password
    const isValidPassword = await bcrypt.compare(password, existingUser.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Generate JWT token
    const token = createToken(existingUser.id);

    res.status(200).json({ token });
  } catch (error) {
    console.error("Error during user login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Get user by ID
export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    // Find user by ID
    const user = await userRepository.findOneBy({ id: parseInt(id) });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
