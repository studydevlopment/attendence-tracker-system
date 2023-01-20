package com.ojas.AttendenceTrackerSystem.Service;

import com.ojas.AttendenceTrackerSystem.model.EmailDetails;

public interface EmailService {

	String sendSimpleMail(EmailDetails details);

	String sendMailWithAttachment(EmailDetails details);

}
