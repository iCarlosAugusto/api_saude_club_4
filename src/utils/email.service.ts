import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

interface IEmail{
  email: string;
  newPassword: string;
}

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService){}

  async sendEmailToResetPassword({ email, newPassword }: IEmail): Promise<void> {
    await this.mailerService.sendMail({
      to: email,
      from: 'carlosaugustodelimavieira@gmail.com',
      subject: "Saude Club",
      text: "Hello!",
      html: `<p> Olá, somos do Saude Club. Sua senha é: ${newPassword} </p>`
    })
  }

  async sendEmail(email: string, message: string){
    await this.mailerService.sendMail({
      to: email,
      from: 'carlosaugustodelimavieira@gmail.com',
      subject: "Saude Club",
      text: "Hello!",
      html: `<p> ${message} </p>`
    })
  }
}
