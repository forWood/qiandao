import Vue from 'vue'
import Router from 'vue-router'
import login from '@/pages/login'
import regist from '@/pages/regist'
import resetPass from '@/pages/resetPass'
import changePass from '@/pages/changePass'
import home_teacher from '@/pages/home_teacher'
import home_student from '@/pages/home_student'
import createClass from '@/pages/createClass'
import intellegenceCourse from  '@/pages/intellegenceCourse'
import my_student from '@/pages/my_student'
import my_teacher from '@/pages/my_teacher'
import qianDaoJiLu from '@/pages/qianDaoJiLu'
import joinClass from '@/pages/joinClass'
import allStudent from '@/pages/allStudent'
import arrangeOfCourseCreation from '@/pages/arrangeOfCourseCreation'
import arrangeOfExam from '@/pages/arrangeOfExam'
import courseChange from  '@/pages/courseChange'
import demandOfStudy from '@/pages/demandOfStudy'
import informationOfCourse from '@/pages/informationOfCourse'
import inputClassN from '@/pages/inputClassN'
import privateInformation from  '@/pages/privateInformation'
import xieyi from  '@/pages/xieyi'
import resetTelphone from  '@/pages/resetTelphone'
import changeTelphone from  '@/pages/changeTelphone'
import aboutUs from  '@/pages/aboutUs'
import fankui from  '@/pages/fankui'
import classCourse_student from  '@/pages/classCourse_student'
import classCourse_teacher from  '@/pages/classCourse_teacher'
import classCourseDetail from  '@/pages/classCourseDetail'
import changeClassCourseDetail from  '@/pages/changeClassCourseDetail'
import SignIn from '@/pages/SignIn'
import SignIn_teacher from '@/pages/SignIn_teacher'
import detail_student from '@/pages/detail_student'
import qiandaoDetail_teacher from '@/pages/qiandaoDetail_teacher'
import emptyPage from '@/pages/qiandaoDetail_teacher'
import Signhistry_teacher from '@/pages/Signhistry_teacher'
import SignDetailOfDiffTime from '@/pages/SignDetailOfDiffTime'
import qiandaoDetail_student from '@/pages/qiandaoDetail_student'
import qiandaoDetail_teacher_student from '@/pages/qiandaoDetail_teacher_student'

  Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/regist',
      name: 'regist',
      component: regist
    },
    {
      path: '/home_teacher',
      name: 'home_teacher',
      component: home_teacher
    },
    {
      path: '/home_student',
      name: 'home_student',
      component: home_student
    },
    {
      path: '/resetPass',
      name: 'resetPass',
      component: resetPass
    },
    {
      path: '/changePass',
      name: 'changePass',
      component: changePass
    },
    {
      path: '/createClass',
      name: 'createClass',
      component: createClass
    },
    {
      path: '/intellegenceCourse',
      name: 'intellegenceCourse',
      component: intellegenceCourse
    },
    {
      path: '/my_student',
      name: 'my_student',
      component: my_student
    },
    {
      path: '/my_teacher',
      name: 'my_teacher',
      component: my_teacher
    },
    {
      path: '/qianDaoJiLu',
      name: 'qianDaoJiLu',
      component: qianDaoJiLu
    },
    {
      path: '/joinClass',
      name: 'joinClass',
      component: joinClass
    },
    {
      path: '/allStudent',
      name: 'allStudent',
      component:allStudent
    },
    {
      path: '/arrangeOfCourseCreation',
      name: 'arrangeOfCourseCreation',
      component:arrangeOfCourseCreation
    },
    {
      path: '/arrangeOfExam',
      name: 'arrangeOfExam',
      component:arrangeOfExam
    },
    {
      path: '/courseChange',
      name: 'courseChange',
      component:courseChange
    },
    {
      path: '/demandOfStudy',
      name: 'demandOfStudy',
      component:  demandOfStudy
    },
    {
      path: '/informationOfCourse',
      name: 'informationOfCourse',
      component:  informationOfCourse
    },
    {
      path: '/inputClassN',
      name: 'inputClassN',
      component: inputClassN
    },
    {
      path: '/privateInformation',
      name: 'privateInformation',
      component:privateInformation
    },
    {
      path: '/xieyi',
      name: 'xieyi',
      component:xieyi
    },
    {
      path: '/resetTelphone',
      name: 'resetTelphone',
      component:resetTelphone
    },
    {
      path: '/changeTelphone',
      name: 'changeTelphone',
      component:changeTelphone
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component:aboutUs
    },
    {
      path: '/fankui',
      name: 'fankui',
      component:fankui
    },
    {
      path: '/classCourse_student',
      name: 'classCourse_student',
      component:classCourse_student
    },
    {
      path: '/classCourse_teacher',
      name: 'classCourse_teacher',
      component:classCourse_teacher
    },
    {
      path: '/classCourseDetail',
      name: 'classCourseDetail',
      component:classCourseDetail
    },
    {
      path: '/changeClassCourseDetail',
      name: 'changeClassCourseDetail',
      component:changeClassCourseDetail
    },
    {
      path: '/SignIn',
      name: 'SignIn',
      component:SignIn
    },
    {
      path: '/SignIn_teacher',
      name: 'SignIn_teacher',
      component:SignIn_teacher
    },
    {
      path: '/detail_student',
      name: 'detail_student',
      component: detail_student
    },
    {
      path: '/qiandaoDetail_teacher',
      name: 'qiandaoDetail_teacher',
      component:qiandaoDetail_teacher
    },
    {
      path: '/emptyPage',
      name: 'emptyPage',
      component:emptyPage
    },
    {
      path: '/Signhistry_teacher',
      name: 'Signhistry_teacher',
      component:Signhistry_teacher
    },
    {
      path: '/SignDetailOfDiffTime',
      name: 'SignDetailOfDiffTime',
      component:SignDetailOfDiffTime
    },
    {
      path: '/qiandaoDetail_student',
      name: 'qiandaoDetail_student',
      component: qiandaoDetail_student
    },
    {
      path: '/qiandaoDetail_teacher_student',
      name: 'qiandaoDetail_teacher_student',
      component: qiandaoDetail_teacher_student
    }

  ]
})
