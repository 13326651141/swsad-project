```py
登陆：
	url：'/users/signin/'

	json包
	{
	'username': 'walikrence',
	'password': "123456"
	}

	response
	1.重复登录
	resp = {'message': message,'code' : 0}
	2.用户名错误
	resp = {'message': message, 'code':1}
	3.登陆成功
	resp = {
	'message': message,
	'code': 2,
	'sex': sex,
	'email':email,
	'name':name
	}
	4.密码错误
	resp = {'message': message, 'code':3}

注册：
	url：'/users/register/'

	json包
	{
	'username': 'walikrence',
	'password': '123456',
	'email' : '123456@qq.com'
	}

	response
	1.注册成功
	resp = {'message': message,'code' : 2}
	2.用户名已存在
	resp = {'message': message,'code' : 1}

退出登陆：
	url: '/users/signout/'

	json包
	{
		'username': 'walikrence'
	}
	response
	1.正常退出
	resp = {'message': message,'code' : 2}
	2.未登陆就退出
	resp = {'message': message,'code' : 1}

创建问卷：
	url:'/paper/create/'

	json包
	{
    "title": "问卷一", 
    "select_question_num": 2, 
    "fill_question_num": 1, 
    "Question_select": [
        {
            "title": "多选题", 
            "option_num": 3, 
            "mytype": "单选", 
            "option": [
                {
                    "text": "多选题-选项1", 
                }, 
                {
                    "text": "多选题-选项2", 
                }, 
                {
                    "text": "多选题-选项3", 
                }
            ]
        }, 
        {
            "title": "单选题", 
            "option_num": 3, 
            "mytype": "多选", 
            "option": [
                {
                    "text": "单选题-选项1", 
                }, 
                {
                    "text": "单选题-选项2", 
                }, 
                {
                    "text": "单选题-选项3", 
                }
            ]
        }
    ], 
    "Question_fill": [
        {
            "title": "填空题"
        }
    ]
}

	response:
	1. 未登陆
	resp = {'message': message,'code' : 1}
	2. 格式不正确
	resp = {'message': message,'code' : 2}
	3.创建成功
	resp = {'message': message,'code' : 3,

删除问卷：
	url:'/paper/delete/'
	json包
	python_dict = {
				'title': title,
				'id': id
			}
	response
	1.不存在这张问卷
	resp = {'message': message,'code' : 2}
	2.未登陆
	resp = {'message': message,'code' : 1}
	3. 删除成功
	resp = {'message': message,'code' : 3}
	4. 不是创建者，无法删除
	resp = {'message': message,'code' : 4}

查询问卷：
	url:'/paper/query/'
	json包
	python_dict = {
				'username': 'walikrence',
			}
	response
	1.未登陆
	resp = {'message': message,'code' : 1}

	2.查询成功
	resp=
	{
		'message': '查询问卷成功',
		'code': 2,
		'paper_num': 1,
		'paper_list': [{
			'id': 1,
			'title': '问卷一',
			'select_question_num': 2,
			'fill_question_num': 1,
			'creater': 'walikrence',
			'Question_select': [{
				'id': 1,
				'title': '多选题',
				'option_num': 3,
				'mytype': '单选',
				'option': [{
					'text': '多选题-选项1',
					'vote_num': 0,
					'id': 1
				}, {
					'text': '多选题-选项2',
					'vote_num': 0,
					'id': 2
				}, {
					'text': '多选题-选项3',
					'vote_num': 0,
					'id': 3
				}]
			}, {
				'id': 2,
				'title': '单选题',
				'option_num': 3,
				'mytype': '多选',
				'option': [{
					'text': '单选题-选项1',
					'vote_num': 0,
					'id': 4
				}, {
					'text': '单选题-选项2',
					'vote_num': 0,
					'id': 5
				}, {
					'text': '单选题-选项3',
					'vote_num': 0,
					'id': 6
				}]
			}],
			'Question_fill': [{
				'title': '填空题',
				'id': 1
			}]
		}]
	}

填写问卷：
	url:'/paper/fill/'

	json包
	python_dict = {
		    'id': p_id,
		    "Question_select": [
		        {
		        	'id': qs1_id,
		            "option": [
		                {
		                    'id': o1_id,
		                    'is_select':'no' 
		                }, 
		                {
		                    'id': o2_id,
		                    'is_select':'yes' 
		                }, 
		                {
		                    'id': o3_id,
		                    'is_select':'no' 
		                }
		            ]
		        }, 
		        {
		        	'id':qs2_id,
		            "option": [
		                {
		                    'id': o4_id,
		                    'is_select':'no'  
		                }, 
		                {
		                    'id': o5_id,
		                    'is_select':'yes' 
		                }, 
		                {
		                    'id': o6_id,
		                    'is_select':'yes'  
		                }
		            ]
		        }
		    ], 
		    "Question_fill": [
		        {
		            'id': qf_id,
		            'answer': answer
		        }
		    ]
		}

		response
		1. 未登陆
		resp = {'message': message,'code' : 1}
		2. 格式错误
		resp = {'message': message,'code' : 2}
		3. 提交成功
		resp = {'message': message,'code' : 3}






```













