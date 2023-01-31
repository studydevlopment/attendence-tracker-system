package com.ojas.AttendenceTracker.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.Collections;

/*    public ApiInfo(String title,
                   String description,
                   String version,
                   String termsOfServiceUrl,
                   Contact contact, //String name, String url, String email
                   String licenseName,
                   String licenseUrl
                   Collection vendorExtensions)*/
/*
ApiOperation
ApiParam
ApiModel
ApiModelProperty
 */
@Configuration
@EnableSwagger2
public class SwaggerConfiguration {

    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .paths(PathSelectors.any())
                .apis(RequestHandlerSelectors.basePackage("com.ojas.AttendenceTracker"))
                .build()
                .apiInfo(apiDetails());

    }

    public ApiInfo apiDetails() {
        return new ApiInfo(
                "AttendenceTrackerApplication",
                "This is an application which can be used to tracking attendance of employees",
                "1.0",
                "free to use",
                new Contact("OILC-203","https://github.com/studydevlopment/attendence-tracker-system.git","studydevelopment123@gmail.com"),
                "Api Licence",
                "Licence Url",
                Collections.emptyList()
        );
    }

}
