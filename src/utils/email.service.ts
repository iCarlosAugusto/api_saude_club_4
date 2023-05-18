import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

interface IEmail{
  partnerEmail: string;
  partnerPassword: string;
}


@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService){}

  async sendEmail({ partnerEmail, partnerPassword }: IEmail): Promise<void> {
    await this.mailerService.sendMail({
      to: partnerEmail,
      from: 'carlosaugustodelimavieira@gmail.com',
      subject: "Test",
      text: "Hello!",
      html: `<p> Olá, é um prazer tê-lo conosco. Sua senha é: ${partnerPassword} </p>`
    })
  }
}
