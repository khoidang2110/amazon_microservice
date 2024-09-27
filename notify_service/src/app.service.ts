import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
@Injectable()
export class AppService {
  sendMailInfoOrder(data) {

    let {email,full_name} = data
       // notify => gửi mail thông báo cho user
       let configMail = nodemailer.createTransport({
        service: "gmail",
        auth: {
           user: "khoidang2110@gmail.com",
                pass: "ojnmhygnzwinlppi"
        }
    })
    

    let infoMail = {
        from: "khoidang2110@gmail.com",
        to: email, // "khaitruong2112@gmail.com"
        subject: " Đã Đặt hàng qua Amazon" + full_name,
        html: "<h1> Xác nhận đợn hàng thành công </h1>"
    }

    configMail.sendMail(infoMail, error => error);
  }
  sendMailSuccessOrder(data) {

    let {email,full_name} = data
       // notify => gửi mail thông báo cho user
       let configMail = nodemailer.createTransport({
        service: "gmail",
        auth: {
           user: "khoidang2110@gmail.com",
                pass: "ojnmhygnzwinlppi"
        }
    })
    

    let infoMail = {
        from: "khoidang2110@gmail.com",
        to: email, // "khaitruong2112@gmail.com"
        subject: ` Đã Đặt hàng qua Amazon + ${full_name} - ${email}`,
        html: "<h1> đặt hàng thành công </h1>"
    }

    configMail.sendMail(infoMail, error => error);
  }
}
