webpackJsonp([9],{a20x:function(t,e){},ff2t:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={data:()=>({tableData:[{number:"",name:"",identity:"",school:"",course:"",class:"",situation:"",total_goal:""},{number:"",name:"",identity:"",school:"",course:"",class:"",situation:"",total_goal:""},{number:"",name:"",identity:"",school:"",course:"",class:"",situation:"",total_goal:""},{number:"",name:"",identity:"",school:"",course:"",class:"",situation:"",total_goal:""},{number:"",name:"",identity:"",school:"",course:"",class:"",situation:"",total_goal:""},{number:"",name:"",identity:"",school:"",course:"",class:"",situation:"",total_goal:""},{number:"",name:"",identity:"",school:"",course:"",class:"",situation:"",total_goal:""},{number:"",name:"",identity:"",school:"",course:"",class:"",situation:"",total_goal:""},{number:"",name:"",identity:"",school:"",course:"",class:"",situation:"",total_goal:""},{number:"",name:"",identity:"",school:"",course:"",class:"",situation:"",total_goal:""}],curPage:1,multipleSelection:[],selectForm:{selectSchool:"",selectCollege:"",selectNum:""},delList:[],isSearch:!1,isAdd:!1,editVisible:!1,delVisible:!1,form:{number:"",name:"",identity:"",school:"",college:"",course:"",class:"",access_goal:"",total_goal:""},rowId:-1}),created(){this.getData()},computed:{data(){}},methods:{handleCurrentChange(t){this.curPage=t,this.getData()},getData(){},search(t){this.isSearch=!0;this.$http({method:"get",url:"/api/user/s_sign_student",params:{data:this.selectForm}}).then(t=>{console.log(t);for(let e in t.body)this.tableData[e].number=t.data[e].User_No,this.tableData[e].name=t.data[e].User_Name,this.tableData[e].identity=t.data[e].User_Type,this.tableData[e].school=t.data[e].User_School,this.tableData[e].course=t.data[e].Course_Name,this.tableData[e].class=t.data[e].Class_Name,"1"==t.data[e].SignState?(this.tableData[e].situation="正常",this.tableData[e].total_goal=5):"2"==t.data[e].SignState?(this.tableData[e].situation="迟到",this.tableData[e].total_goal=4):"3"==t[e].situation?(this.tableData[e].situation="缺勤",this.tableData[e].total_goal=3):"4"==t[e].situation?(this.tableData[e].situation="早退",this.tableData[e].total_goal=2):"5"==t[e].situation&&(this.tableData[e].situation="请假",this.tableData[e].total_goal=1)})},formatter:(t,e)=>t.address,handleEdit(t,e){this.rowId=t;const l=this.tableData[t];this.form={name:l.name,age:l.age,address:l.address,email:l.email},this.editVisible=!0},handleDelete(t,e){this.rowId=t,this.delVisible=!0},delAll(){const t=this.multipleSelection.length;let e="";if(this.delList=this.delList.concat(this.multipleSelection),t){for(let l=0;l<t;l++)e+=this.multipleSelection[l].name+" ";this.$message.error("删除了"+e),this.multipleSelection=[]}else this.$message.error("请先勾选要删除的数据！")},handleSelectionChange(t){this.multipleSelection=t},saveEdit(){this.$set(this.tableData,this.rowId,this.form),this.editVisible=!1,this.isAdd?this.$message.success("数据添加成功"):this.$message.success(`修改第 ${this.rowId+1} 行成功`)},deleteRow(){this.tableData.splice(this.rowId,1),this.$message.success("删除成功"),this.delVisible=!1},addUser(){this.isAdd=!0,this.editVisible=!0,this.tableData.shift({name:this.form.name,age:this.form.age,address:this.form.address,email:this.form.email})}}},s={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"table"},[l("div",{staticClass:"crumbs"},[l("el-breadcrumb",{attrs:{separator:"/"}},[l("el-breadcrumb-item",[l("i",{staticClass:"el-icon-tickets"})])],1)],1),t._v(" "),l("div",{staticClass:"container"},[l("div",{staticClass:"handle-box"},[l("el-form",{ref:"selectForm",attrs:{model:t.selectForm}},[t._v("\n                学校：\n                "),l("el-select",{staticClass:"handle-select mr10",attrs:{placeholder:"全部学校"},model:{value:t.selectForm.selectSchool,callback:function(e){t.$set(t.selectForm,"selectSchool",e)},expression:"selectForm.selectSchool"}},[l("el-option",{key:"1",attrs:{label:"福州大学",value:"福州大学"}}),t._v(" "),l("el-option",{key:"2",attrs:{label:"福建师范大学",value:"福建师范大学"}})],1),t._v("\n                学院：\n                "),l("el-select",{staticClass:"handle-select mr10",attrs:{placeholder:"全部学院"},model:{value:t.selectForm.selectCollege,callback:function(e){t.$set(t.selectForm,"selectCollege",e)},expression:"selectForm.selectCollege"}},[l("el-option",{key:"1",attrs:{label:"数学与计算机科学学院",value:"数学与计算机科学学院"}}),t._v(" "),l("el-option",{key:"2",attrs:{label:"材料与化学学院",value:"材料与化学学院"}})],1),t._v("\n                学/工号：\n                "),l("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"请输入学/工号"},model:{value:t.selectForm.selectNum,callback:function(e){t.$set(t.selectForm,"selectNum",e)},expression:"selectForm.selectNum"}}),t._v(" "),l("el-button",{attrs:{type:"primary",icon:"search"},on:{click:function(e){return t.search(t.selectForm)}}},[t._v("查询")])],1)],1),t._v(" "),l("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""},on:{"selection-change":t.handleSelectionChange}},[l("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),l("el-table-column",{attrs:{prop:"number",label:"学/工号",sortable:"",width:"120"}}),t._v(" "),l("el-table-column",{attrs:{prop:"name",label:"姓名",sortable:"",width:"120"}}),t._v(" "),l("el-table-column",{attrs:{prop:"identity",label:"身份",width:"120"}}),t._v(" "),l("el-table-column",{attrs:{prop:"school",label:"学校",width:"160"}}),t._v(" "),l("el-table-column",{attrs:{prop:"course",label:"课程",width:"160"}}),t._v(" "),l("el-table-column",{attrs:{prop:"class",label:"班级",width:"120"}}),t._v(" "),l("el-table-column",{attrs:{prop:"situation",label:"签到情况",width:"120"}}),t._v(" "),l("el-table-column",{attrs:{prop:"total_goal",label:"获得分数",width:"120"}}),t._v(" "),l("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[l("el-button",{attrs:{size:"small"},on:{click:function(l){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),l("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(l){return t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),l("div",{staticClass:"delAll"},[l("el-button",{staticClass:"handle-del",attrs:{type:"primary",icon:"delete"},on:{click:t.delAll}},[t._v("批量删除")])],1),t._v(" "),l("div",{staticClass:"pagination"},[l("el-pagination",{attrs:{layout:"prev, pager, next",total:1e3},on:{"current-change":t.handleCurrentChange}})],1)],1),t._v(" "),l("el-dialog",{attrs:{title:this.isAdd?"新增":"编辑",visible:t.editVisible,width:"30%"},on:{"update:visible":function(e){t.editVisible=e}}},[l("el-form",{ref:"form",attrs:{model:t.form,"label-width":"50px"}},[l("el-form-item",{attrs:{label:"课程"}},[l("el-input",{attrs:{type:"course"},model:{value:t.form.course,callback:function(e){t.$set(t.form,"course",e)},expression:"form.course"}})],1),t._v(" "),l("el-form-item",{attrs:{label:"教师姓名"}},[l("el-input",{model:{value:t.form.teacher,callback:function(e){t.$set(t.form,"teacher",e)},expression:"form.teacher"}})],1),t._v(" "),l("el-form-item",{attrs:{label:"院系"}},[l("el-input",{model:{value:t.form.college,callback:function(e){t.$set(t.form,"college",e)},expression:"form.college"}})],1),t._v(" "),l("el-form-item",{attrs:{label:"学期"}},[l("el-input",{model:{value:t.form.term,callback:function(e){t.$set(t.form,"term",e)},expression:"form.term"}})],1),t._v(" "),l("el-form-item",{attrs:{label:"时间"}},[l("el-input",{model:{value:t.form.time,callback:function(e){t.$set(t.form,"time",e)},expression:"form.time"}})],1),t._v(" "),l("el-form-item",{attrs:{label:"地点"}},[l("el-input",{model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1)],1),t._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(e){t.editVisible=!1}}},[t._v("取 消")]),t._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:t.saveEdit}},[t._v("确 定")])],1)],1),t._v(" "),l("el-dialog",{attrs:{title:"提示",visible:t.delVisible,width:"400px"},on:{"update:visible":function(e){t.delVisible=e}}},[l("div",{staticClass:"del-dialog-cnt"},[t._v("是否确定删除？")]),t._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(e){t.delVisible=!1}}},[t._v("取 消")]),t._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:t.deleteRow}},[t._v("确 定")])],1)])],1)},staticRenderFns:[]};var o=l("C7Lr")(a,s,!1,function(t){l("a20x")},"data-v-6db5dadc",null);e.default=o.exports}});