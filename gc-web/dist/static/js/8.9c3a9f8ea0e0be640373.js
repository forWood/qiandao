webpackJsonp([8],{"/qGz":function(e,t){},GAbE:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s={data:()=>({tableData:[{number:"",name:"",identity:"",school:""},{number:"",name:"",identity:"",school:""},{number:"",name:"",identity:"",school:""},{number:"",name:"",identity:"",school:""},{number:"",name:"",identity:"",school:""},{number:"",name:"",identity:"",school:""},{number:"",name:"",identity:"",school:""},{number:"",name:"",identity:"",school:""},{number:"",name:"",identity:"",school:""},{number:"",name:"",identity:"",school:""}],curPage:1,multipleSelection:[],selectForm:{selectSchool:""},delList:[],isSearch:!1,isAdd:!1,editVisible:!1,delVisible:!1,form:{number:"",name:"",identity:"",school:""},rowId:-1}),created(){this.getData()},computed:{data(){return this.tableData.filter(e=>{let t=!1;for(let l=0;l<this.delList.length;l++)if(e.name===this.delList[l].name){t=!0;break}if(!t&&e.address.indexOf(this.selectProvince)>-1&&(e.name.indexOf(this.selectKeyWord)>-1||e.address.indexOf(this.selectKeyWord)>-1))return e})}},methods:{handleCurrentChange(e){this.curPage=e,this.getData()},getData(){},search(e){this.isSearch=!0;console.log(this.selectForm.selectSchool),this.$http({method:"get",url:"/api/user/q_role_select",params:{data:this.selectForm}}).then(e=>{for(let t in e.body)this.tableData[t].number=e.data[t].User_No,this.tableData[t].name=e.data[t].User_Name,this.tableData[t].identity=e.data[t].User_Type,this.tableData[t].school=e.data[t].User_School})},formatter:(e,t)=>e.address,handleEdit(e,t){this.rowId=e;const l=this.tableData[e];this.form={name:l.name,age:l.age,address:l.address,email:l.email},this.editVisible=!0},handleDelete(e,t){this.rowId=e,this.delVisible=!0},delAll(){const e=this.multipleSelection.length;let t="";if(this.delList=this.delList.concat(this.multipleSelection),e){for(let l=0;l<e;l++)t+=this.multipleSelection[l].name+" ";this.$message.error("删除了"+t),this.multipleSelection=[]}else this.$message.error("请先勾选要删除的数据！")},handleSelectionChange(e){this.multipleSelection=e},saveEdit(){this.$set(this.tableData,this.rowId,this.form),this.editVisible=!1,this.isAdd?this.$http({method:"put",url:"/api/user/q_role_insert",params:{data:this.form}}).then(e=>{201==e.data&&this.$message.success("数据添加成功")}):(this.$http({method:"put",url:"/api/user/q_role_update",params:{data:this.form}}).then(e=>{}),this.$message.success(`修改第 ${this.rowId+1} 行成功`))},deleteRow(){this.tableData.splice(this.rowId,1),this.$message.success("删除成功"),this.delVisible=!1},addUser(){this.isAdd=!0,this.editVisible=!0,this.tableData.shift({number:this.form.number,name:this.form.name,identity:this.form.identity,school:this.form.school})}}},i={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"table"},[l("div",{staticClass:"crumbs"},[l("el-breadcrumb",{attrs:{separator:"/"}},[l("el-breadcrumb-item",[l("i",{staticClass:"el-icon-tickets"})])],1)],1),e._v(" "),l("div",{staticClass:"container"},[l("div",{staticClass:"handle-box"},[l("el-form",{ref:"selectForm",attrs:{model:e.selectForm}},[l("el-select",{staticClass:"handle-select mr10",attrs:{placeholder:"全部身份"},model:{value:e.selectForm.selectSchool,callback:function(t){e.$set(e.selectForm,"selectSchool",t)},expression:"selectForm.selectSchool"}},[l("el-option",{key:"1",attrs:{label:"teacher",value:"teacher"}}),e._v(" "),l("el-option",{key:"2",attrs:{label:"student",value:"student"}})],1),e._v(" "),l("el-button",{attrs:{type:"primary",icon:"search"},on:{click:function(t){return e.search(e.selectForm)}}},[e._v("查询")]),e._v(" "),l("el-button",{attrs:{type:"primary",icon:"search"},on:{click:e.addUser}},[e._v("添加")])],1)],1),e._v(" "),l("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""},on:{"selection-change":e.handleSelectionChange}},[l("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),l("el-table-column",{attrs:{prop:"number",label:"学/工号",sortable:"",width:"120"}}),e._v(" "),l("el-table-column",{attrs:{prop:"name",label:"姓名",sortable:"",width:"120"}}),e._v(" "),l("el-table-column",{attrs:{prop:"identity",label:"身份",width:"120"}}),e._v(" "),l("el-table-column",{attrs:{prop:"school",label:"学校",width:"160"}}),e._v(" "),l("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{size:"small"},on:{click:function(l){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),l("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(l){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),l("div",{staticClass:"delAll"},[l("el-button",{staticClass:"handle-del",attrs:{type:"primary",icon:"delete"},on:{click:e.delAll}},[e._v("批量删除")])],1),e._v(" "),l("div",{staticClass:"pagination"},[l("el-pagination",{attrs:{layout:"prev, pager, next",total:1e3},on:{"current-change":e.handleCurrentChange}})],1)],1),e._v(" "),l("el-dialog",{attrs:{title:this.isAdd?"新增":"编辑",visible:e.editVisible,width:"30%"},on:{"update:visible":function(t){e.editVisible=t}}},[l("el-form",{ref:"form",attrs:{model:e.form,"label-width":"50px"}},[l("el-form-item",{attrs:{label:"学/工号"}},[l("el-input",{attrs:{type:"course"},model:{value:e.form.number,callback:function(t){e.$set(e.form,"number",t)},expression:"form.number"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"姓名"}},[l("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"身份"}},[l("el-input",{model:{value:e.form.identity,callback:function(t){e.$set(e.form,"identity",t)},expression:"form.identity"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"学校"}},[l("el-input",{model:{value:e.form.school,callback:function(t){e.$set(e.form,"school",t)},expression:"form.school"}})],1)],1),e._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v("取 消")]),e._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:e.saveEdit}},[e._v("确 定")])],1)],1),e._v(" "),l("el-dialog",{attrs:{title:"提示",visible:e.delVisible,width:"400px"},on:{"update:visible":function(t){e.delVisible=t}}},[l("div",{staticClass:"del-dialog-cnt"},[e._v("是否确定删除？")]),e._v(" "),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.delVisible=!1}}},[e._v("取 消")]),e._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:e.deleteRow}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]};var a=l("C7Lr")(s,i,!1,function(e){l("/qGz")},"data-v-a1674192",null);t.default=a.exports}});