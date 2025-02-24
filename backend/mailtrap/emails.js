import { mailtrapClient, sender } from './mailtrap.config.js';
import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from './emailTemplates.js';
export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: 'verify your email',
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        '{verificationCode}',
        verificationToken
      ),
      category: 'Email Verification',
    });
    console.log('Email sent successfully', response);
  } catch (error) {
    console.error(`Error sending verification`, error);
    throw new Error(`Error sending verification email: ${error}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];
  try {
    await mailtrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: 'c76808f2-6a7c-4cdf-a460-a403d34811ea',
      template_variables: {
        company_info_name: 'Auth Rohit Comany',
        name: 'Rohitt SOmewhre',
        company_info_address: 'Somewhere India',
        company_info_city: 'Mumbai',
        company_info_zip_code: '400709',
        company_info_country: 'MyRohit India Comany',
      },
    });
    console.log('Welcome email sent successfully', response);
  } catch (error) {}
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  const recipient = [{ email }];
  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: 'Reset your Password',
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace('{resetURL}', resetURL),
      category: 'Password Reset',
    });
  } catch (error) {
    console.error(`Error sending password reset email`, error);
    throw new Error(`Error sending password reset email: ${error}`);
  }
};
