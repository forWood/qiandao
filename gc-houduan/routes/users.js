var express = require('express');
var router = express.Router();
var userDAO = require('../dao/userDAO');
var result = require('../model/result');
var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.send('err');
    } else {
        //  console.log(ret);
        res.send(ret);
    }
};




/////////////////////////////app端/////////////////////////////


//////////注册新增用户//////////
router.post('/users_info/regist', function (req, res) {
    console.log('post users called');
    var user = req.body;
    console.log(user);
    if(user.telphone){
        userDAO.select_telphone(user, function (success) {
            console.log(success[0]);
            if(success[0]===undefined){
                userDAO.add(user, function (success) {
                    if(success){
                        var r =  result.createResult(success, null);
                        return res.sendStatus(201);//用户信息增加成功
                        jsonWrite(res, r);
                    }
                })
            }else{
                 return res.sendStatus(204); //当前注册手机号已经注册了
            }

        })
    }
});

//////////登陆时账号和密码验证//////////
router.post('/users_info/appLogin', function (req, res) {
    console.log('get appLogin called');
    var user = req.body;
    console.log(user);
    userDAO.select_telphone(user, function (success) {
        console.log(success[0]);
        if(success[0]!==undefined){
            if((user.role==success[0].User_Type)&&(user.pass==success[0].User_Pass)){
                //      console.log("密码正确");
                return res.send('3');  //密码正确

            }else{
                //   console.log("密码或者角色错误");
                return res.send('2');//密码错误
            }
        }else{
            return res.sendStatus(204); //输入手机号错误
        }

    })


});




//////////忘记密码，重置密码//////////

router.put('/users_info/resetPass', function (req, res) {
    console.log('put resetPass called');
    var user = req.body;
    console.log(user);
    userDAO.select_telphone(user, function (success) {
        console.log(success[0]);
        if(success[0]!==undefined){
            userDAO.change_pass(user, function (success) {
                    var r =  result.createResult(success, null);
                    return res.sendStatus(201);//密码更新成功
                    jsonWrite(res, r);
            })
        }else{
            return res.sendStatus(204); //手机号未注册,重置不了密码
        }
    })
});

//////////修改密码//////////
router.put('/users_info/changePass', function (req, res) {
    console.log('put changePass called');
    var user = req.body;
    console.log(user);
    userDAO.select_telphone(user, function (success) {
        console.log(success[0]);
        if(success[0]!==undefined&&success[0].User_Pass==user.old_pass){
            user.pass=user.new_pass;
            userDAO.change_pass(user, function (success) {
                var r =  result.createResult(success, null);
                return res.sendStatus(201);//密码修改成功201
                jsonWrite(res, r);
            })
        }else{
            return res.sendStatus(204); //旧密码错误的时候返回204
        }
    })
});
//////////个人信息//////////
router.get('/users_info/appInfo', function (req, res) {
    console.log('get appInfo called');
    var user = req.query;
    console.log(user);
    userDAO.select_telphone(user, function (success) {
        // console.log(success[0]);
        jsonWrite(res, success);
    })
});
//////////保存个人信息//////////
router.put('/users_info/update_appInfo', function (req, res) {
    console.log('put update_appInfo called');
    var user = req.body;
    console.log(user);
    //先检查手机号
    userDAO.select_telphone(user, function (success) {
        console.log(success[0]);
        if(success[0]!==undefined){
            userDAO.update_appInfo(user, function (success) {
                var r =  result.createResult(success, null);
                return res.sendStatus(201);//保存个人信息成功
                jsonWrite(res, r);
            })
        }else{
            return res.sendStatus(204); //保存个人信息失败
        }
    })
});

//////////验证用户所对应的密码的正确性//////////
router.get('/users_info/verifyPass', function (req, res) {
    console.log('get verifyPass called');
    var user = req.query;
    console.log(user);
    //先检查手机号有没有被注册
    userDAO.select_telphone(user, function (success) {
        // console.log(success[0]);
        if(success[0]!==undefined){
            userDAO.select_pass(user, function (success) {
                if(success[0]!==undefined){
                    return res.sendStatus(201);//密码正确的时候返回201
                } else{
                    return res.sendStatus(204);//密码不正确的时候返回204
                }
            })
        }
    })
});

//////////更换手机号//////////
router.put('/users_info/changeTel', function (req, res) {
    console.log('put changeTel called');
    var user = req.body;
    console.log(user);
    //先检查手机号有没有被注册
    user.telphone=user.after_tel;
    userDAO.select_telphone(user, function (success) {
        console.log(success[0]);
        if(success[0]==undefined){
            userDAO.update_telphone(user, function (success) {
                return res.sendStatus(201);//成功更换手机号返回201
            })
        }else{
            return res.sendStatus(204); //更换的手机号在数据库中有,返回204
        }
    })
});
//////////提交反馈//////////
router.post('/users_info/save_feedback', function (req, res) {
    console.log('post feedback called');
    var user = req.body;
    console.log(user);
    userDAO.add_feedback(user, function (success) {
        console.log(success);
        var r =  result.createResult(success, null);
        return res.sendStatus(201);//反馈信息增加成功
        jsonWrite(res, r);

    })
});


module.exports = router;
