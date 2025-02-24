import { User } from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { generateTokenAndSetCookie } from '../utils/generateTokenAndSetCookie.js';
import { generateVerificationToken } from '../utils/generateVerificationToken.js';
import { sendVerificationEmail } from '../mailtrap/emails.js';
export const signup = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    if (!email || !password || !name) {
      throw new Error('All field are required');
    }
    const userAlreadyExist = await User.findOne({ email });
    // console.log('userAlreadyExist', userAlreadyExist);
    if (userAlreadyExist) {
      return res
        .status(400)
        .json({ success: false, message: 'User already exists' });
    }
    const hashedPassword = await bcryptjs.hash(password, 10);
    const verificationToken = generateVerificationToken();
    const user = new User({
      email,
      password: hashedPassword,
      name,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 100,
    });
    await user.save();
    // JWT Token
    generateTokenAndSetCookie(res, user._id);
    await sendVerificationEmail(user.email, verificationToken);
    res.status(201).json({
      success: true,
      message: 'User Created SUccessfully',
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const login = async (req, res) => {
  res.send('Login Route');
};

export const logout = async (req, res) => {
  res.send('JUst values check Git Check Logout Route');
};
