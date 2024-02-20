		questions = [
		{
			// This is demo modify ur questions here
			"Quest":"Q1 Find Output in follwing code:\nint&nbsp;main()\n{\nint&nbsp;a=10,b=25;\na=b++&nbsp;+&nbsp;a++;\nprintf('%d&nbsp;',a);\n} ",
			"opt1":"35",
			"opt2":"1025",
			"opt3":"36",
			"opt4":"37",
			"answer":"3"  
		}
		,
		{
			"Quest":"Q2 Find output\nint&nbsp;main()\n{\nconst&nbsp;char&nbsp;*one=\"Awega\";\ncout<< one;\nconst&nbsp;char&nbsp;*two=one;\ncout<< two;\nreturn&nbsp;0;\n}",
			"opt1":"AwegaAwega",
			"opt2":"one",
			"opt3":"two",
			"opt4":"Awega",
			"answer":"1"
		}
		,
		{
			"Quest":"Q3 - Predict output \nint main()\n{\nint i,j,m,a[5]={3,4,5,2,1};\ni=a[4]++;\nj=++i;\nm=a[j];\ncout<< m;\nreturn 0;\n}",
			"opt1":"3",
			"opt2":"4",
			"opt3":"5",
			"opt4":"1",
			"answer":"3"
		}
		,
		{
			"Quest":"Q4 : In c++, data members in structures are by default:",
			"opt1":"public",
			"opt2":"private",
			"opt3":"protected",
			"opt4":"None of the above.",
			"answer":"1"
		}
		,
		{
			"Quest":"Q5 - What will happen if a class is not having any name?",
			"opt1":"A. It cannot have a destructor.",
			"opt2":"B. It cannot have a constructor.",
			"opt3":"C. It is not allowed.",
			"opt4":"D. Both A and B.",
			"answer":"4"
		}
		,
		{
			"Quest":"Q6 - A do-while loop is useful when we want that the statements within the loop must be executed",
			"opt1":"only once",
			"opt2":"At least once",
			"opt3":"More than once",
			"opt4":"None of the above",
			"answer":"2"
		}
		,
		{
			"Quest":"Q7 - Which of the following statement is used to take the control to the beginning of the loop?",
			"opt1":"exit",
			"opt2":"break",
			"opt3":"continue",
			"opt4":"None of the above",
			"answer":"3"
		}
		,
		{
			"Quest":"Q8 - How many times Awega print\n#include< iostream> \nusing namespace std;\n   int main()\n   {\n       for(int x=0;x<10;x++)\n       {\n           if(x<5)\n           {\n               continue;\n               cout<<\"Awega \\n\";\n           }\n           else{\n               break;\n           }\n           cout<<\"Awega \\n\";\n       }\n        return 0;\n    }",
			"opt1":"4",
			"opt2":"0",
			"opt3":"8",
			"opt4":"1",
			"answer":"2"
		},

		{
			"Quest":"Q9 - Find output \n#include< iostream> \nusing namespace std; \n  class Test \n{ \npublic: \n  Test(); \n}; \n  Test::Test()  { \n    cout<<\"Constructor Called \\n\"; \n} \n  \nint main() \n{ \n    Test t1(); \n    return 0; \n}",
			"opt1":"error",
			"opt2":"Constructor Called",
			"opt3":"No output",
			"opt4":"none of these",
			"answer":"3"
		}
		,
		{
			"Quest":"Q10 - The calendar for the year 2007 will be the same for the year:",
			"opt1":"2014",
			"opt2":"2016",
			"opt3":"2017",
			"opt4":"2018",
			"answer":"4"
		}
		,
		{
			"Quest":"Q11 - Find output \n#include < iostream>\nusing namespace std;\nint main() \n{ \nint   a;\nint&  b = a;\na = 10;\nb = 20;\ncout << b << a  << endl;\nreturn 0;\n}",
			"opt1":"2010",
			"opt2":"1020",
			"opt3":"1010",
			"opt4":"2020",
			"answer":"4"
		}
		,
		{
			"Quest":"Q12 - A is B's sister. C is B's mother. D is C's father. E is D's mother. Then, how is A related to D?",
			"opt1":"Grandfather",
			"opt2":"Grandmother",
			"opt3":"Daughter",
			"opt4":"Granddaughter",
			"answer":"4"
		}
		,
		{
			"Quest":"Q13 - Pointing to a person, a man said to a woman,\n \"His mother is the only daughter of your father.\"\n How was the woman related to the person ? ",
			"opt1":"Aunt",
			"opt2":"Mother",
			"opt3":"Wife",
			"opt4":"Daughter",
			"answer":"1"
		}
		,
		{
			"Quest":"Q14 - In a family, there are six members A, B, C, D, E and F. \nA and B are a married couple, A being the male member. D is the only son of C, who is the brother of A. \nE is the sister of D. B is the daughter-in-law of F, whose husband has died. How is E related to C ?  ",
			"opt1":"Sister",
			"opt2":"Daughter",
			"opt3":"Cousin",
			"opt4":"Mother",
			"answer":"2"
		}
		,
		{
			"Quest":"Q15 - Which of the following is least like the others?",
			"opt1":"cube",
			"opt2":"sphere",
			"opt3":"pyramid",
			"opt4":"circle",
			"answer":"4"
		}
		,
		{
			"Quest":"Q16 - Consider the following series:\n3, 4, 6, 9, 13, ____ What comes next?",
			"opt1":"15",
			"opt2":"16",
			"opt3":"17",
			"opt4":"18",
			"answer":"4"
		}
		,
		{
			"Quest":"Q17 - ______ Is the execution of at least two different programs simultaneously,",
			"opt1":"Multiprocessing",
			"opt2":"Multi programming",
			"opt3":"Recovery",
			"opt4":"Integrity",
			"answer":"1"
		}
		,
		{
			"Quest":"Q18 - Which of the following is correct about function overloading?",
			"opt1":"A. The types of arguments are different.",
			"opt2":"B. The order of argument is different.",
			"opt3":"C. The number of argument is same.",
			"opt4":"D. Both A and B.",
			"answer":"4"
		}
		,
		{
			"Quest":"Q19 - Which of the following cannot be friend?",
			"opt1":"Function",
			"opt2":"Class",
			"opt3":"Object",
			"opt4":"Operator function",
			"answer":"3"
		}
		,
		{
			"Quest":"Q20 - What is the use of function call operator?",
			"opt1":"overloading the methods",
			"opt2":"overloading the objects",
			"opt3":"overloading the parameters",
			"opt4":"none of the mentioned",
			"answer":"2"
		}
		]