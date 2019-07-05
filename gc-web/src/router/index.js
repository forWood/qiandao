import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
// 路由懒加载
const home = resolve => require(['../components/common/Home.vue'], resolve)
const dashboard = resolve => require(['../components/page/Dashboard.vue'], resolve)
const table = resolve => require(['../components/page/BaseTable.vue'], resolve)
const tab = resolve => require(['../components/page/Tabs.vue'], resolve)
const form = resolve => require(['../components/page/BaseForm.vue'], resolve)
const editor = resolve => require(['../components/page/VueEditor.vue'], resolve)
const markdown = resolve => require(['../components/page/Markdown.vue'], resolve)
const upload = resolve => require(['../components/page/Upload.vue'], resolve)
const drag = resolve => require(['../components/page/DragList.vue'], resolve)
const permission = resolve => require(['../components/page/Permission.vue'], resolve)
const login = resolve => require(['../components/page/Login.vue'], resolve)
const error404 = resolve => require(['../components/page/404.vue'], resolve)
const error403 = resolve => require(['../components/page/403.vue'], resolve)
const s_course = resolve => require(['../components/page/S_course.vue'], resolve)
const s_ts_account = resolve => require(['../components/page/S_ts_account.vue'], resolve)
const s_sign_situation = resolve => require(['../components/page/S_sign_situation.vue'], resolve)
const s_school = resolve => require(['../components/page/S_school.vue'], resolve)
const s_sign_student = resolve => require(['../components/page/S_sign_student.vue'], resolve)
const q_role = resolve => require(['../components/page/Q_role.vue'], resolve)

export default new Router({
    mode: 'history',  //把Router的mode修改为history模式,VueRouter默认的模式为HASH模式
    routes: [
        // {
        //     path: '/',
        //     name: '首页',
        //     redirect: '/dashboard'
        // },
        {
            path: '',
            component: home,
            // name: 'home',
            // meta: { title: 'home' },
            redirect: 'login',
            children: [
                {
                    path: '/dashboard',
                    component: dashboard,
                    name: 'dashboard',
                    meta: {
                        title: '系统首页',
                        requireAuth:true
                    }

                },
                {
                    path: '/table',
                    component: table,
                    name: 'table',
                    meta: {
                        title: '基础表格',
                        requireAuth:true
                    }
                },
                {
                    path: '/tabs',
                    component: tab,
                    name: 'tab',
                    meta: {
                        title: 'tab选项卡',
                        requireAuth:true
                    }
                },
                {
                    path: '/form',
                    component: form,
                    name: 'form',
                    meta: {
                        title: '基本表单',
                        requireAuth:true
                    }
                },
                {
                    // 富文本编辑器组件
                    path: '/editor',
                    component: editor,
                    name: 'editor',
                    meta: {
                        title: '富文本编辑器',
                        requireAuth:true
                    }
                },
                {
                    // markdown组件
                    path: '/markdown',
                    component: markdown,
                    name: 'markdown',
                    meta: {
                        title: 'markdown编辑器',
                        requireAuth:true
                    }
                },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: upload,
                    name: 'upload',
                    meta: {
                        title: '文件上传',
                        requireAuth:true
                    }
                },
                {
                    // 拖拽列表组件
                    path: '/drag',
                    component: drag,
                    name: 'drag',
                    meta: {
                        title: '拖拽列表',
                        requireAuth:true
                    }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: permission,
                    name: 'permission',
                    meta: {
                        title: '权限测试',
                        requireAuth: true
                    }
                },
                {
                    // 课程管理页面
                    path: '/s_course',
                    component: s_course,
                    name: 's_course',
                    meta: {
                        title: '课程管理',
                        requireAuth: true
                    }
                },
                {
                    // 教师和学生账号管理页面
                    path: '/s_ts_account',
                    component: s_ts_account,
                    name: 's_ts_account',
                    meta: {
                        title: '教师和学生账号管理',
                        requireAuth: true
                    }
                },
                {
                    //课程签到情况
                    path: '/s_sign_situation',
                    component: s_sign_situation,
                    name: 's_sign_situation',
                    meta: {
                        title: '课程签到情况',
                        requireAuth: true
                    }
                },
                {
                    //学校管理页面
                    path: '/s_school',
                    component: s_school,
                    name: 's_school',
                    meta: {
                        title: '学校管理',
                        requireAuth: true
                    }
                },{
                    //学生签到情况
                    path: '/s_sign_student',
                    component: s_sign_student,
                    name: 's_sign_student',
                    meta: {
                        title: '学生签到情况',
                        requireAuth: true
                    }
                },{
                    //角色管理
                    path: '/q_role',
                    component: q_role,
                    name: 'q_role',
                    meta: {
                        title: '人员角色管理',
                        requireAuth: true
                    }
                }
            ]
        },
       
        {
            path: '/login',
            component: login,
            name: 'login',
        },
        {
            path: '/404',
            component: error404,
            name: 'error404',
        },
        {
            path: '/403',
            component: error403,
            name: 'error403',
        },
        {
            path: '*',
            redirect: '/404',
            name: '404',
        }
    ]
})
