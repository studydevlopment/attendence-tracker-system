package com.ojas.AttendenceTrackerSystem.Service;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import com.ojas.AttendenceTrackerSystem.model.EmailDetails;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmailServiceImpl implements EmailService {

	@Autowired
	private JavaMailSender javaMailSender;

	@Value("${spring.mail.username}")
	private String sender;

	public int test() {
		Random rn = new Random();
		// Random method called for integer values with fixed value.
		int num = rn.nextInt(1000000);
		String number = "123456";

		// show Random with 6 digits number.
		if (num > 100000) {
			number = String.valueOf(num);
			System.out.println("Your OTP is : " + num);
		} else {
			System.out.println("Retry!");
		}
		return num;
	}

	@Override
	public String sendSimpleMail(EmailDetails details) {

		SimpleMailMessage mailMessage = new SimpleMailMessage();
		int otp = test();
		String s = String.valueOf(otp);
		
		
//		File file = new File("D:\\mastercard-logo.png"); 
//		byte[] bFile = new byte[(int) file.length()];
//
//		FileInputStream fileInputStream;
//		try {
//			fileInputStream = new FileInputStream(file);
//			fileInputStream.read(bFile);
//			fileInputStream.close();
//		} catch (IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}

		mailMessage.setFrom(sender);
		mailMessage.setTo(details.getRecipient());
		mailMessage.setText("hi these is eshwar");
		mailMessage.setSubject("Thanks for your time with regisetring from AttendenceTrackerSystem ..");
//		mailMessage.setText("Your OTP is:" + s);

		javaMailSender.send(mailMessage);
		return "Mail Sent Successfully...";
	}

	@Override
	public String sendMailWithAttachment(EmailDetails details) {
		MimeMessage mimeMessage = javaMailSender.createMimeMessage();
		MimeMessageHelper mimeMessageHelper;

		try {
			mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);
			mimeMessageHelper.setFrom(sender);
			mimeMessageHelper.setTo(details.getRecipient());
			mimeMessageHelper.setText(details.getMsgBody());
			mimeMessageHelper.setSubject(details.getSubject());

			FileSystemResource file = new FileSystemResource(new File(details.getAttachment()));
			mimeMessageHelper.addAttachment(file.getFilename(), file);

			javaMailSender.send(mimeMessage);
			return "Mail sent Successfully";
		} catch (MessagingException e) {

			e.printStackTrace();
		}

		return null;
	}

}
