import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);

  constructor(private readonly mailerService: MailerService) {}
  async creatsendMail(email: string, token: string, firstname: string) {
    try {
      await this.mailerService.sendMail({
        to: email,
        subject: 'email-verification',
        template: 'email-verification',
        context: {
          token,
          year: new Date().getFullYear(),
          verificationUrl: 'http://localhost:3000',
          appName: 'auth flow',
          name: firstname,
          expiresin: '24',
        },
      });
    } catch (error) {
      this.logger.error('Error sending email', error);
    }
  }

  async sendResetPasswordEmail(email: string, token: string) {
    try {
      await this.mailerService.sendMail({
        to: email,
        subject: 'Reset Your Password',
        template: 'reset-password',
        context: {
          url: `http://localhost:3000/reset-password?token=${token}`,
          expiresIn: '10 minutes',
        },
      });
    } catch (error) {
      this.logger.error('Error sending reset password email', error);
    }
  }
}
