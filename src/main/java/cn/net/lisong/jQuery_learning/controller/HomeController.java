package cn.net.lisong.jQuery_learning.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class HomeController {

	@RequestMapping(value="/")
	public ModelAndView test(HttpServletResponse response) throws IOException{
		return new ModelAndView("home");
	}
	@RequestMapping(value="/selector")
	public ModelAndView allSelector(HttpServletResponse response) throws IOException{
		return new ModelAndView("selector");
	}
	@RequestMapping(value="/dom")
	public ModelAndView dom(HttpServletResponse response) throws IOException{
		return new ModelAndView("dom");
	}
	@RequestMapping(value="/event")
	public ModelAndView event(HttpServletResponse response) throws IOException{
		return new ModelAndView("event");
	}
	@RequestMapping(value="/input")
	public ModelAndView input(HttpServletResponse response) throws IOException{
		return new ModelAndView("/form/input");
	}
}
