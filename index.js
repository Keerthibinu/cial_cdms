const nodemailer = require('nodemailer');
const PDFDocument = require('pdfkit');
const ExcelJS = require('exceljs');
const xlsx = require('xlsx');
var http = require('http');
var fs = require('fs');
const session =require('express-session');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'cdms4ciasl@gmail.com',
      pass: 'knjwmuxftuffwmuh'
    }
  });

const bcrypt = require('bcrypt');
const saltRounds = 10;
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const encoder = bodyParser.urlencoded({ extended: true });
app.use(bodyParser.urlencoded({ extended: true })); 
app.use("/assets",express.static("assets"));
app.use(session({
    secret: 'qwerty',
    resave:false,
    saveUninitialized:true
}));

const PORT = process.env.PORT || 8080;
var mysql = require('mysql2');
const { error } = require("console");
const { FORMERR } = require('dns');

var v1=0,v2=0,v3=0,v4=0,v5=0,v6=0,v7=0,v8=0,v9=0,v10=0,v11=0,v12=0,v13=0,v14=0,v15=0,v16=0,v17=0;
var length_of_rows=0,length_of_rows_permission=0,length_of_rows_authorisation_cov=0,length_of_rows_raa,cnt5=0,cnt6=0,length_of_rows_operator,cnt=0,length_of_rows_gse,length_of_rows_tools=0,length_of_rows_audit_operator,cnt1=0,cnt2=0,length_of_rows_technician=0,length_of_rows_reg_audit=0,cnt3=0,length_of_rows_quality_auditor=0,length_of_rows_internal=0,cnt4=0,length_of_rows_amelicense=0,length_of_rows_amecont=0,length_of_rows_ameauth=0,length_of_rows_line_main,length_of_rows_audit_of_external,cnt7=0;
let today = new Date();
var length_of_rows_storage = 0;
var connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'root123',
    database: 'new_schema'
});
connection.connect();
connection.query("SELECT COUNT(*) AS C FROM new_schema.authorisation_coverage",function(error,result){
    if (error) throw error;
    length_of_rows_authorisation_cov = result[0].C;
});
connection.query("SELECT COUNT(*) AS C FROM new_schema.all_staff_data",function(error,result){
      if (error) throw error;
      length_of_rows = result[0].C;
});
connection.query("SELECT COUNT(*) AS C FROM new_schema.storage_life_monitoring",function(error,result){
    if (error) throw error;
    length_of_rows_storage = result[0].C;
});
connection.query("SELECT COUNT(*) AS C FROM new_schema.operators",function(error,result){
      if (error) throw error;
      length_of_rows_operator = result[0].C;
});
connection.query("SELECT COUNT(*) AS C FROM new_schema.regulators_amo_approvals",function(error,result){
    if (error) throw error;
    length_of_rows_raa = result[0].C;
});
connection.query("SELECT COUNT(*) AS C FROM new_schema.tools_and_equipment_calibration",function(error,result){
    if (error) throw error;
    length_of_rows_tools = result[0].C;
});
connection.query("SELECT COUNT(*) AS C FROM new_schema.technician_continuation_trainings",function(error,result){
    if (error) throw error;
    length_of_rows_technician = result[0].C;
});
connection.query("SELECT COUNT(*) AS C FROM new_schema.regular_audit",function(error,result){
    if (error) throw error;
    length_of_rows_reg_audit = result[0].C;
});
connection.query("SELECT COUNT(*) AS C FROM new_schema.audit_by_airline_operators",function(error,result){
    if (error) throw error;
    length_of_rows_audit_operator = result[0].C;
});
connection.query("SELECT COUNT(*) AS C FROM new_schema.quality_audit",function(error,result){
    if (error) throw error;
    length_of_rows_quality_auditor = result[0].C;
});
connection.query("SELECT COUNT(*) AS C FROM new_schema.line_maintenance",function(error,result){
    if (error) throw error;
    length_of_rows_line_main = result[0].C;
});
connection.query("SELECT COUNT(*) AS C FROM new_schema.audit_of_external",function(error,result){
    if (error) throw error;
    length_of_rows_audit_of_external = result[0].C;
});
connection.query("SELECT COUNT(*) AS C FROM new_schema.internal_quality_auditors",function(error,result){
    if (error) throw error;
    length_of_rows_internal = result[0].C;
});
connection.query("SELECT COUNT(*) AS C FROM new_schema.amelicense",function(error,result){
    if (error) throw error;
    length_of_rows_amelicense = result[0].C;
});
connection.query("SELECT COUNT(*) AS C FROM new_schema.ame_continuation_trainings",function(error,result){
    if (error) throw error;
    length_of_rows_amecont = result[0].C;
});
connection.query("SELECT COUNT(*) AS C FROM new_schema.ame_authorisations",function(error,result){
    if (error) throw error;
    length_of_rows_ameauth = result[0].C;
});
connection.query("SELECT COUNT(*) AS C FROM new_schema.gse",function(error,result){
    if (error) throw error;
    length_of_rows_gse = result[0].C;
});
connection.query("SELECT COUNT(*) AS C FROM new_schema.permissions",function(error,result){
    if (error) throw error;
    length_of_rows_permission = result[0].C;
});

var count_regulators_amo_approvals = 0,count_regulators_amo_approvals_orange = 0,count_regulators_amo_approvals_red = 0,regulator_approval={};
connection.query("SELECT * FROM new_schema.regulators_amo_approvals", function (error, result) {
    if (error) throw error;
    for(let i=0;i<length_of_rows_raa;i++)
    {
        /*
        var approv = new Date(result[i].approval_validity_date);
        var total_seconds = Math.abs(today - approv) / 1000; 
        var days_difference_5 = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].approval_validity_date;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference_5<30)
        {
            cnt6++;
        }
        if(days_difference_5<2)
        {
            count_regulators_amo_approvals_red++;
        }
        else if(days_difference_5<15)
        {
            count_regulators_amo_approvals_orange++;
        }
        else if(days_difference_5<30)
        {
            count_regulators_amo_approvals++;
        }
        if(days_difference_5==30){
            regulator_approval[result[i].regulator]="30";}
        if(days_difference_5==15){
            regulator_approval[result[i].regulator]="15";}    
        if(days_difference_5>0 && days_difference_5<6){
            regulator_approval[result[i].regulator]=result[i].approval_validity_date;}
    }}
});
var count_operators = 0,count_operators_orange=0,count_operators_red=0,operator_agree={};
connection.query("SELECT * FROM new_schema.operators", function (error, result) {
    if (error) throw error;
    for(let i=0;i<length_of_rows_operator;i++)
    {
        /*
        var approv = new Date(result[i].agree_validity_date);
        var total_seconds = Math.abs(today - approv) / 1000; 
        var days_difference_5 = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].agree_validity_date;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference_5<30)
        {
            cnt6++;
        }
        if(days_difference_5<2)
        {
            count_operators_red++;
        }
        else if(days_difference_5<15)
        {
            count_operators_orange++;
        }
        else if(days_difference_5<30)
        {
            count_operators++;
        }
        if(days_difference_5==30){
            operator_agree[result[i].operator]="30";}
        if(days_difference_5==15){
            operator_agree[result[i].operator]="15";}    
        if(days_difference_5>0 && days_difference_5<6){
            operator_agree[result[i].operator]=result[i].agree_validity_date;}
    }}
});
var count_technician = 0,count_technician_orange=0,count_technician_red=0,tech_dgr={},tech_ewis={},tech_fts={},tech_hf={},tech_lm={},tech_sms={},tech_store={};
connection.query("SELECT * FROM new_schema.technician_continuation_trainings", function (error, result) {
    if (error) throw error;
    for(let i=0;i<length_of_rows_technician;i++)
    {
        /*
        var f_t_s = new Date(result[i].fts);
        var total_seconds = Math.abs(today - f_t_s) / 1000; 
        var days_difference_5 = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].fts;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference_5<30)
        {
            cnt2++;
        }
        if(days_difference_5<2)
        {
            count_technician_red++;
        }
        else if(days_difference_5<15)
        {
            count_technician_orange++;
        }
        else if(days_difference_5<30)
        {
            count_technician++;
        }
        if(days_difference_5==30){
            tech_fts[result[i].name]="30";}
        if(days_difference_5==15){
            tech_fts[result[i].name]="15";}    
        if(days_difference_5>0 && days_difference_5<6){
            tech_fts[result[i].name]=result[i].fts;}}
        /*
        var h_f = new Date(result[i].hf);
        var total_seconds = Math.abs(today - h_f) / 1000; 
        var days_difference_5 = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].hf;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference_5<30)
        {
            cnt2++;
        }
        if(days_difference_5<2)
        {
            count_technician_red++;
        }
        else if(days_difference_5<15)
        {
            count_technician_orange++;
        }
        else if(days_difference_5<30)
        {
            count_technician++;
        }
        if(days_difference_5==30){
            tech_hf[result[i].name]="30";}
        if(days_difference_5==15){
            tech_hf[result[i].name]="15";}    
        if(days_difference_5>0 && days_difference_5<6){
            tech_hf[result[i].name]=result[i].hf;}}
        /*
        var ews = new Date(result[i].ewis);
        var total_seconds = Math.abs(today - ews) / 1000; 
        var days_difference_7 = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].ewis;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_7 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference_7<30)
        {
            cnt2++;
        }
        if(days_difference_7<2)
        {
            count_technician_red++;
        }
        else if(days_difference_7<15)
        {
            count_technician_orange++;
        }
        else if(days_difference_7<30)
        {
            count_technician++;
        }
        if(days_difference_7==30){
            tech_ewis[result[i].name]="30";}
        if(days_difference_7==15){
            tech_ewis[result[i].name]="15";}    
        if(days_difference_7>0 && days_difference_7<6){
            tech_ewis[result[i].name]=result[i].ewis;}}
        /*
        var s_s = new Date(result[i].sms);
        var total_seconds = Math.abs(today - s_s) / 1000; 
        var days_difference_9 = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].sms;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_9 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference_9<30)
        {
            cnt2++;
        }
        if(days_difference_9<2)
        {
            count_technician_red++;
        }
        else if(days_difference_9<15)
        {
            count_technician_orange++;
        }
        else if(days_difference_9<30)
        {
            count_technician++;
        }
        if(days_difference_9==30){
            tech_sms[result[i].name]="30";}
        if(days_difference_9==15){
            tech_sms[result[i].name]="15";}    
        if(days_difference_9>0 && days_difference_9<6){
            tech_sms[result[i].name]=result[i].sms;}}
        /*
        var lm = new Date(result[i].lm_procedure_moe_and_regln);
        var total_seconds = Math.abs(today - lm) / 1000; 
        var days_difference_11 = Math.floor (total_seconds / (60 * 60 * 24));
        */
        var inputDate = result[i].lm_procedure_moe_and_regln;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_11 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs); 
        if(days_difference_11<30)
        {
            cnt2++;
        }
        if(days_difference_11<2)
        {
            count_technician_red++;
        }
        else if(days_difference_11<15)
        {
            count_technician_orange++;
        }
        else if(days_difference_11<30)
        {
            count_technician++;
        }}
        if(days_difference_11==30){
            tech_lm[result[i].name]="30";}
        if(days_difference_11==15){
            tech_lm[result[i].name]="15";}    
        if(days_difference_11>0 && days_difference_11<6){
            tech_lm[result[i].name]=result[i].lm_procedure_moe_and_regln;}
        /*
        var stor = new Date(result[i].store_procedure_and_esds);
        var total_seconds = Math.abs(today - stor) / 1000; 
        var days_difference_13 = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].store_procedure_and_esds;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_13 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs); 
        if(days_difference_13<30)
        {
            cnt2++;
        }
        if(days_difference_13<2)
        {
            count_technician_red++;
        }
        else if(days_difference_13<15)
        {
            count_technician_orange++;
        }
        else if(days_difference_13<30)
        {
            count_technician++;
        }
        if(days_difference_13==30){
            tech_store[result[i].name]="30";}
        if(days_difference_13==15){
            tech_store[result[i].name]="15";}    
        if(days_difference_13>0 && days_difference_13<6){
            tech_store[result[i].name]=result[i].store_procedure_and_esds;}}
        /*
        var dg = new Date(result[i].dgr);
        var total_seconds = Math.abs(today - dg) / 1000; 
        var days_difference_15 = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].dgr;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_15 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs); 
        if(days_difference_15<30)
        {
            cnt2++;
        }
        if(days_difference_15<2)
        {
            count_technician_red++;
        }
        else if(days_difference_15<15)
        {
            count_technician_orange++;
            tech_dgr[result[i].name]=result[i].dgr;
        }
        else if(days_difference_15<30)
        {
            count_technician++;
        }
        if(days_difference_15==30){
            tech_dgr[result[i].name]="30";}
        if(days_difference_15==15){
            tech_dgr[result[i].name]="15";}    
        if(days_difference_15>0 && days_difference_15<6){
            tech_dgr[result[i].name]=result[i].dgr;}}
    }
});
var count_amelicense = 0,count_amelicense_orange = 0,count_amelicense_red = 0,ame_easa={},ame_dgca={};
connection.query("SELECT * FROM new_schema.amelicense", function (error, result) {
    if (error) throw error;
    for(let i=0;i<length_of_rows_amelicense;i++)
    {
       /* var dgca = new Date(result[i].dgca_lic_validity);
        var total_seconds = Math.abs(today - dgca) / 1000; 
        var days_difference_5 = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].dgca_lic_validity;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

        if(days_difference_5<30)
        {
            cnt4++;
        }
        if(days_difference_5<2)
        {
            count_amelicense_red++;
        }
        else if(days_difference_5<15)
        {
            count_amelicense_orange++;
        }
        else if(days_difference_5<30)
        {
            count_amelicense++;
        }
        if(days_difference_5==30){
            ame_dgca[result[i].name]="30";}
        if(days_difference_5==15){
            ame_dgca[result[i].name]="15";}    
        if(days_difference_5>0 && days_difference_5<6){
            ame_dgca[result[i].name]=result[i].dgca_lic_validity;}}
        /*
        var easa = new Date(result[i].easa_lic_validity);
        var total_seconds = Math.abs(today - easa) / 1000; 
        var days_difference_7 = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].easa_lic_validity;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var currentDate = new Date();
        var days_difference_7 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference_7<30)
        {
            cnt4++;
        }
        if(days_difference_7<2)
        {
            count_amelicense_red++;
        }
        else if(days_difference_7<15)
        {
            count_amelicense_orange++;
        }
        else if(days_difference_7<30)
        {
            count_amelicense++;
        }
        if(days_difference_7==30){
            ame_easa[result[i].name]="30";}
        if(days_difference_7==15){
            ame_easa[result[i].name]="15";}    
        if(days_difference_7>0 && days_difference_7<6){
            ame_easa[result[i].name]=result[i].easa_lic_validity;}}
    }
   /* transporter.sendMail(mailOptions, (e, info) => {
        if (e) {
          console.error(e);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      */
});
var count_gse = 0,count_gse_orange=0,count_gse_red=0,gse_nextcheck={};
connection.query("SELECT * FROM new_schema.gse", function (error, result) {
    if (error) throw error;
    for(let i=0;i<length_of_rows_gse;i++)
    {
        /*
        var nxt = new Date(result[i].next_check);
        var total_seconds = Math.abs(today - nxt) / 1000; 
        var days_difference_5 = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].next_check;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference_5<30)
        {
            cnt5++;
        }
        if(days_difference_5<2)
        {
            count_gse_red++;
        }
        else if(days_difference_5<15)
        {
            count_gse_orange++;
        }
        else if(days_difference_5<30)
        {
            count_gse++;
        }
        if(days_difference_5==30){
            gse_nextcheck[result[i].eqpt_name]="30";}
        if(days_difference_5==15){
            gse_nextcheck[result[i].eqpt_name]="15";}    
        if(days_difference_5>0 && days_difference_5<6){
            gse_nextcheck[result[i].eqpt_name]=result[i].next_check;}}
    }
});
var count_storage = 0,count_storage_orange=0,count_storage_red=0,store_life={};
connection.query("SELECT * FROM new_schema.storage_life_monitoring", function (error, result) {
    if (error) throw error;
    for(let i=0;i<length_of_rows_storage;i++)
    {
        /*
        var nxt = new Date(result[i].storage_life);
        var total_seconds = Math.abs(today - nxt) / 1000; 
        var days_difference_5 = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].storage_life;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference_5<30)
        {
            cnt7++;
        }
        if(days_difference_5<2)
        {
            count_storage_red++;
        }
        else if(days_difference_5<15)
        {
            count_storage_orange++;
        }
        else if(days_difference_5<30)
        {
            count_storage++;
        }
        if(days_difference_5==30){
            store_life[result[i].nomenclature]="30";}
        if(days_difference_5==15){
            store_life[result[i].nomenclature]="15";}    
        if(days_difference_5>0 && days_difference_5<6){
            store_life[result[i].nomenclature]=result[i].storage_life;}}
    }
});
var count_all_staff_data = 0,count_all_staff_data_orange=0,count_all_staff_data_red=0,allstaffdata_contract={},allstaffdata_aep={},allstaffdata_adp={},allstaffdata_avsec={},allstaffdata_pcc={};
connection.query("SELECT * FROM new_schema.all_staff_data", function (error, result) {
    if (error) throw error;
    for(let i=0;i<length_of_rows;i++)
    {
      /*
        var contract = new Date(result[i].contract_validity_date);
        var total_seconds = Math.abs(today - contract) / 1000; 
        var days_difference_5 = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].contract_validity_date;
      if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
      var inputDateTime = new Date(yyyy, mm - 1, dd); 
      var oneDayMs = 24 * 60 * 60 * 1000;
      var  currentDate = new Date();
      var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference_5<30)
        {
            cnt++;
        }
        if(days_difference_5<2)
        {
            count_all_staff_data_red++;
        }
        else if(days_difference_5<15)
        {
            count_all_staff_data_orange++;
        }
        else if(days_difference_5<30)
        {
            count_all_staff_data++;
        }
        if(days_difference_5==30){
            allstaffdata_contract[result[i].name]="30";}
        if(days_difference_5==15){
            allstaffdata_contract[result[i].name]="15";}    
        if(days_difference_5>0 && days_difference_5<6){
            allstaffdata_contract[result[i].name]=result[i].contract_validity_date;}}
      /*
        var avsec = new Date(result[i].avsec_training_due_date);
        var total_seconds = Math.abs(today - avsec) / 1000; 
        var days_difference_7 = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].avsec_training_due_date;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_7 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
         if(days_difference_7<30)
        {
            cnt++;
        }
        if(days_difference_7<2)
        {
            count_all_staff_data_red++;
        }
        else if(days_difference_7<15)
        {
            count_all_staff_data_orange++;
        }
        else if(days_difference_7<30)
        {
            count_all_staff_data++;
        }
        if(days_difference_7==30){
            allstaffdata_avsec[result[i].name]="30";}
        if(days_difference_7==15){
            allstaffdata_avsec[result[i].name]="15";}    
        if(days_difference_7>0 && days_difference_7<6){
            allstaffdata_avsec[result[i].name]=result[i].avsec_training_due_date;}}
      /*
        var aep = new Date(result[i].aep_validity);
        var total_seconds = Math.abs(today - aep) / 1000; 
        var days_difference_9 = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].aep_validity;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_9 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference_9<30)
        {
            cnt++;
        }
        if(days_difference_9<2)
        {
            count_all_staff_data_red++;
        }
        else if(days_difference_9<15)
        {
            count_all_staff_data_orange++;
        }
        else if(days_difference_9<30)
        {
            count_all_staff_data++;
        }
        if(days_difference_9==30){
            allstaffdata_aep[result[i].name]="30";}
        if(days_difference_9==15){
            allstaffdata_aep[result[i].name]="15";}    
        if(days_difference_9>0 && days_difference_9<6){
            allstaffdata_aep[result[i].name]=result[i].aep_validity;}}
      /*
        var adp = new Date(result[i].adp_validity);
        var total_seconds = Math.abs(today - adp) / 1000; 
        var days_difference_11 = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].adp_validity;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_11 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference_11<30)
        {
            cnt++;
        }
        if(days_difference_11<2)
        {
            count_all_staff_data_red++;
        }
        else if(days_difference_11<15)
        {
            count_all_staff_data_orange++;
        }
        else if(days_difference_11<30)
        {
            count_all_staff_data++;
        }
        if(days_difference_11==30){
            allstaffdata_adp[result[i].name]="30";}
        if(days_difference_11==15){
            allstaffdata_adp[result[i].name]="15";}    
        if(days_difference_11>0 && days_difference_11<6){
            allstaffdata_adp[result[i].name]=result[i].adp_validity;}}
      
        var inputDate = result[i].pcc;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_7 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
         if(days_difference_7<30)
        {
            cnt++;
        }
        if(days_difference_7<2)
        {
            count_all_staff_data_red++;
        }
        else if(days_difference_7<15)
        {
            count_all_staff_data_orange++;
        }
        else if(days_difference_7<30)
        {
            count_all_staff_data++;
        }
        if(days_difference_7==30){
            allstaffdata_pcc[result[i].name]="30";}
        if(days_difference_7==15){
            allstaffdata_pcc[result[i].name]="15";}    
        if(days_difference_7>0 && days_difference_7<6){
            allstaffdata_pcc[result[i].name]=result[i].pcc;}}
    }
});
var count_tools = 0,count_tools_orange=0,count_tools_red=0,tools_calib={};
connection.query("SELECT * FROM new_schema.tools_and_equipment_calibration", function (error, result) {
    if (error) throw error;
    for(let i=0;i<length_of_rows_tools;i++)
    {   /*
        var caliberation_rem = new Date(result[i].caliberation_due_date);
        var total_seconds = Math.abs(today - caliberation_rem) / 1000; 
        var days_difference_5 = Math.floor (total_seconds / (60 * 60 * 24)); 
        */
        var inputDate = result[i].caliberation_due_date;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference_5<30)
        {
            cnt1++;
        }
        if(days_difference_5<2)
        {
            count_tools_red++;
        }
        else if(days_difference_5<15)
        {
            count_tools_orange++;
        }
        else if(days_difference_5<30)
        {
            count_tools++;
        }
        if(days_difference_5==30){
            tools_calib[result[i].nomenclature]="30";}
        if(days_difference_5==15){
            tools_calib[result[i].nomenclature]="15";}    
        if(days_difference_5>0 && days_difference_5<6){
            tools_calib[result[i].nomenclature]=result[i].caliberation_due_date;}}
    }
});
var count_ame_continuation_trainings = 0,count_ame_continuation_trainings_orange=0,count_ame_continuation_trainings_red=0,amect1={},amect2={},amect3={},amect4={},amect5={},amect6={},amect7={},amect8={},amect9={},amect10={},amect11={},amect12={},amect13={},amect14={},amect15={},amect16={},amect17={},amect18={},amect19={},amect20={},amect21={};
connection.query("SELECT * FROM new_schema.ame_continuation_trainings", function (error, result) {
    if (error) throw error;
    for(let i=0;i<length_of_rows_amecont;i++)
    {
        /*var a = new Date(result[i].A320_V2500);
        var total_seconds = Math.abs(today - a) / 1000; 
        var days_difference = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].A320_V2500;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var currentDate = new Date();
        var days_difference = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

        if(days_difference<30)
        {
            cnt4++;
        }
        if(days_difference<2)
        {
            count_ame_continuation_trainings_red++;
        }
        else if(days_difference<15)
        {
            count_ame_continuation_trainings_orange++;
        }
        else if(days_difference<30)
        {
            count_ame_continuation_trainings++;
        }
        if(days_difference==30){
            amect1[result[i].name]="30";}
        if(days_difference==15){
            amect1[result[i].name]="15";}    
        if(days_difference>0 && days_difference<6){
            amect1[result[i].name]=result[i].A320_V2500;}}
        /*var a = new Date(result[i].A320_CFM_LEAP_1A);
        var total_seconds = Math.abs(today - a) / 1000; 
        var days_difference = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].A320_CFM_LEAP_1A;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var currentDate = new Date();
        var days_difference = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference<30)
        {
            cnt4++;
        }
        if(days_difference<2)
        {
            count_ame_continuation_trainings_red++;
        }
        else if(days_difference<15)
        {
            count_ame_continuation_trainings_orange++;
        }
        else if(days_difference<30)
        {
            count_ame_continuation_trainings++;
        }
        if(days_difference==30){
            amect2[result[i].name]="30";}
        if(days_difference==15){
            amect2[result[i].name]="15";}    
        if(days_difference>0 && days_difference<6){
            amect2[result[i].name]=result[i].A320_CFM_LEAP_1A;}}
        /*var a = new Date(result[i].A330_RR_T700);
        var total_seconds = Math.abs(today - a) / 1000; 
        var days_difference = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].A330_RR_T700;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var currentDate = new Date();
        var days_difference = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference<30)
        {
            cnt4++;
        }
        if(days_difference<2)
        {
            count_ame_continuation_trainings_red++;
        }
        else if(days_difference<15)
        {
            count_ame_continuation_trainings_orange++;
        }
        else if(days_difference<30)
        {
            count_ame_continuation_trainings++;
        }
        if(days_difference==30){
            amect3[result[i].name]="30";}
        if(days_difference==15){
            amect3[result[i].name]="15";}    
        if(days_difference>0 && days_difference<6){
            amect3[result[i].name]=result[i].A330_RR_T700;}}
        /*
        var a = new Date(result[i].A330_NEO_RR_T7000);
        var total_seconds = Math.abs(today - a) / 1000; 
        var days_difference = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].A330_NEO_RR_T7000;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var currentDate = new Date();
        var days_difference = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference<30)
        {
            cnt4++;
        }
        if(days_difference<2)
        {
            count_ame_continuation_trainings_red++;
        }
        else if(days_difference<15)
        {
            count_ame_continuation_trainings_orange++;
        }
        else if(days_difference<30)
        {
            count_ame_continuation_trainings++;
        }
        if(days_difference==30){
            amect4[result[i].name]="30";}
        if(days_difference==15){
            amect4[result[i].name]="15";}    
        if(days_difference>0 && days_difference<6){
            amect4[result[i].name]=result[i].A330_NEO_RR_T7000;}}
        /*
        var a = new Date(result[i].A330_GE_CF6);
        var total_seconds = Math.abs(today - a) / 1000; 
        var days_difference = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].A330_GE_CF6;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var currentDate = new Date();
        var days_difference = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference<30)
        {
            cnt4++;
        }
        if(days_difference<2)
        {
            count_ame_continuation_trainings_red++;
        }
        else if(days_difference<15)
        {
            count_ame_continuation_trainings_orange++;
        }
        else if(days_difference<30)
        {
            count_ame_continuation_trainings++;
        }
        if(days_difference==30){
            amect5[result[i].name]="30";}
        if(days_difference==15){
            amect5[result[i].name]="15";}    
        if(days_difference>0 && days_difference<6){
            amect5[result[i].name]=result[i].A330_GE_CF6;}}
        /*
        var a = new Date(result[i].A330_P_AND_W);
        var total_seconds = Math.abs(today - a) / 1000; 
        var days_difference = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].A330_P_AND_W;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var currentDate = new Date();
        var days_difference = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference<30)
        {
            cnt4++;
        }
        if(days_difference<2)
        {
            count_ame_continuation_trainings_red++;
        }
        else if(days_difference<15)
        {
            count_ame_continuation_trainings_orange++;
        }
        else if(days_difference<30)
        {
            count_ame_continuation_trainings++;
        }
        if(days_difference==30){
            amect6[result[i].name]="30";}
        if(days_difference==15){
            amect6[result[i].name]="15";}    
        if(days_difference>0 && days_difference<6){
            amect6[result[i].name]=result[i].A330_P_AND_W;}}
        /*
        var a = new Date(result[i].A350_RR_T_XWB);
        var total_seconds = Math.abs(today - a) / 1000; 
        var days_difference = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].A350_RR_T_XWB;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var currentDate = new Date();
        var days_difference = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference<30)
        {
            cnt4++;
        }
        if(days_difference<2)
        {
            count_ame_continuation_trainings_red++;
        }
        else if(days_difference<15)
        {
            count_ame_continuation_trainings_orange++;
        }
        else if(days_difference<30)
        {
            count_ame_continuation_trainings++;
        }
        if(days_difference==30){
            amect7[result[i].name]="30";}
        if(days_difference==15){
            amect7[result[i].name]="15";}    
        if(days_difference>0 && days_difference<6){
            amect7[result[i].name]=result[i].A350_RR_T_XWB;}}
        /*
        var a = new Date(result[i].B737_CFM56);
        var total_seconds = Math.abs(today - a) / 1000; 
        var days_difference = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].B737_CFM56;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var currentDate = new Date();
        var days_difference = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference<30)
        {
            cnt4++;
        }
        if(days_difference<2)
        {
            count_ame_continuation_trainings_red++;
        }
        else if(days_difference<15)
        {
            count_ame_continuation_trainings_orange++;
        }
        else if(days_difference<30)
        {
            count_ame_continuation_trainings++;
        }
        if(days_difference==30){
            amect8[result[i].name]="30";}
        if(days_difference==15){
            amect8[result[i].name]="15";}    
        if(days_difference>0 && days_difference<6){
            amect8[result[i].name]=result[i].B737_CFM56;}}
        /*
        var a = new Date(result[i].B737_MAX_CFM_LEAP1B);
        var total_seconds = Math.abs(today - a) / 1000; 
        var days_difference = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].B737_MAX_CFM_LEAP1B;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var currentDate = new Date();
        var days_difference = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference<30)
        {
            cnt4++;
        }
        if(days_difference<2)
        {
            count_ame_continuation_trainings_red++;
        }
        else if(days_difference<15)
        {
            count_ame_continuation_trainings_orange++;
        }
        else if(days_difference<30)
        {
            count_ame_continuation_trainings++;
        }
        if(days_difference==30){
            amect9[result[i].name]="30";}
        if(days_difference==15){
            amect9[result[i].name]="15";}    
        if(days_difference>0 && days_difference<6){
            amect9[result[i].name]=result[i].B737_MAX_CFM_LEAP1B;}}
        /*
        var a = new Date(result[i].B777_GE90);
        var total_seconds = Math.abs(today - a) / 1000; 
        var days_difference = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].B777_GE90;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var currentDate = new Date();
        var days_difference = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference<30)
        {
            cnt4++;
        }
        if(days_difference<2)
        {
            count_ame_continuation_trainings_red++;
        }
        else if(days_difference<15)
        {
            count_ame_continuation_trainings_orange++;
        }
        else if(days_difference<30)
        {
            count_ame_continuation_trainings++;
        }
        if(days_difference==30){
            amect10[result[i].name]="30";}
        if(days_difference==15){
            amect10[result[i].name]="15";}    
        if(days_difference>0 && days_difference<6){
            amect10[result[i].name]=result[i].B777_GE90;}}
        /*
        var a = new Date(result[i].B787_GENX);
        var total_seconds = Math.abs(today - a) / 1000; 
        var days_difference = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].B787_GENX;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var currentDate = new Date();
        var days_difference = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference<30)
        {
            cnt4++;
        }
        if(days_difference<2)
        {
            count_ame_continuation_trainings_red++;
        }
        else if(days_difference<15)
        {
            count_ame_continuation_trainings_orange++;
        }
        else if(days_difference<30)
        {
            count_ame_continuation_trainings++;
        }
        if(days_difference==30){
            amect11[result[i].name]="30";}
        if(days_difference==15){
            amect11[result[i].name]="15";}    
        if(days_difference>0 && days_difference<6){
            amect11[result[i].name]=result[i].B787_GENX;}}
        /*
        var a = new Date(result[i].ADDNL_REFR);
        var total_seconds = Math.abs(today - a) / 1000; 
        var days_difference = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].ADDNL_REFR;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var currentDate = new Date();
        var days_difference = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference<30)
        {
            cnt4++;
        }
        if(days_difference<2)
        {
            count_ame_continuation_trainings_red++;
        }
        else if(days_difference<15)
        {
            count_ame_continuation_trainings_orange++;
        }
        else if(days_difference<30)
        {
            count_ame_continuation_trainings++;
        }
        if(days_difference==30){
            amect12[result[i].name]="30";}
        if(days_difference==15){
            amect12[result[i].name]="15";}    
        if(days_difference>0 && days_difference<6){
            amect12[result[i].name]=result[i].ADDNL_REFR;}}
        /*
        var a = new Date(result[i].HF);
        var total_seconds = Math.abs(today - a) / 1000; 
        var days_difference = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].HF;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var currentDate = new Date();
        var days_difference = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference<30)
        {
            cnt4++;
        }
        if(days_difference<2)
        {
            count_ame_continuation_trainings_red++;
        }
        else if(days_difference<15)
        {
            count_ame_continuation_trainings_orange++;
        }
        else if(days_difference<30)
        {
            count_ame_continuation_trainings++;
        }if(days_difference==30){
            amect13[result[i].name]="30";}
        if(days_difference==15){
            amect13[result[i].name]="15";}    
        if(days_difference>0 && days_difference<6){
            amect13[result[i].name]=result[i].HF;}}
        /*
        var a = new Date(result[i].FTS);
        var total_seconds = Math.abs(today - a) / 1000; 
        var days_difference = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].FTS;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var currentDate = new Date();
        var days_difference = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference<30)
        {
            cnt4++;
        }
        if(days_difference<2)
        {
            count_ame_continuation_trainings_red++;
        }
        else if(days_difference<15)
        {
            count_ame_continuation_trainings_orange++;
        }
        else if(days_difference<30)
        {
            count_ame_continuation_trainings++;
        }
        if(days_difference==30){
            amect14[result[i].name]="30";}
        if(days_difference==15){
            amect14[result[i].name]="15";}    
        if(days_difference>0 && days_difference<6){
            amect14[result[i].name]=result[i].FTS;}}
        /*
        var a = new Date(result[i].EWIS);
        var total_seconds = Math.abs(today - a) / 1000; 
        var days_difference = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].EWIS;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var currentDate = new Date();
        var days_difference = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference<30)
        {
            cnt4++;
        }
        if(days_difference<2)
        {
            count_ame_continuation_trainings_red++;
        }
        else if(days_difference<15)
        {
            count_ame_continuation_trainings_orange++;
        }
        else if(days_difference<30)
        {
            count_ame_continuation_trainings++;
        }
        if(days_difference==30){
            amect15[result[i].name]="30";}
        if(days_difference==15){
            amect15[result[i].name]="15";}    
        if(days_difference>0 && days_difference<6){
            amect15[result[i].name]=result[i].EWIS;}}
        /*
        var a = new Date(result[i].SMS);
        var total_seconds = Math.abs(today - a) / 1000; 
        var days_difference = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].SMS;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var currentDate = new Date();
        var days_difference = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference<30)
        {
            cnt4++;
        }
        if(days_difference<2)
        {
            count_ame_continuation_trainings_red++;
        }
        else if(days_difference<15)
        {
            count_ame_continuation_trainings_orange++;
        }
        else if(days_difference<30)
        {
            count_ame_continuation_trainings++;
        }
        if(days_difference==30){
            amect16[result[i].name]="30";}
        if(days_difference==15){
            amect16[result[i].name]="15";}    
        if(days_difference>0 && days_difference<6){
            amect16[result[i].name]=result[i].SMS;}}
        /*
        var a = new Date(result[i].REGULATIONS);
        var total_seconds = Math.abs(today - a) / 1000; 
        var days_difference = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].REGULATIONS;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var currentDate = new Date();
        var days_difference = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference<30)
        {
            cnt4++;
        }
        if(days_difference<2)
        {
            count_ame_continuation_trainings_red++;
        }
        else if(days_difference<15)
        {
            count_ame_continuation_trainings_orange++;
        }
        else if(days_difference<30)
        {
            count_ame_continuation_trainings++;
        }
        if(days_difference==30){
            amect17[result[i].name]="30";}
        if(days_difference==15){
            amect17[result[i].name]="15";}    
        if(days_difference>0 && days_difference<6){
            amect17[result[i].name]=result[i].REGULATIONS;}}
        /*
        var a = new Date(result[i].GCAA);
        var total_seconds = Math.abs(today - a) / 1000; 
        var days_difference = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].GCAA;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var currentDate = new Date();
        var days_difference = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference<30)
        {
            cnt4++;
        }
        if(days_difference<2)
        {
            count_ame_continuation_trainings_red++;
        }
        else if(days_difference<15)
        {
            count_ame_continuation_trainings_orange++;
        }
        else if(days_difference<30)
        {
            count_ame_continuation_trainings++;
        }
        if(days_difference==30){
            amect18[result[i].name]="30";}
        if(days_difference==15){
            amect18[result[i].name]="15";}    
        if(days_difference>0 && days_difference<6){
            amect18[result[i].name]=result[i].GCAA;}}
        /*
        var a = new Date(result[i].ETOPS);
        var total_seconds = Math.abs(today - a) / 1000; 
        var days_difference = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].ETOPS;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var currentDate = new Date();
        var days_difference = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference<30)
        {
            cnt4++;
        }
        if(days_difference<2)
        {
            count_ame_continuation_trainings_red++;
        }
        else if(days_difference<15)
        {
            count_ame_continuation_trainings_orange++;
        }
        else if(days_difference<30)
        {
            count_ame_continuation_trainings++;
        }
        if(days_difference==30){
            amect19[result[i].name]="30";}
        if(days_difference==15){
            amect19[result[i].name]="15";}    
        if(days_difference>0 && days_difference<6){
            amect19[result[i].name]=result[i].ETOPS;}}
        /*
        var a = new Date(result[i].RVSM);
        var total_seconds = Math.abs(today - a) / 1000; 
        var days_difference = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].RVSM;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var currentDate = new Date();
        var days_difference = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference<30)
        {
            cnt4++;
        }
        if(days_difference<2)
        {
            count_ame_continuation_trainings_red++;
        }
        else if(days_difference<15)
        {
            count_ame_continuation_trainings_orange++;
        }
        else if(days_difference<30)
        {
            count_ame_continuation_trainings++;
        }
        if(days_difference==30){
            amect20[result[i].name]="30";}
        if(days_difference==15){
            amect20[result[i].name]="15";}    
        if(days_difference>0 && days_difference<6){
            amect20[result[i].name]=result[i].RVSM;}}
        /*
        var a = new Date(result[i].operator_proc);
        var total_seconds = Math.abs(today - a) / 1000; 
        var days_difference = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].operator_proc;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var currentDate = new Date();
        var days_difference = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference<30)
        {
            cnt4++;
        }
        if(days_difference<2)
        {
            count_ame_continuation_trainings_red++;
        }
        else if(days_difference<15)
        {
            count_ame_continuation_trainings_orange++;
        }
        else if(days_difference<30)
        {
            count_ame_continuation_trainings++;
        }
        if(days_difference==30){
            amect21[result[i].name]="30";}
        if(days_difference==15){
            amect21[result[i].name]="15";}    
        if(days_difference>0 && days_difference<6){
            amect21[result[i].name]=result[i].operator_proc;}}
    }
});
var count_ame_authorisations = 0,count_ame_authorisations_orange=0,count_ame_authorisations_red=0,ameauthorisations_ciaslvalidity={},ameauthorisations_flydxb={},ameauthorisations_islandvalidity={};
connection.query("SELECT * FROM new_schema.ame_authorisations", function (error, result) {
    if (error) throw error;
    for(let i=0;i<length_of_rows_ameauth;i++)
    {
        /*
        var a = new Date(result[i].ciasl_authn_validity);
        var total_seconds = Math.abs(today - a) / 1000; 
        var days_difference = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].ciasl_authn_validity;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var currentDate = new Date();
        var days_difference = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference<30)
        {
            cnt4++;
        }
        if(days_difference<2)
        {
            count_ame_authorisations_red++;
        }
        else if(days_difference<15)
        {
            count_ame_authorisations_orange++;
        }
        else if(days_difference<30)
        {
            count_ame_authorisations++;
        }
        if(days_difference==30){
            ameauthorisations_ciaslvalidity[result[i].name]="30";}
        if(days_difference==15){
            ameauthorisations_ciaslvalidity[result[i].name]="15";}    
        if(days_difference>0 && days_difference<6){
            ameauthorisations_ciaslvalidity[result[i].name]=result[i].ciasl_authn_validity;}}
        /*
        var a = new Date(result[i].fly_dxb);
        var total_seconds = Math.abs(today - a) / 1000; 
        var days_difference = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].fly_dxb;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var currentDate = new Date();
        var days_difference = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference<30)
        {
            cnt4++;
        }
        if(days_difference<2)
        {
            count_ame_authorisations_red++;
        }
        else if(days_difference<15)
        {
            count_ame_authorisations_orange++;
        }
        else if(days_difference<30)
        {
            count_ame_authorisations++;
        }
        if(days_difference==30){
            ameauthorisations_flydxb[result[i].name]="30";}
        if(days_difference==15){
            ameauthorisations_flydxb[result[i].name]="15";}    
        if(days_difference>0 && days_difference<6){
            ameauthorisations_flydxb[result[i].name]=result[i].fly_dxb;}}
        /*
        var a = new Date(result[i].island_authn_validity);
        var total_seconds = Math.abs(today - a) / 1000; 
        var days_difference = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].island_authn_validity;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var currentDate = new Date();
        var days_difference = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference<30)
        {
            cnt4++;
        }
        if(days_difference<2)
        {
            count_ame_authorisations_red++;
        }
        else if(days_difference<15)
        {
            count_ame_authorisations_orange++;
        }
        else if(days_difference<30)
        {
            count_ame_authorisations++;
        }
        if(days_difference==30){
            ameauthorisations_islandvalidity[result[i].name]="30";}
        if(days_difference==15){
            ameauthorisations_islandvalidity[result[i].name]="15";}    
        if(days_difference>0 && days_difference<6){
            ameauthorisations_islandvalidity[result[i].name]=result[i].island_authn_validity;}}
    }
});
var count_regular_audit = 0,count_regular_audit_orange=0,count_regular_audit_red=0,regulator_cap1={},regulator_ca1={};
connection.query("SELECT * FROM new_schema.regular_audit", function (error, result) {
    if (error) throw error;
    for(let i=0;i<length_of_rows_reg_audit;i++)
    {
        /*
        var cap = new Date(result[i].cap_due_date);
        var total_seconds = Math.abs(today - cap) / 1000; 
        var days_difference_5 = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].cap_due_date;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference_5<30)
        {
            cnt3++;
        }
        if(days_difference_5<2)
        {
            count_regular_audit_red++;
        }
        else if(days_difference_5<15)
        {
            count_regular_audit_orange++;
        }
        else if(days_difference_5<30)
        {
            count_regular_audit++;
        }
        if(days_difference_5==30){
            regulator_cap1[result[i].regulator]="30";}
        if(days_difference_5==15){
            regulator_cap1[result[i].regulator]="15";}    
        if(days_difference_5>0 && days_difference_5<6){
            regulator_cap1[result[i].regulator]=result[i].cap_due_date;}}
        /*
        var ca = new Date(result[i].ca_submit_due_date);
        var total_seconds = Math.abs(today - ca) / 1000; 
        var days_difference_7 = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].ca_submit_due_date;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_7 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference_7<30)
        {
            cnt3++;
        }
        if(days_difference_7<2)
        {
            count_regular_audit_red++;
        }
        else if(days_difference_7<15)
        {
            count_regular_audit_orange++;
            regulator_ca1[result[i].regulator]=result[i].ca_submit_due_date;
        }
        else if(days_difference_7<30)
        {
            count_regular_audit++;
        }
        if(days_difference_7==30){
            regulator_ca1[result[i].regulator]="30";}
        if(days_difference_7==15){
            regulator_ca1[result[i].regulator]="15";}    
        if(days_difference_7>0 && days_difference_7<6){
            regulator_ca1[result[i].regulator]=result[i].ca_submit_due_date;}}
    }
});
var count_audit_by_airline_operators = 0,count_audit_by_airline_operators_orange=0,count_audit_by_airline_operators_red=0,regulator_cap2={},regulator_ca2={};
connection.query("SELECT * FROM new_schema.audit_by_airline_operators", function (error, result) {
    if (error) throw error;
    for(let i=0;i<length_of_rows_audit_operator;i++)
    {
        /*
        var c1 = new Date(result[i].cap_due_date);
        var total_seconds = Math.abs(today - c1) / 1000; 
        var days_difference_5 = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].cap_due_date;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference_5<30)
        {
            cnt3++;
        }
        if(days_difference_5<2)
        {
            count_audit_by_airline_operators_red++;
        }
        else if(days_difference_5<15)
        {
            count_audit_by_airline_operators_orange++;
        }
        else if(days_difference_5<30)
        {
            count_audit_by_airline_operators++;
        }
        if(days_difference_5==30){
            regulator_cap2[result[i].operator]="30";}
        if(days_difference_5==15){
            regulator_cap2[result[i].operator]="15";}    
        if(days_difference_5>0 && days_difference_5<6){
            regulator_cap2[result[i].operator]=result[i].cap_due_date;}}
        /*
        var c2 = new Date(result[i].cap_submit_due_date);
        var total_seconds = Math.abs(today - c2) / 1000; 
        var days_difference_7 = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].cap_submit_due_date;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_7 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference_7<30)
        {
            cnt3++;
        }
        if(days_difference_7<2)
        {
            count_audit_by_airline_operators_red++;
        }
        else if(days_difference_7<15)
        {
            count_audit_by_airline_operators_orange++;
        }
        else if(days_difference_7<30)
        {
            count_audit_by_airline_operators++;
        }
        if(days_difference_7==30){
            regulator_ca2[result[i].operator]="30";}
        if(days_difference_7==15){
            regulator_ca2[result[i].operator]="15";}    
        if(days_difference_7>0 && days_difference_7<6){
            regulator_ca2[result[i].operator]=result[i].cap_submit_due_date;}}
    }
});
var count_quality_audit_quality_division = 0,count_quality_audit_quality_division_orange=0,count_quality_audit_quality_division_red=0,regulator_cap3={},regulator_ca3={};
connection.query("SELECT * FROM new_schema.quality_audit", function (error, result) {
    if (error) throw error;
    for(let i=0;i<length_of_rows_quality_auditor;i++)
    {/*
        var c2 = new Date(result[i].cap_due_date);
        var total_seconds = Math.abs(today - c2) / 1000; 
        var days_difference_5 = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].cap_due_date;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var currentDate = new Date();
        var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference_5<30)
        {
            cnt3++;
        }
        if(days_difference_5<2)
        {
            count_quality_audit_quality_division_red++;
        }
        else if(days_difference_5<15)
        {
            count_quality_audit_quality_division_orange++;
        }
        else if(days_difference_5<30)
        {
            count_quality_audit_quality_division++;
        }
        if(days_difference_5==30){
            regulator_cap3[result[i].auditor_name]="30";}
        if(days_difference_5==15){
            regulator_cap3[result[i].auditor_name]="15";}    
        if(days_difference_5>0 && days_difference_5<6){
            regulator_cap3[result[i].auditor_name]=result[i].cap_due_date;}}
        
        var inputDate = result[i].ca_submit_due_date;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_7 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference_7<30)
        {
            cnt3++;
        }
        if(days_difference_7<2)
        {
            count_quality_audit_quality_division_red++;
        }
        else if(days_difference_7<15)
        {
            count_quality_audit_quality_division_orange++;
        }
        else if(days_difference_7<30)
        {
            count_quality_audit_quality_division++;
        }
        if(days_difference_7==30){
            regulator_ca3[result[i].auditor_name]="30";}
        if(days_difference_7==15){
            regulator_ca3[result[i].auditor_name]="15";}    
        if(days_difference_7>0 && days_difference_7<6){
            regulator_ca3[result[i].auditor_name]=result[i].ca_submit_due_date;}}
    }
});
var count_line_maintenance = 0,count_line_maintenance_orange=0,count_line_maintenance_red=0,regulator_cap4={},regulator_ca4={};
connection.query("SELECT * FROM new_schema.line_maintenance", function (error, result) {
    if (error) throw error;
    for(let i=0;i<length_of_rows_line_main;i++)
    {
        /*
        var c2 = new Date(result[i].cap_due_date);
        var total_seconds = Math.abs(today - c2) / 1000; 
        var days_difference_5 = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].cap_due_date;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference_5<30)
        {
            cnt3++;
        }
        if(days_difference_5<2)
        {
            count_line_maintenance_red++;
        }
        else if(days_difference_5<15)
        {
            count_line_maintenance_orange++;
            regulator_cap4[result[i].auditor_name]=result[i].cap_due_date;
        }
        else if(days_difference_5<30)
        {
            count_line_maintenance++;
        }
        if(days_difference_5==30){
            regulator_cap4[result[i].auditor_name]="30";}
        if(days_difference_5==15){
            regulator_cap4[result[i].auditor_name]="15";}    
        if(days_difference_5>0 && days_difference_5<6){
            regulator_cap4[result[i].auditor_name]=result[i].cap_due_date;}}
        /*
        var c3 = new Date(result[i].ca_submit_due_date);
        var total_seconds = Math.abs(today - c3) / 1000; 
        var days_difference_7 = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].ca_submit_due_date;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_7 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference_7<30)
        {
            cnt3++;
        }
        if(days_difference_7<2)
        {
            count_line_maintenance_red++;
        }
        else if(days_difference_7<15)
        {
            count_line_maintenance_orange++;
        }
        else if(days_difference_7<30)
        {
            count_line_maintenance++;
        }
        if(days_difference_7==30){
            regulator_ca4[result[i].auditor_name]="30";}
        if(days_difference_7==15){
            regulator_ca4[result[i].auditor_name]="15";}    
        if(days_difference_7>0 && days_difference_7<6){
            regulator_ca4[result[i].auditor_name]=result[i].ca_submit_due_date;}}
    }
});
var count_internal_quality_auditors = 0,count_internal_quality_auditors_orange=0,count_internal_quality_auditors_red=0,regulator_auth={},regulator_reg={},regulator_hf={},regulator_fts={},regulator_ewis={},regulator_sms={};
connection.query("SELECT * FROM new_schema.internal_quality_auditors", function (error, result) {
    if (error) throw error;
    for(let i=0;i<length_of_rows_internal;i++)
    {
        /*
        var m1 = new Date(result[i].auth_validity_date);
        var total_seconds = Math.abs(today - m1) / 1000; 
        var days_difference = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].auth_validity_date;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference<30)
        {
            cnt3++;
        }
        if(days_difference<2)
        {
            count_internal_quality_auditors_red++;
        }
        else if(days_difference<15)
        {
            count_internal_quality_auditors_orange++;
            regulator_auth[result[i].name]=result[i].auth_validity_date;
        }
        else if(days_difference<30)
        {
            count_internal_quality_auditors++;
        }}
        /*
        var m2 = new Date(result[i].regulations_due_date);
        var total_seconds = Math.abs(today - m2) / 1000; 
        var days_difference = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].regulations_due_date;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference<30)
        {
            cnt3++;
        }
        if(days_difference<2)
        {
            count_internal_quality_auditors_red++;
        }
        else if(days_difference<15)
        {
            count_internal_quality_auditors_orange++;
        }
        else if(days_difference<30)
        {
            count_internal_quality_auditors++;
        }
        if(days_difference==30){
            regulator_reg[result[i].name]="30";}
        if(days_difference==15){
            regulator_reg[result[i].name]="15";}    
        if(days_difference>0 && days_difference<6){
            regulator_reg[result[i].name]=result[i].regulations_due_date;}}
        /*
        var m3 = new Date(result[i].hf_due_date);
        var total_seconds = Math.abs(today - m3) / 1000; 
        var days_difference = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].hf_due_date;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference<30)
        {
            cnt3++;
        }
        if(days_difference<2)
        {
            count_internal_quality_auditors_red++;
        }
        else if(days_difference<15)
        {
            count_internal_quality_auditors_orange++;
        }
        else if(days_difference<30)
        {
            count_internal_quality_auditors++;
        }
        if(days_difference==30){
            regulator_hf[result[i].name]="30";}
        if(days_difference==15){
            regulator_hf[result[i].name]="15";}    
        if(days_difference>0 && days_difference<6){
            regulator_hf[result[i].name]=result[i].hf_due_date;}}
        /*
        var m4 = new Date(result[i].fts_due_date);
        var total_seconds = Math.abs(today - m4) / 1000; 
        var days_difference = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].fts_due_date;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference<30)
        {
            cnt3++;
        }
        if(days_difference<2)
        {
            count_internal_quality_auditors_red++;
        }
        else if(days_difference<15)
        {
            count_internal_quality_auditors_orange++;
        }
        else if(days_difference<30)
        {
            count_internal_quality_auditors++;
        }
        if(days_difference==30){
            regulator_fts[result[i].name]="30";}
        if(days_difference==15){
            regulator_fts[result[i].name]="15";}    
        if(days_difference>0 && days_difference<6){
            regulator_fts[result[i].name]=result[i].fts_due_date;}}
        /*
        var m5 = new Date(result[i].ewis_due_date);
        var total_seconds = Math.abs(today - m5) / 1000; 
        var days_difference = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].ewis_due_date;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference<30)
        {
            cnt3++;
        }
        if(days_difference<2)
        {
            count_internal_quality_auditors_red++;
        }
        else if(days_difference<15)
        {
            count_internal_quality_auditors_orange++;
        }
        else if(days_difference<30)
        {
            count_internal_quality_auditors++;
        }
        if(days_difference==30){
            regulator_ewis[result[i].name]="30";}
        if(days_difference==15){
            regulator_ewis[result[i].name]="15";}    
        if(days_difference>0 && days_difference<6){
            regulator_ewis[result[i].name]=result[i].ewis_due_date;}}
        /*
        var m6 = new Date(result[i].sms_due_date);
        var total_seconds = Math.abs(today - m6) / 1000; 
        var days_difference = Math.floor (total_seconds / (60 * 60 * 24)); */
        var inputDate = result[i].sms_due_date;
        if(inputDate){
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference<30)
        {
            cnt3++;
        }
        if(days_difference<2)
        {
            count_internal_quality_auditors_red++;
        }
        else if(days_difference<15)
        {
            count_internal_quality_auditors_orange++;
        }
        else if(days_difference<30)
        {
            count_internal_quality_auditors++;
        }
        if(days_difference==30){
            regulator_sms[result[i].name]="30";}
        if(days_difference==15){
            regulator_sms[result[i].name]="15";}    
        if(days_difference>0 && days_difference<6){
            regulator_sms[result[i].name]=result[i].sms_due_date;}}
    }
});

app.use('/css',express.static(path.join(__dirname,'node_modules/bootstrap/dist/css')));
app.use('/js',express.static(path.join(__dirname,'node_modules/bootstrap/dist/js')));
app.use(express.static(__dirname+'/imag'));
app.use(express.static(__dirname+'/css'));
app.use(express.static(__dirname+'/public'));

app.post("/", encoder, function(req,res){
    var username = req.body.username;
    var password = req.body.password;

    connection.query("select * from login where user_name = ?", [username], function(_error, results, _fields){
        if (results.length > 0) {
            bcrypt.compare(password, results[0].user_pass, function(_error, result){
                if (result == true) {
                    req.session.userId = results[0].user_id;
                    req.session.loggedIn = true;
                    uid=req.session.userId
                    //console.log(uid);
                    function f1(uid){
                      //console.log(uid);
                      connection.query("select * from permissions where user_id = ?",[uid], function(error,results){
                        //console.log(results);
                        if(results[0].AME_LICENSE=='Y'){
                        v1=1;
                      }
                        if(results[0].AME_CONTINUATION=='Y'){
                        v2=1;
                      }
                        if(results[0].AME_AUTHORISATION=='Y')
                        v3=1;
                        if(results[0].AUTHORISATION_COVERAGE=='Y')
                        v4=1;
                        if(results[0].TECHNICIANS=='Y')
                        v5=1;
                        if(results[0].REGULAR_AUDIT=='Y')
                        v6=1;
                        if(results[0].AUDIT_BY_AIRLINE=='Y')
                        v7=1;
                        if(results[0].QUALITY_AUDIT_QUALITY=='Y')
                        v8=1;
                        if(results[0].QUALITY_AUDIT_LINE=='Y')
                        v9=1;
                        if(results[0].AUDIT_EXTERNAL_CIASL=='Y')
                        v10=1;
                        if(results[0].INTERNAL_QUALITY=='Y')
                        v11=1;
                        if(results[0].TOOLS=='Y')
                        v12=1;
                        if(results[0].ALL_STAFF=='Y')
                        v13=1;
                        if(results[0].GROUND_SUPPORT=='Y')
                        v14=1;
                        if(results[0].REGULATOR_APPROVAL=='Y')
                        v15=1;
                        if(results[0].OPERATORS=='Y')
                        v16=1;
                        if(results[0].STORAGE_LIFE=='Y')
                        v17=1;
                        
                      })
                    }
                    f1(uid);
                    //console.log(v1);
                    res.redirect("/dashboard");                
                } else {
                    const errorMessage = 'Credentials Incorrect';
                    const redirectUrl = '/';
                    const script = `<script>alert("${errorMessage}");window.location.href="${redirectUrl}";</script>`;
                    res.send(script);          
                }
            });
        } else {
            const errorMessage = 'Unregistered User';
            const redirectUrl = '/';
            const script = `<script>alert("${errorMessage}");window.location.href="${redirectUrl}";</script>`;
            res.send(script);
        }
    });
});
app.post("/register", encoder, function(req, res) {
    var fullname = req.body.fullname;
    var username = req.body.username;
    var password = req.body.password;
    var repassword = req.body.repassword;
  
    if (password != repassword) {
      const errorMessage = "Passwords do not match";
      const redirectUrl = "/register";
      const script = `<script>alert("${errorMessage}");window.location.href="${redirectUrl}";</script>`;
      res.send(script);
    } else {
      bcrypt.hash(password, saltRounds, function(error, hash) {
        if (error) throw error;
        if (!validatePassword(password)) {
          const errorMessage = "Password should contain at least a number, a letter, and be at least 8 characters long";
          const redirectUrl = "/register";
          const script = `<script>alert("${errorMessage}");window.location.href="${redirectUrl}";</script>`;
          return res.send(script);
        }
        connection.query(
          "insert into login (user_fullname, user_name, user_pass,user_role) values (?, ?, ?,?)",
          [fullname, username, hash,"user"],
          function(error, results, fields) {
            if (error) {
              if (error && error.errno === 1062) {
                const errorMessage = "Username already exists";
                const redirectUrl = "/register";
                const script = `<script>alert("${errorMessage}");window.location.href="${redirectUrl}";</script>`;
                return res.send(script);
              } else {
                console.log(error);
                res.sendStatus(500);
              }
            } else {
              const user_id = results.insertId;
              connection.query(
                "insert into permissions (user_id, user_fullname) values (?, ?)",
                [user_id, fullname],
                function(_error, results, _fields) {
                  if (_error) {
                    console.log(_error);
                    res.sendStatus(500);
                  } else {
                    console.log("user added");
                    res.redirect("/");
                  }
                }
              );
            }
          }
        );
      });
    }
});
app.post("/reset", encoder, function(req,res){
    var userid = req.session.userId;
    var password = req.body.password;
    var repassword = req.body.repassword;
    //console.log(password);
    if (password != repassword) {
      const errorMessage = "Passwords do not match";
      const redirectUrl = "/reset";
      const script = `<script>alert("${errorMessage}");window.location.href="${redirectUrl}";</script>`;
      res.send(script);
    } else {
        if (!validatePassword(password)) {
            //console.log(password)
            const errorMessage = "Password should contain at least a number, a letter, and be at least 8 characters long";
            const redirectUrl = "/reset";
            const script = `<script>alert("${errorMessage}");window.location.href="${redirectUrl}";</script>`;
            return res.send(script);
          }
      bcrypt.hash(password, saltRounds, function(error, hash) {
        if (error) throw error;
  
        connection.query(
          "update login set user_pass = ? where user_id = ?",
          [hash, userid],
          function(error, results, fields) {
            if (error) {
              console.log(error);
              res.sendStatus(500);
            } else {
                const errorMessage = "Passwords reset";
                const redirectUrl = "/dashboard";
                const script = `<script>alert("${errorMessage}");window.location.href="${redirectUrl}";</script>`;
                res.send(script);
                console.log("password reset");
                //res.redirect("/");
            }
          }
        );
      });
    }
});
app.post('/logout', function(req, res) {
    req.session.loggedIn = false;
    req.session.userId=0;
    v1=0;v2=0;v3=0;v4=0;v5=0;v6=0;v7=0;v8=0;v9=0;v10=0;v11=0;v12=0;v13=0;v14=0;v15=0;v16=0;v17=0;
    console.log("logged out")
    res.redirect('/')
  });

function basicauth(req,res,next){
    if(req.session.loggedIn){
        next();
    } else {
        res.redirect('/');
    }
}
function authRole(req,res,next){
    const id =req.session.userId
    //console.log(id);
    connection.query(`select user_role from login where user_id = ?`,[id],(err,results) =>{
      if(err){
        console.log(err);
      }
      else{
        //console.log(results);
        if(results[0].user_role === 'admin'){
          next();
        }
        else{
          const errorMessage = "ACCESS DENIED (ADMIN ONLY !!!)";
              const redirectUrl = '/dashboard';
              const script = `<script>alert("${errorMessage}");window.location.href="${redirectUrl}";</script>`;
              res.send(script);
        }
      }
    })
  
}
function validatePassword(password){
    const regex = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z\d]{8,}$/;
    return regex.test(password);
}

app.get('/',function(req,res){
    res.sendFile(__dirname + "/login.html");
})
app.get('/register',function(req,res){
    res.sendFile(__dirname + "/register.html");
})
app.get('/reset',basicauth,function(req,res){
    res.sendFile(__dirname + "/reset.html");
})
app.get('/dashboard',basicauth,function(req,res){
    fs.readFile("index.html", function (error, pgResp){
        if (error) {
            res.writeHead(404);
            res.write('Contents you are looking are Not Found');
        } else {
            res.write(pgResp);

//ALL STAFF DATA
var query = 'SELECT todays_date as td FROM new_schema.one_day_mail WHERE sr_no = 1';
connection.query(query, (err, results) => {
        if (err) {
      console.error('Error executing the query:', err);
      return;
    }
        var inputDate = results[0].td;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference = Math.floor((currentDate.getTime() - inputDateTime.getTime()) / oneDayMs);
        console.log(days_difference);
        if(days_difference>0)
        {
            str="";
            for(var key in allstaffdata_contract){
                if (allstaffdata_contract[key]=="30"){
                    str=str+'Contract of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (allstaffdata_contract[key]=="15"){
                    str=str+'Contract of ' + key + ' expiring in 15days.' + '\n';
                }
                else {
                    str=str+'Contract of ' + key + ' expiring on ' + allstaffdata_contract[key] + '\n';
                }    
            }
            for(var key in allstaffdata_avsec){
                if (allstaffdata_avsec[key]=="30"){
                    str=str+'AVSEC Training of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (allstaffdata_avsec[key]=="15"){
                    str=str+'AVSEC Training of ' + key + ' expiring in 15days.' + '\n';
                }
                else {
                    str=str+'AVSEC Training of ' + key + ' expiring on ' + allstaffdata_avsec[key] + '\n';
                }    
            }
            for(var key in allstaffdata_aep){
                if (allstaffdata_aep[key]=="30"){
                    str=str+'AEP of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (allstaffdata_aep[key]=="15"){
                    str=str+'AEP of ' + key + ' expiring in 15days.' + '\n';
                }
                else {
                   str=str+'AEP of ' + key + ' expiring on ' + allstaffdata_aep[key] + '\n';
                }   
            }
            for(var key in allstaffdata_adp){
                if (allstaffdata_adp[key]=="30"){
                    str=str+'ADP of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (allstaffdata_adp[key]=="15"){
                    str=str+'ADP of ' + key + ' expiring in 15days.' + '\n';
                }
                else {
                    str=str+'ADP of ' + key + ' expiring on ' + allstaffdata_adp[key] + '\n';
                }
            }
            for(var key in allstaffdata_pcc){
                if (allstaffdata_pcc[key]=="30"){
                    str=str+'PCC of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (allstaffdata_pcc[key]=="15"){
                    str=str+'PCC of ' + key + ' expiring in 15days.' + '\n';
                }
                else {
                    str=str+'PCC of ' + key + ' expiring on ' + allstaffdata_pcc[key] + '\n';
                }    
            }
            var mailOptions = {
                from: 'cdms4ciasl@gmail.com',
                to: ['jenbros.encrypted@gmail.com','keerthibinu777@gmail.com'],
                subject: 'ALL STAFF DATA : Notification on expiring validity.',
                text: str
            }
            if (str!="") {
            transporter.sendMail(mailOptions, (e, info) => {
            if (e) {
            console.error(e);
            } else {
            console.log('Email sent: ' + info.response);
            }
            });}
            var day = today.getDate();
            var month = today.getMonth() + 1; // Adding 1 because the month is zero-based
            var year = today.getFullYear();
            var formattedDay = day < 10 ? '0' + day : day;
            var formattedMonth = month < 10 ? '0' + month : month;
            var formattedDate = formattedDay + '-' + formattedMonth + '-' + year;

            const que = `UPDATE new_schema.one_day_mail SET todays_date = '${formattedDate}' WHERE sr_no = 1`;

            connection.query(que, (err, result) => {
            if (err) {
            console.error('Error executing the query:', err);
                return;
            }
            });
        }
});

//AME AUTHN
var query = 'SELECT todays_date as td FROM new_schema.one_day_mail WHERE sr_no = 2';
connection.query(query, (err, results) => {
        if (err) {
      console.error('Error executing the query:', err);
      return;
    }
        var inputDate = results[0].td;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference = Math.floor((currentDate.getTime() - inputDateTime.getTime()) / oneDayMs);
        console.log(days_difference);
        if(days_difference>0)
        {
            str="";
            for(var key in ameauthorisations_ciaslvalidity){
                if (ameauthorisations_ciaslvalidity[key]=="30"){
                    str=str+'Training of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (ameauthorisations_ciaslvalidity[key]=="15"){
                    str=str+'Training of ' + key + ' expiring in 15days.' + '\n';
                }
                else    
                    str=str+'Training of ' + key + ' expiring on ' + ameauthorisations_ciaslvalidity[key] + '\n';
            }
            for(var key in ameauthorisations_flydxb){
                if (ameauthorisations_flydxb[key]=="30"){
                    str=str+'Training of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (ameauthorisations_flydxb[key]=="15"){
                    str=str+'Training of ' + key + ' expiring in 15days.' + '\n';
                }
                else {    
                    str=str+'Training of ' + key + ' expiring on ' + ameauthorisations_flydxb[key] + '\n';
                }
            }
            for(var key in ameauthorisations_islandvalidity){
                if (ameauthorisations_islandvalidity[key]=="30"){
                    str=str+'Training of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (ameauthorisations_islandvalidity[key]=="15"){
                    str=str+'Training of ' + key + ' expiring in 15days.' + '\n';
                }
                else { 
                    str=str+'Training of ' + key + ' expiring on ' + ameauthorisations_islandvalidity[key] + '\n';
                }    
            }
            var mailOptions = {
                from: 'cdms4ciasl@gmail.com',
                to: ['jenbros.encrypted@gmail.com','keerthibinu777@gmail.com'],
                subject: 'AME AUTHORISATIONS : Notification on expiring validity.',
                text: str
              };
              if (str!="") { 
            transporter.sendMail(mailOptions, (e, info) => {
            if (e) {
            console.error(e);
            } else {
            console.log('Email sent: ' + info.response);
            }
            });}
            var day = today.getDate();
            var month = today.getMonth() + 1; // Adding 1 because the month is zero-based
            var year = today.getFullYear();
            var formattedDay = day < 10 ? '0' + day : day;
            var formattedMonth = month < 10 ? '0' + month : month;
            var formattedDate = formattedDay + '-' + formattedMonth + '-' + year;

            const que = `UPDATE new_schema.one_day_mail SET todays_date = '${formattedDate}' WHERE sr_no = 2`;

            connection.query(que, (err, result) => {
            if (err) {
            console.error('Error executing the query:', err);
                return;
            }
            });
        }
});

//AME CONTN TRAINING
var query = 'SELECT todays_date as td FROM new_schema.one_day_mail WHERE sr_no = 3';
connection.query(query, (err, results) => {
        if (err) {
      console.error('Error executing the query:', err);
      return;
    }
        var inputDate = results[0].td;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference = Math.floor((currentDate.getTime() - inputDateTime.getTime()) / oneDayMs);
        console.log(days_difference);
        if(days_difference>0)
        {
            str="";
            for(var key in amect1){
                if (amect1[key]=="30"){
                    str=str+'Training of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (amect1[key]=="15"){
                    str=str+'Training of ' + key + ' expiring in 15days.' + '\n';
                }
                else { 
                    str=str+'Training of ' + key + ' expiring on ' + amect1[key] + '\n';
                }    
            }
            for(var key in amect2){
                if (amect2[key]=="30"){
                    str=str+'Training of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (amect2[key]=="15"){
                    str=str+'Training of ' + key + ' expiring in 15days.' + '\n';
                }
                else { 
                    str=str+'Training of ' + key + ' expiring on ' + amect2[key] + '\n';
                }
            }
            for(var key in amect3){
                if (amct3[key]=="30"){
                    str=str+'Training of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (amect3[key]=="15"){
                    str=str+'Training of ' + key + ' expiring in 15days.' + '\n';
                }
                else { 
                    str=str+'Training of ' + key + ' expiring on ' + amect3[key] + '\n';
                }    
            }
            for(var key in amect4){
                if (amect4[key]=="30"){
                    str=str+'Training of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (amect4[key]=="15"){
                    str=str+'Training of ' + key + ' expiring in 15days.' + '\n';
                }
                else { 
                    str=str+'Training of ' + key + ' expiring on ' + amect4[key] + '\n';
                }
            }
            for(var key in amect5){
                if (amect5[key]=="30"){
                    str=str+'Training of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (amect5[key]=="15"){
                    str=str+'Training of ' + key + ' expiring in 15days.' + '\n';
                }
                else { 
                    str=str+'Training of ' + key + ' expiring on ' + amect5[key] + '\n';
                }
            }
            for(var key in amect6){
                if (amect6[key]=="30"){
                    str=str+'Training of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (amect6[key]=="15"){
                    str=str+'Training of ' + key + ' expiring in 15days.' + '\n';
                }
                else { 
                    str=str+'Training of ' + key + ' expiring on ' + amect6[key] + '\n';
                }
            }
            for(var key in amect7){
                if (amect7[key]=="30"){
                    str=str+'Training of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (amect7[key]=="15"){
                    str=str+'Training of ' + key + ' expiring in 15days.' + '\n';
                }
                else { 
                    str=str+'Training of ' + key + ' expiring on ' + amect7[key] + '\n';
                } 
            }
            for(var key in amect8){
                if (amect8[key]=="30"){
                    str=str+'Training of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (amect8[key]=="15"){
                    str=str+'Training of ' + key + ' expiring in 15days.' + '\n';
                }
                else { 
                    str=str+'Training of ' + key + ' expiring on ' + amect8[key] + '\n';
                }
            }
            for(var key in amect9){
                if (amect9[key]=="30"){
                    str=str+'Training of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (amect9[key]=="15"){
                    str=str+'Training of ' + key + ' expiring in 15days.' + '\n';
                }
                else { 
                    str=str+'Training of ' + key + ' expiring on ' + amect9[key] + '\n';
                }
            }
            for(var key in amect10){
                if (amect10[key]=="30"){
                    str=str+'Training of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (amect10[key]=="15"){
                    str=str+'Training of ' + key + ' expiring in 15days.' + '\n';
                }
                else { 
                    str=str+'Training of ' + key + ' expiring on ' + amect10[key] + '\n';
                }
            }
            for(var key in amect11){
                if (amect11[key]=="30"){
                    str=str+'Training of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (amect11[key]=="15"){
                    str=str+'Training of ' + key + ' expiring in 15days.' + '\n';
                }
                else { 
                    str=str+'Training of ' + key + ' expiring on ' + amect11[key] + '\n';
                }
            }
            for(var key in amect12){
                if (amect12[key]=="30"){
                    str=str+'Training of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (amect12[key]=="15"){
                    str=str+'Training of ' + key + ' expiring in 15days.' + '\n';
                }
                else { 
                    str=str+'Training of ' + key + ' expiring on ' + amect12[key] + '\n';
                }
            }
            for(var key in amect13){
                if (amect13[key]=="30"){
                    str=str+'Training of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (amect13[key]=="15"){
                    str=str+'Training of ' + key + ' expiring in 15days.' + '\n';
                }
                else { 
                    str=str+'Training of ' + key + ' expiring on ' + amect13[key] + '\n';
                }    
            }
            for(var key in amect14){
                if (amect14[key]=="30"){
                    str=str+'Training of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (amect14[key]=="15"){
                    str=str+'Training of ' + key + ' expiring in 15days.' + '\n';
                }
                else { 
                    str=str+'Training of ' + key + ' expiring on ' + amect14[key] + '\n';
                } 
            }
            for(var key in amect15){
                if (amect15[key]=="30"){
                    str=str+'Training of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (amect15[key]=="15"){
                    str=str+'Training of ' + key + ' expiring in 15days.' + '\n';
                }
                else { 
                    str=str+'Training of ' + key + ' expiring on ' + amect15[key] + '\n';
                }    
            }
            for(var key in amect16){
                if (amect16[key]=="30"){
                    str=str+'Training of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (amect16[key]=="15"){
                    str=str+'Training of ' + key + ' expiring in 15days.' + '\n';
                }
                else { 
                    str=str+'Training of ' + key + ' expiring on ' + amect16[key] + '\n';
                }    
            }
            for(var key in amect17){
                if (amect17[key]=="30"){
                    str=str+'Training of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (amect17[key]=="15"){
                    str=str+'Training of ' + key + ' expiring in 15days.' + '\n';
                }
                else { 
                    str=str+'Training of ' + key + ' expiring on ' + amect17[key] + '\n';
                }    
            }
            for(var key in amect18){
                if (amect18[key]=="30"){
                    str=str+'Training of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (amect18[key]=="15"){
                    str=str+'Training of ' + key + ' expiring in 15days.' + '\n';
                }
                else { 
                    str=str+'Training of ' + key + ' expiring on ' + amect18[key] + '\n';
                }    
            }
            for(var key in amect19){
                if (amect19[key]=="30"){
                    str=str+'Training of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (amect19[key]=="15"){
                    str=str+'Training of ' + key + ' expiring in 15days.' + '\n';
                }
                else { 
                    str=str+'Training of ' + key + ' expiring on ' + amect19[key] + '\n';
                }    
            }
            for(var key in amect20){
                if (amect20[key]=="30"){
                    str=str+'Training of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (amect20[key]=="15"){
                    str=str+'Training of ' + key + ' expiring in 15days.' + '\n';
                }
                else { 
                    str=str+'Training of ' + key + ' expiring on ' + amect20[key] + '\n';
                }    
            }
            for(var key in amect21){
                if (amect21[key]=="30"){
                    str=str+'Training of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (amect21[key]=="15"){
                    str=str+'Training of ' + key + ' expiring in 15days.' + '\n';
                }
                else { 
                    str=str+'Training of ' + key + ' expiring on ' + amect21[key] + '\n';
                }    
            }
            var mailOptions = {
                from: 'cdms4ciasl@gmail.com',
                to: ['jenbros.encrypted@gmail.com','keerthibinu777@gmail.com'],
                subject: 'AME CONTINUATION TRAININGS: Notification on expiring validity.',
                text: str
              };
              if (str!="") {
            transporter.sendMail(mailOptions, (e, info) => {
            if (e) {
            console.error(e);
            } else {
            console.log('Email sent: ' + info.response);
            }
            });}
            var day = today.getDate();
            var month = today.getMonth() + 1; // Adding 1 because the month is zero-based
            var year = today.getFullYear();
            var formattedDay = day < 10 ? '0' + day : day;
            var formattedMonth = month < 10 ? '0' + month : month;
            var formattedDate = formattedDay + '-' + formattedMonth + '-' + year;

            const que = `UPDATE new_schema.one_day_mail SET todays_date = '${formattedDate}' WHERE sr_no = 3`;

            connection.query(que, (err, result) => {
            if (err) {
            console.error('Error executing the query:', err);
                return;
            }
            });
        }
});

//GSE EQUIPMENT 
var query = 'SELECT todays_date as td FROM new_schema.one_day_mail WHERE sr_no = 4';
connection.query(query, (err, results) => {
          if (err) {
        console.error('Error executing the query:', err);
        return;
      }
          var inputDate = results[0].td;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
          var inputDateTime = new Date(yyyy, mm - 1, dd); 
          var oneDayMs = 24 * 60 * 60 * 1000;
          var  currentDate = new Date();
          var days_difference = Math.floor((currentDate.getTime() - inputDateTime.getTime()) / oneDayMs);
          console.log(days_difference);
          if(days_difference>0)
          {
            str="";
            for(var key in gse_nextcheck){
                if (gse_nextcheck[key]=="30"){
                    str=str+'Validity of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (gse_nextcheck[key]=="15"){
                    str=str+'Validity of ' + key + ' expiring in 15days.' + '\n';
                }
                else { 
                    str=str+'Validity of ' + key + ' expiring on ' + gse_nextcheck[key] + '\n';
                }    
            }
              var mailOptions = {
                  from: 'cdms4ciasl@gmail.com',
                  to: ['jenbros.encrypted@gmail.com','keerthibinu777@gmail.com'],
                subject: 'GSE : Notification on expiring validity.',
                  text: str
                };
                if (str!="") { 
              transporter.sendMail(mailOptions, (e, info) => {
              if (e) {
              console.error(e);
              } else {
              console.log('Email sent: ' + info.response);
              }
              });}
              var day = today.getDate();
              var month = today.getMonth() + 1; // Adding 1 because the month is zero-based
              var year = today.getFullYear();
              var formattedDay = day < 10 ? '0' + day : day;
              var formattedMonth = month < 10 ? '0' + month : month;
              var formattedDate = formattedDay + '-' + formattedMonth + '-' + year;
  
              const que = `UPDATE new_schema.one_day_mail SET todays_date = '${formattedDate}' WHERE sr_no = 4`;
  
              connection.query(que, (err, result) => {
              if (err) {
              console.error('Error executing the query:', err);
                  return;
              }
              });
          }
});

//ALL AUDIT TABLES
var query = 'SELECT todays_date as td FROM new_schema.one_day_mail WHERE sr_no = 5';
connection.query(query, (err, results) => {
          if (err) {
        console.error('Error executing the query:', err);
        return;
      }
          var inputDate = results[0].td;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
          var inputDateTime = new Date(yyyy, mm - 1, dd); 
          var oneDayMs = 24 * 60 * 60 * 1000;
          var  currentDate = new Date();
          var days_difference = Math.floor((currentDate.getTime() - inputDateTime.getTime()) / oneDayMs);
          console.log(days_difference);
          if(days_difference>0)
          {
            str="";
            for(var key in regulator_cap1){
                if (regulator_cap1[key]=="30"){
                    str=str+'Regulator Audit Table - CAP validity of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (regulator_cap1[key]=="15"){
                    str=str+'Regulator Audit Table - CAP validity of ' + key + ' expiring in 15days.' + '\n';
                }
                else { 
                    str=str+'Regulator Audit Table - CAP validity of ' + key + ' expiring on ' + regulator_cap1[key] + '\n';
                }    
            }
            for(var key in regulator_ca1){
                if (regulator_ca1[key]=="30"){
                    str=str+'Regulator Audit Table - CA validity of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (regulator_ca1[key]=="15"){
                    str=str+'Regulator Audit Table - CA validity of ' + key + ' expiring in 15days.' + '\n';
                }
                else { 
                    str=str+'Regulator Audit Table - CA validity of ' + key + ' expiring on ' + regulator_ca1[key] + '\n';
                }
            }
            for(var key in regulator_cap2){
                if (regulator_cap2[key]=="30"){
                    str=str+'Audit by Airline Operators Table - CAP validity of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (regulator_cap2[key]=="15"){
                    str=str+'Audit by Airline Operators Table - CAP validity of ' + key + ' expiring in 15days.' + '\n';
                }
                else { 
                    str=str+'Audit by Airline Operators Table - CAP validity of ' + key + ' expiring on ' + regulator_cap2[key] + '\n';
                }
            }
            for(var key in regulator_ca2){
                if (regulator_ca2[key]=="30"){
                    str=str+'Audit by Airline Operators Table - CA validity of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (regulator_ca2[key]=="15"){
                    str=str+'Audit by Airline Operators Table - CA validity of ' + key + ' expiring in 15days.' + '\n';
                }
                else { 
                    str=str+'Audit by Airline Operators Table - CA validity of ' + key + ' expiring on ' + regulator_ca2[key] + '\n';
                }
            }
            for(var key in regulator_cap3){
                if (regulator_cap3[key]=="30"){
                    str=str+'Quality Audit Table - CAP validity of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (regulator_cap3[key]=="15"){
                    str=str+'Quality Audit Table - CAP validity of ' + key + ' expiring in 15days.' + '\n';
                }
                else { 
                    str=str+'Quality Audit Table - CAP validity of ' + key + ' expiring on ' + regulator_cap3[key] + '\n';
                }
            }
            for(var key in regulator_ca3){
                if (regulator_ca3[key]=="30"){
                    str=str+'Quality Audit Table - CA validity of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (regulator_ca3[key]=="15"){
                    str=str+'Quality Audit Table - CA validity of ' + key + ' expiring in 15days.' + '\n';
                }
                else { 
                    str=str+'Quality Audit Table - CA validity of ' + key + ' expiring on ' + regulator_ca3[key] + '\n';
                }
            }
            for(var key in regulator_cap4){
                if (regulator_cap4[key]=="30"){
                    str=str+'Line Maintenance Table - CAP validity of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (regulator_cap4[key]=="15"){
                    str=str+'Line Maintenance Table - CAP validity of ' + key + ' expiring in 15days.' + '\n';
                }
                else { 
                    str=str+'Line Maintenance Table - CAP validity of ' + key + ' expiring on ' + regulator_cap4[key] + '\n';
                }
            }
            for(var key in regulator_ca4){
                if (regulator_ca4[key]=="30"){
                    str=str+'Line Maintenance Table - CA validity of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (regulator_ca4[key]=="15"){
                    str=str+'Line Maintenance Table - CA validity of ' + key + ' expiring in 15days.' + '\n';
                }
                else { 
                    str=str+'Line Maintenance Table - CA validity of ' + key + ' expiring on ' + regulator_ca4[key] + '\n';
                }
            }
            for(var key in regulator_auth){
                if (regulator_auth[key]=="30"){
                    str=str+'Internal Quality Auditors Table - Authorisation validity of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (regulator_auth[key]=="15"){
                    str=str+'Internal Quality Auditors Table - Authorisation validity of ' + key + ' expiring in 15days.' + '\n';
                }
                else { 
                    str=str+'Internal Quality Auditors Table - Authorisation validity of ' + key + ' expiring on ' + regulator_auth[key] + '\n';
                }
            }
            for(var key in regulator_reg){
                if (regulator_reg[key]=="30"){
                    str=str+'Internal Quality Auditors Table - Regulations validity of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (regulator_reg[key]=="15"){
                    str=str+'Internal Quality Auditors Table - Regulations validity of ' + key + ' expiring in 15days.' + '\n';
                }
                else { 
                    str=str+'Internal Quality Auditors Table - Regulations validity of ' + key + ' expiring on ' + regulator_reg[key] + '\n';
                }
            }
            for(var key in regulator_hf){
                if (regulator_hf[key]=="30"){
                    str=str+'Internal Quality Auditors Table - HF validity of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (regulator_hf[key]=="15"){
                    str=str+'Internal Quality Auditors Table - HF validity of ' + key + ' expiring in 15days.' + '\n';
                }
                else { 
                    str=str+'Internal Quality Auditors Table - HF validity of ' + key + ' expiring on ' + regulator_hf[key] + '\n';
                }
            }
            for(var key in regulator_fts){
                if (regulator_fts[key]=="30"){
                    str=str+'Internal Quality Auditors Table - FTS validity of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (regulator_fts[key]=="15"){
                    str=str+'Internal Quality Auditors Table - FTS validity of ' + key + ' expiring in 15days.' + '\n';
                }
                else { 
                    str=str+'Internal Quality Auditors Table - FTS validity of ' + key + ' expiring on ' + regulator_fts[key] + '\n';
                }
            }
            for(var key in regulator_ewis){
                if (regulator_ewis[key]=="30"){
                    str=str+'Internal Quality Auditors Table - EWIS validity of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (regulator_ewis[key]=="15"){
                    str=str+'Internal Quality Auditors Table - EWIS validity of ' + key + ' expiring in 15days.' + '\n';
                }
                else { 
                    str=str+'Internal Quality Auditors Table - EWIS validity of ' + key + ' expiring on ' + regulator_ewis[key] + '\n';
                }
            }
            for(var key in regulator_sms){
                if (regulator_sms[key]=="30"){
                    str=str+'Internal Quality Auditors Table - SMS validity of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (regulator_sms[key]=="15"){
                    str=str+'Internal Quality Auditors Table - SMS validity of ' + key + ' expiring in 15days.' + '\n';
                }
                else { 
                    str=str+'Internal Quality Auditors Table - SMS validity of ' + key + ' expiring on ' + regulator_sms[key] + '\n';
                }
            }
              var mailOptions = {
                  from: 'cdms4ciasl@gmail.com',
                  to: ['jenbros.encrypted@gmail.com','keerthibinu777@gmail.com'],
                subject: 'AUDITS: Notification on expiring validity.',
                  text: str
                };
                if (str!="") {
              transporter.sendMail(mailOptions, (e, info) => {
              if (e) {
              console.error(e);
              } else {
              console.log('Email sent: ' + info.response);
              }
              });}
              var day = today.getDate();
              var month = today.getMonth() + 1; // Adding 1 because the month is zero-based
              var year = today.getFullYear();
              var formattedDay = day < 10 ? '0' + day : day;
              var formattedMonth = month < 10 ? '0' + month : month;
              var formattedDate = formattedDay + '-' + formattedMonth + '-' + year;
  
              const que = `UPDATE new_schema.one_day_mail SET todays_date = '${formattedDate}' WHERE sr_no = 5`;
  
              connection.query(que, (err, result) => {
              if (err) {
              console.error('Error executing the query:', err);
                  return;
              }
              });
          }
});

//STORES,CALIBERATION
var query = 'SELECT todays_date as td FROM new_schema.one_day_mail WHERE sr_no = 6';
connection.query(query, (err, results) => {
          if (err) {
        console.error('Error executing the query:', err);
        return;
      }
          var inputDate = results[0].td;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
          var inputDateTime = new Date(yyyy, mm - 1, dd); 
          var oneDayMs = 24 * 60 * 60 * 1000;
          var  currentDate = new Date();
          var days_difference = Math.floor((currentDate.getTime() - inputDateTime.getTime()) / oneDayMs);
          console.log(days_difference);
          if(days_difference>0)
          {
            str="";
            for(var key in store_life){
                if (store_life[key]=="30"){
                    str=str+'Storage Life Monitoring Table - Validity of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (store_life[key]=="15"){
                    str=str+'Storage Life Monitoring Table - Validity of ' + key + ' expiring in 15days.' + '\n';
                }
                else { 
                    str=str+'Storage Life Monitoring Table - Validity of ' + key + ' expiring on ' + store_life[key] + '\n';
                }    
            }
            for(var key in tools_calib){
                if (tools_calib[key]=="30"){
                    str=str+'Tools and Equipment Calibration Table - Validity of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (tools_calib[key]=="15"){
                    str=str+'Tools and Equipment Calibration Table - Validity of ' + key + ' expiring in 15days.' + '\n';
                }
                else { 
                    str=str+'Tools and Equipment Calibration Table - Validity of ' + key + ' expiring on ' + tools_calib[key] + '\n';
                }    
            }
              var mailOptions = {
                  from: 'cdms4ciasl@gmail.com',
                  to: ['jenbros.encrypted@gmail.com','keerthibinu777@gmail.com'],
                subject: 'STORES,CALIBRATION : Notification on expiring validity.',
                  text: str
                };
                if (str!="") {
              transporter.sendMail(mailOptions, (e, info) => {
              if (e) {
              console.error(e);
              } else {
              console.log('Email sent: ' + info.response);
              }
              });}
              var day = today.getDate();
              var month = today.getMonth() + 1; // Adding 1 because the month is zero-based
              var year = today.getFullYear();
              var formattedDay = day < 10 ? '0' + day : day;
              var formattedMonth = month < 10 ? '0' + month : month;
              var formattedDate = formattedDay + '-' + formattedMonth + '-' + year;
  
              const que = `UPDATE new_schema.one_day_mail SET todays_date = '${formattedDate}' WHERE sr_no = 6`;
  
              connection.query(que, (err, result) => {
              if (err) {
              console.error('Error executing the query:', err);
                  return;
              }
              });
          }
});

//QUALITY
var query = 'SELECT todays_date as td FROM new_schema.one_day_mail WHERE sr_no = 7';
connection.query(query, (err, results) => {
          if (err) {
        console.error('Error executing the query:', err);
        return;
      }
          var inputDate = results[0].td;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
          var inputDateTime = new Date(yyyy, mm - 1, dd); 
          var oneDayMs = 24 * 60 * 60 * 1000;
          var  currentDate = new Date();
          var days_difference = Math.floor((currentDate.getTime() - inputDateTime.getTime()) / oneDayMs);
          console.log(days_difference);
          if(days_difference>0)
          {
            str="";
            for(var key in regulator_approval){
                if (regulator_approval[key]=="30"){
                    str=str+'Regulator AMO Approvals Table - Validity of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (regulator_approval[key]=="15"){
                    str=str+'Regulator AMO Approvals Table - Validity of ' + key + ' expiring in 15days.' + '\n';
                }
                else {
                    str=str+'Regulator AMO Approvals Table - Validity of ' + key + ' expiring on ' + regulator_approval[key] + '.\n';
                }    
            }
            for(var key in operator_agree){
                if (operator_agree[key]=="30"){
                    str=str+'Operators Table - Validity of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (operator_agree[key]=="15"){
                    str=str+'Operators Table - Validity of ' + key + ' expiring in 15days.' + '\n';
                }
                else {
                    str=str+'Operators Table - Validity of ' + key + ' expiring on ' + operator_agree[key] + '.\n';
                }    
            }
              var mailOptions = {
                  from: 'cdms4ciasl@gmail.com',
                  to: ['jenbros.encrypted@gmail.com','keerthibinu777@gmail.com'],
                subject: 'QUALITY : Notification on expiring validity.',
                  text: str
                };
              if (str!="") {
              transporter.sendMail(mailOptions, (e, info) => {
              if (e) {
              console.error(e);
              } else {
              console.log('Email sent: ' + info.response);
              }
              });}
              var day = today.getDate();
              var month = today.getMonth() + 1; // Adding 1 because the month is zero-based
              var year = today.getFullYear();
              var formattedDay = day < 10 ? '0' + day : day;
              var formattedMonth = month < 10 ? '0' + month : month;
              var formattedDate = formattedDay + '-' + formattedMonth + '-' + year;
  
              const que = `UPDATE new_schema.one_day_mail SET todays_date = '${formattedDate}' WHERE sr_no = 7`;
  
              connection.query(que, (err, result) => {
              if (err) {
              console.error('Error executing the query:', err);
                  return;
              }
              });
          }
});

//TECHNICIAN
var query = 'SELECT todays_date as td FROM new_schema.one_day_mail WHERE sr_no = 8';
connection.query(query, (err, results) => {
          if (err) {
        console.error('Error executing the query:', err);
        return;
      }
          var inputDate = results[0].td;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
          var inputDateTime = new Date(yyyy, mm - 1, dd); 
          var oneDayMs = 24 * 60 * 60 * 1000;
          var  currentDate = new Date();
          var days_difference = Math.floor((currentDate.getTime() - inputDateTime.getTime()) / oneDayMs);
          console.log(days_difference);
          if(days_difference>0)
          {
            str="";
            for(var key in tech_dgr){
                if (tech_dgr[key]=="30"){
                    str=str+'DGR Validity of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (tech_dgr[key]=="15"){
                    str=str+'DGR Validity of ' + key + ' expiring in 15days.' + '\n';
                }
                else {
                    str=str+'DGR Validity of ' + key + ' expiring on ' + tech_dgr[key] + '\n';
                }    
            }
            for(var key in tech_ewis){
                if (tech_ewis[key]=="30"){
                    str=str+'EWIS Validity of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (tech_ewis[key]=="15"){
                    str=str+'EWIS Validity of ' + key + ' expiring in 15days.' + '\n';
                }
                else {
                    str=str+'EWIS Validity of ' + key + ' expiring on ' + tech_ewis[key] + '\n';
                }    
            }
            for(var key in tech_fts){
                if (tech_fts[key]=="30"){
                    str=str+'FTS Validity of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (tech_fts[key]=="15"){
                    str=str+'FTS Validity of ' + key + ' expiring in 15days.' + '\n';
                }
                else {
                    str=str+'FTS Validity of ' + key + ' expiring on ' + tech_fts[key] + '\n';
                }
            }
            for(var key in tech_hf){
                if (tech_hf[key]=="30"){
                    str=str+'HF Validity of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (tech_hf[key]=="15"){
                    str=str+'HF Validity of ' + key + ' expiring in 15days.' + '\n';
                }
                else {
                    str=str+'HF Validity of ' + key + ' expiring on ' + tech_hf[key] + '\n';
                }    
            }
            for(var key in tech_lm){
                if (tech_lm[key]=="30"){
                    str=str+'LM PROC MOE & REGULATION Validity of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (tech_lm[key]=="15"){
                    str=str+'LM PROC MOE & REGULATION Validity of ' + key + ' expiring in 15days.' + '\n';
                }
                else {
                    str=str+'LM PROC MOE & REGULATION Validity of ' + key + ' expiring on ' + tech_lm[key] + '\n';
                }    
            }
            for(var key in tech_sms){
                if (tech_sms[key]=="30"){
                    str=str+'SMS Validity of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (tech_sms[key]=="15"){
                    str=str+'SMS Validity of ' + key + ' expiring in 15days.' + '\n';
                }
                else {
                    str=str+'SMS Validity of ' + key + ' expiring on ' + tech_sms[key] + '\n';
                }    
            }
            for(var key in tech_store){
                if (tech_store[key]=="30"){
                    str=str+'STORE PROC & ESDS Validity of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (tech_store[key]=="15"){
                    str=str+'STORE PROC & ESDS Validity of ' + key + ' expiring in 15days.' + '\n';
                }
                else {
                    str=str+'STORE PROC & ESDS Validity of ' + key + ' expiring on ' + tech_store[key] + '\n';
                }    
            }
              var mailOptions = {
                  from: 'cdms4ciasl@gmail.com',
                  to: ['jenbros.encrypted@gmail.com','keerthibinu777@gmail.com'],
                subject: 'TECHNICIAN Continuation Trainings : Notification on expiring validity.',
                  text: str
                };
                if (str!="") {  
              transporter.sendMail(mailOptions, (e, info) => {
              if (e) {
              console.error(e);
              } else {
              console.log('Email sent: ' + info.response);
              }
              });}
              var day = today.getDate();
              var month = today.getMonth() + 1; // Adding 1 because the month is zero-based
              var year = today.getFullYear();
              var formattedDay = day < 10 ? '0' + day : day;
              var formattedMonth = month < 10 ? '0' + month : month;
              var formattedDate = formattedDay + '-' + formattedMonth + '-' + year;
  
              const que = `UPDATE new_schema.one_day_mail SET todays_date = '${formattedDate}' WHERE sr_no = 8`;
  
              connection.query(que, (err, result) => {
              if (err) {
              console.error('Error executing the query:', err);
                  return;
              }
              });
          }
});

//AME License
var query = 'SELECT todays_date as td FROM new_schema.one_day_mail WHERE sr_no = 9';
connection.query(query, (err, results) => {
          if (err) {
        console.error('Error executing the query:', err);
        return;
      }
          var inputDate = results[0].td;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
          var inputDateTime = new Date(yyyy, mm - 1, dd); 
          var oneDayMs = 24 * 60 * 60 * 1000;
          var  currentDate = new Date();
          var days_difference = Math.floor((currentDate.getTime() - inputDateTime.getTime()) / oneDayMs);
          console.log(days_difference);
          if(days_difference>0)
          {
            str="";
            for(var key in ame_dgca){
                if (ame_dgca[key]=="30"){
                    str=str+'DGCA License Validity of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (ame_dgca[key]=="15"){
                    str=str+'DGCA License Validity of ' + key + ' expiring in 15days.' + '\n';
                }
                else {
                    str=str+'DGCA License Validity of ' + key + ' expiring on ' + ame_dgca[key] + '\n';
                }    
            }
            for(var key in ame_easa){
                if (ame_easa[key]=="30"){
                    str=str+'EASA License Validity of ' + key + ' expiring in 30days.' + '\n';
                }
                else if (ame_easa[key]=="15"){
                    str=str+'EASA License Validity of ' + key + ' expiring in 15days.' + '\n';
                }
                else {
                    str=str+'EASA License Validity of ' + key + ' expiring on ' + ame_easa[key] + '\n';
                }    
            }
              var mailOptions = {
                  from: 'cdms4ciasl@gmail.com',
                  to: ['jenbros.encrypted@gmail.com','keerthibinu777@gmail.com'],
                subject: 'AME LICENSE : Notification on expiring validity.',
                  text: str
                };
                if (str!="") {  
              transporter.sendMail(mailOptions, (e, info) => {
              if (e) {
              console.error(e);
              } else {
              console.log('Email sent: ' + info.response);
              }
              });}
              var day = today.getDate();
              var month = today.getMonth() + 1; // Adding 1 because the month is zero-based
              var year = today.getFullYear();
              var formattedDay = day < 10 ? '0' + day : day;
              var formattedMonth = month < 10 ? '0' + month : month;
              var formattedDate = formattedDay + '-' + formattedMonth + '-' + year;
  
              const que = `UPDATE new_schema.one_day_mail SET todays_date = '${formattedDate}' WHERE sr_no = 9`;
  
              connection.query(que, (err, result) => {
              if (err) {
              console.error('Error executing the query:', err);
                  return;
              }
              });
          }
});



    /*
transporter.sendMail(mailOptions, (e, info) => {
    if (e) {
      console.error(e);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });*/
            res.write(`<div class="dashboard-home">
            <div class="background"></div>
            <div class="dashboard-home-child"></div>
            <img
              class="dashboard-home-item"
              alt=""
              src="logo.png"/>
            <b class="cochin-international-aviation">COCHIN INTERNATIONAL AVIATION SERVICES LIMITED</b>
            <div class="logout">
              <form action="/reset">
                <button class="reset">Reset Password</button>
              </form>
              <form action="/logout" method="post">
                <button class="reg">Logout</button>
              </form>
            </div>
            <div class="dashboard-home-inner"></div>
            <div class="rectangle-div"></div>
            <div class="dashboard-home-child1"></div>
            <div class="dashboard-home-child2"></div>
            <div class="dashboard-home-child3"></div>
            <div class="dashboard-home-child4"></div>
            <div class="dashboard-home-child5"></div>
            <div class="dashboard-home-child6"></div>
            <div class="dashboard-home-child15"></div>
            <b class="engineer"><a href="ENGINEER.html" style="text-decoration: none; color: white;">ENGINEERS</b>
            <b class="admin"><a href="ADMIN.html" style="text-decoration: none; color: white;">ADMIN</b>
            <b class="partsmaterials-life-expiry"><a href="STORAGE.html" style="text-decoration: none; color: white;">PARTS/MATERIALS LIFE EXPIRY</b>
            <b class="permissions"><a href="PERMISSION.html" style="text-decoration: none; color: white;">PERMISSIONS</a></b>
            <b class="gse"><a href="GSE.html" style="text-decoration: none; color: white;">GSE</b>
            <b class="quality"><a href="QUALITY.html" style="text-decoration: none; color: white;">QUALITY</b>
            <b class="technician"><a href="TECHNICIAN.html" style="text-decoration: none; color: white;">TECHNICIANS</b>
            <b class="auditor"><a href="AUDITOR.html" style="text-decoration: none; color: white;">AUDITORS</b>
            <b class="tools-equipments-container"><a href="TOOLS.html" style="text-decoration: none; color: white;">
              <p class="tools">TOOLS &</p>
              <p class="tools">EQUIPMENT</p>
            </b>
        `);    
            if(cnt4>0)
        {
        res.write(`
                <img 
                class="ellipse-icon" 
                style="position: absolute; width: 4.04%; top: 216px; right: 54.56%; left: 41.41%; max-width: 100%; overflow: hidden; height: 62px;"
                alt=""
                src="ellipse-1.svg" />
      
                `);
        }
        if(cnt1>0)
        {
        res.write(`
            <img 
                class="dashboard-home-child7"
                style="position: absolute; width: 4.04%; top: 216px; right: 54.56%; left: 41.41%; max-width: 100%; overflow: hidden; height: 62px; top: 405px; right: 9.18%; left: 86.78%;"
                alt=""
                src="ellipse-1.svg" />`);
        }
        if(cnt3>0)
        {
        res.write(`
            <img
                class="dashboard-home-child8"
                style="position: absolute; width: 4.04%; top: 405px; right: 54.56%; left: 41.41%; max-width: 100%; overflow: hidden; height: 62px;"
                alt=""
                src="ellipse-1.svg" />`);
        }
        if(cnt2>0)
        {
        res.write(`
            <img 
                class="dashboard-home-child9"
                style="position: absolute; width: 4.04%; top: 399px; right: 54.56%; left: 41.41%; max-width: 100%; overflow: hidden; height: 62px;top: 216px; right: 9.18%; left: 86.78%;"
                alt=""
                src="ellipse-1.svg" />`);
        }
        if(cnt>0)
        {
        res.write(`
      
            <img
                class="dashboard-home-child10" 
                style="position: absolute; width: 4.04%; top: 399px; right: 54.56%; left: 41.41%; max-width: 100%; overflow: hidden; height: 62px;top: 216px; right: 9.18%; left: 86.78%;top: 781px; right: 32.42%; left: 63.54%;top: 787px;right: 10.16%;left: 85.81%;"
                alt="" 
                src="ellipse-1.svg" />`);
        }
        if(cnt5>0)
        {
        res.write(`
            <img
          class="dashboard-home-child12"
          style="position: absolute; width: 4.04%; top: 597px; right: 54.56%; left: 41.41%; max-width: 100%; overflow: hidden; height: 62px;"
          src="ellipse-1.svg" alt="">`);
        }
        if(cnt6>0)
        {
        res.write(`
            <img
          class="dashboard-home-child13"
          style="position: absolute; width: 4.04%; top: 601px; right: 9.18%; left: 85.81%; max-width: 100%; overflow: hidden; height: 62px;"
          src="ellipse-1.svg" alt="">`);
        }
        if(cnt7>0){
        res.write(`<img
        class="dashboard-home-child14"
        style="position: absolute; width: 4.04%; top: 788px; right: 54.56%; left: 41.41%; max-width: 100%; overflow: hidden; height: 62px;"
        src="ellipse-1.svg" alt="">`);
        }
            res.write(`<b class="b" style="position: absolute; width: 2.08%; top: 230px; left: 42.38%; display: inline-block; color: var(--color-white); 
            height: 38px;">
            `);
            if(cnt4>0)
            {
            res.write(cnt4.toString());
            }
            res.write(`
            </b>
            <b class="b1" style="position: absolute; width: 2.08%; top: 232px; left: 42.38%; display: inline-block; color: var(--color-white); 
            height: 38px; top: 418px; height: 39px;">
            `);
            if(cnt3>0)
            {
            res.write(cnt3.toString());
            }
            res.write(`
            </b>
            <b class="b2" style="position: absolute; width: 2.08%; top: 232px; left: 42.38%; display: inline-block; color: var(--color-white); 
            height: 38px; top: 411px; height: 39px;top: 420px; left: 87.76%;">
            `);
            if(cnt1>0)
            {
            res.write(cnt1.toString());
            }
            res.write(`
            </b>
            <b class="b3" style="position: absolute; width: 2.08%; top: 232px; left: 42.38%; display: inline-block; color: var(--color-white); 
            height: 38px; top: 411px; height: 39px; top: 423px; left: 87.76%; top: 228px;">
            `);
            if(cnt2>0)
            {
            res.write(cnt2.toString());
            }
            res.write(`
            </b>
            <b class="b4" style="position: absolute; width: 2.08%; top: 232px; left: 42.38%; display: inline-block; color: var(--color-white); 
            height: 38px; top: 411px; height: 39px;top: 423px; left: 87.76%; top: 228px;top: 793px;left: 64.52%; top: 799px;
            left: 86.78%;">
            `);
            if(cnt>0)
            {
            res.write(cnt.toString());
            }
            res.write(`
            </b>
            <b class="b5" style="  position: absolute; width: 2.08%; top: 800px; left: 42.38%; display: inline-block; color: var(--color-white);
            height: 39px;">
            `);
            if(cnt7>0)
            {
            res.write(cnt7.toString());
            }
            res.write(`
            </b>
            <b class="b6" style="position: absolute; width: 2.08%; top: 610px; left: 42.38%; display: inline-block; color: #fff; height: 38px;">
            `);
            if(cnt5>0)
            {
            res.write(cnt5.toString());
            }
            res.write(`
            </b>
      <b class="b7" style="position: absolute; width: 2.08%; top: 614px; left: 86.78%; display: inline-block; color: #fff; height: 38px;">
        `);
        if(cnt6>0)
      {
      res.write(cnt6.toString());
        }
        res.write(`</b>
          </div>
        `);
    }
    res.end();   
});
});


app.get('/ENGINEER.html',basicauth,(req,res)=>{
    fs.readFile("ENGINEER.html", function (err, pgResp){
        if (err) {
            res.writeHead(404);
            res.write('Contents you are looking are Not Found');
        } else {
            res.write(pgResp);
            if(v1==1){
            res.write("<h2 style='background-color: #007bff; color:white; text-align: center';>AME LICENSE</h2>");

            res.write(`
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.3/simplebar.min.css">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.3/simplebar.min.js"></script>
            <style>  
            .form-container {
                max-height: 400px;
                overflow-y: auto;
                scrollbar-width: none;
                -ms-overflow-style: none;
            }   
            .form-container::-webkit-scrollbar {
              width: 0.5em;
              background-color: white;
            } 
            .table-container {
                border-collapse: collapse;
                width: 100%;
                table-layout: auto;
                white-space: nowrap;
            }
            .table-container input {
                padding: 4px;
                text-align: left;
                margin: 4px;
                overflow: auto;
            }
            .form-container .simplebar-track:before {
              width: 5px; 
            }
            .form-container .simplebar-scrollbar:before {
              background-color: #999999;
            }
            </style>

            <div class="form-container" data-simplebar>
            <form action="/amelicense" method="post">
             <div class="table-container">
              <input type="text" id="i1" name="SR_NO" placeholder="SR NO ">
              <input type="text" id="i2" name="NAME" placeholder="NAME">
              <input type="text" id="i3" name="LIC_CAT" placeholder="LIC CAT">
              <input type="text" id="i4" name="DGCA_LIC_NO" placeholder="DGCA LIC NO">
              <input type="text" id="i5" name="DGCA_LIC_VALIDITY" placeholder="DGCA LIC VALIDITY">
              <input type="text" id="i6" name="EASA_LIC_NO" placeholder="EASA LIC NO">
              <input type="text" id="i7" name="EASA_LIC_VALIDITY" placeholder="EASA_LIC_VALIDITY">
              <input type="text" id="i8" name="A320_series_V2500" placeholder="A320_series_V2500">
              <input type="text" id="i9" name="A320_series_CFM_56" placeholder="A320_series_CFM_56">
              <input type="text" id="i10" name="A320_series_LEAP_1A" placeholder="A320_series_LEAP_1A">
              <input type="text" id="i11" name="A320_series_p_and_w" placeholder="A320_series_p_and_w">
              <input type="text" id="i12" name="A330_T700" placeholder="A330_T700">
              <input type="text" id="i14" name="A330_GE_CF6" placeholder="A330_GE_CF6">
              <input type="text" id="i13" name="A330_NEO_T7000" placeholder="A330_NEO_T7000">
              <input type="text" id="i15" name="A350_TRENT_XWB" placeholder="A350_TRENT_XWB">
              <input type="text" id="i16" name="B737_NG_CFM56_7B" placeholder="B737_NG_CFM56_7B">
              <input type="text" id="i17" name="B737_MAX_LEAP_1B" placeholder="B737_MAX_LEAP_1B">
              <input type="text" id="i18" name="B777_GE_90" placeholder="B777_GE_90">
              <input type="text" id="i19" name="B787_GEnX" placeholder="B787_GEnX">
              <input type="text" id="i19" name="remarks" placeholder="REMARKS">
              </div>
              <div></div>
              <button type="submit" class="btn btn-primary mb-3" style="margin-top: 4px;">SAVE</button>
            </form>
            </div>
            `);
          res.write(`
          <div class="container">
          <table>
          <tr>
                          <form action="/delete_tech_ame_license" method="post">
                          <input type="text" name="button_data" placeholder="SR NO ">
                          <button class="btn btn-outline-success" type="submit" style="border-color: #ffffff; background-color: #ff0000; color: #ffffff;">Delete</button>
                          </form>`);
                          
                              res.write(`<button class="btn" style="background-color: red; margin-left:30%"   type="hidden">`);
                          res.write(count_amelicense_red.toString());
                          res.write(`</button>`);
                          
                                res.write(`<button class="btn" style="background-color: orange;" type="hidden">`);
                            res.write(count_amelicense_orange.toString());
                            res.write(`</button>`);
                            
                            
                            res.write(`<button class="btn" style="background-color: yellow;" type="hidden">`);
                            res.write(count_amelicense.toString());
                            res.write(`</button>`);
                            

                        

                            res.write(`
                          <form action="/download_ame_license" method="post">
                            <button style="float: right;" class="btn btn-outline-success" type="submit" style="border-color: #ffffff; background-color: #ff0000; color: #ffffff;">Download</button>
                            </form>
                          </tr>
                          </table>
                          </div>
                          `);
            res.write(` <script>
                          function scrollHorizontally(event) {
                            const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
                            const scrollContainer = event.currentTarget;
                            scrollContainer.scrollLeft -= delta * 40; // Adjust the scrolling speed as needed
                            event.preventDefault();
                          }
                        </script>`);
            res.write("<div class='table-responsive container' onwheel='scrollHorizontally(event)'>");
            res.write("<table class='table table-striped table-hover table-bordered'>");
            res.write(`<tr>
            <th>SR NO </th>
            <th style="position:sticky; left:0; z-index:1; background-color:white;">Name</th>
            <th>License Cat</th>
            <th>DGCA Lic No</th>
            <th>DGCA Lic Validity</th>
            <th>Remaining Days</th>
            <th>EASA Lic No</th>
            <th>EASA Lic Validity</th>
            <th>Remaining Days</th>
            <th>A320 Series V2500</th>
            <th>A320 Series CFM 56</th>
            <th>A320 Series LEAP 1A</th>
            <th>A320 Series P and W</th>
            <th>A330 T700</th>
            <th>A330 GE CF6</th>
            <th>A330 NEO T7000</th>
            <th>A350 TRENT XWB</th>
            <th>B737 NG CFM56 7B</th>
            <th>B737 MAX LEAP 1B</th>
            <th>B777 GE 90</th>
            <th>B787 GEnX</th>
            <th>Remarks</th>
            </tr>`);}
            var jeswin1 = () => {
                
                connection.query("SELECT * FROM new_schema.amelicense", function (error, result) {
                    for(let i=0;i<length_of_rows_amelicense;i++) 
                    {
                        if(v1==1){
                        res.write('<tr>');
                            if(result[i].sr_no)
                            {
                            res.write('<td>');
                            res.write(result[i].sr_no.toString());
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].name)
                            {
                            res.write('<td style="position:sticky; left:0; z-index:1; background-color:white;">');
                            res.write(result[i].name);
                            res.write('</td>');
                            }
                            else
                            {
                                res.write('<td></td>');
                            }
                            if(result[i].license_cat)
                            {
                            res.write('<td>');
                            res.write(result[i].license_cat);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].dgca_lic_no)
                            {
                            res.write('<td>');
                            res.write(result[i].dgca_lic_no);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].dgca_lic_validity)
                            {
                                res.write('<td>');
                                res.write(result[i].dgca_lic_validity);
                                res.write('</td>');
                                var color=getColor(result[i].dgca_lic_validity);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[i].easa_lic_no)
                            {
                            res.write('<td>');
                            res.write(result[i].easa_lic_no);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].easa_lic_validity)
                            {
                                res.write('<td>');
                                res.write(result[i].easa_lic_validity);
                                res.write('</td>');
                                var color=getColor(result[i].easa_lic_validity);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[i].A320_series_V2500)
                            {
                            res.write('<td>');
                            res.write(result[i].A320_series_V2500);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].A320_series_CFM_56)
                            {
                            res.write('<td>');
                            res.write(result[i].A320_series_CFM_56);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].A320_series_LEAP_1A)
                            {
                            res.write('<td>');
                            res.write(result[i].A320_series_LEAP_1A);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].A320_series_p_and_w)
                            {
                            res.write('<td>');
                            res.write(result[i].A320_series_p_and_w);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].A330_T700)
                            {
                            res.write('<td>');
                            res.write(result[i].A330_T700);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].A330_GE_CF6)
                            {
                            res.write('<td>');
                            res.write(result[i].A330_GE_CF6);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].A330_NEO_T7000)
                            {
                            res.write('<td>');
                            res.write(result[i].A330_NEO_T7000);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].A350_TRENT_XWB)
                            {
                            res.write('<td>');
                            res.write(result[i].A350_TRENT_XWB);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].B737_NG_CFM56_7B)
                            {
                            res.write('<td>');
                            res.write(result[i].B737_NG_CFM56_7B);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].B737_MAX_LEAP_1B)
                            {
                            res.write('<td>');
                            res.write(result[i].B737_MAX_LEAP_1B);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].B777_GE_90)
                            {
                            res.write('<td>');
                            res.write(result[i].B777_GE_90);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].B787_GEnX)
                            {
                            res.write('<td>');
                            res.write(result[i].B787_GEnX);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].remarks)
                            {
                            res.write('<td>');
                            res.write(result[i].remarks);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                        res.write('</tr>');
                        }
                    }
                    res.write("</table>");
                    res.write("</div>");
                    
                    fun1();
                });
            };
            jeswin1();
            var fun1 = () => {
                if(v2==1){
                res.write("<h2 style='background-color: #007bff; color:white; text-align: center';>AME CONTINUATION TRAININGS</h2>");
        res.write(`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.3/simplebar.min.css">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.3/simplebar.min.js"></script>
            <style>  
            .form-container {
                max-height: 400px;
                overflow-y: auto;
                scrollbar-width: none;
                -ms-overflow-style: none;
            }   
            .form-container::-webkit-scrollbar {
              width: 0.5em;
              background-color: white;
            } 
            .table-container {
                border-collapse: collapse;
                width: 100%;
                table-layout: auto;
                white-space: nowrap;
            }
            .table-container input {
                padding: 4px;
                text-align: left;
                margin: 4px;
                overflow: auto;
            }
            .form-container .simplebar-track:before {
              width: 5px; 
            }
            .form-container .simplebar-scrollbar:before {
              background-color: #999999;
            }
            </style>
        <div class="form-container" data-simplebar>
            <form action="/ame_continuation_trainings" method="post">
             <div class="table-container">
                <input type="text" id="i1" name="SR_NO" placeholder="SR NO ">
                <input type="text" id="i2" name="NAME" placeholder="NAME">
                <input type="text" id="i3" name="STAFF_NO" placeholder="STAFF NO">
                <input type="text" id="i4" name="A320_V2500" placeholder="A320 V2500">
                <input type="text" id="i5" name="A320_CFM_LEAP_1A" placeholder="A320 CFM LEAP 1A">
                <input type="text" id="i6" name="A330_RR_T700" placeholder="A330 RR T700">
                
                <input type="text" id="i8" name="A330_GE_CF6" placeholder="A330 GE CF6">
                <input type="text" id="i7" name="A330_NEO_RR_T7000" placeholder="A330 NEO RR T7000">
                <input type="text" id="i9" name="A330_P_AND_W" placeholder="A330 P AND W">
                <input type="text" id="i9" name="A350_RR_T_XWB" placeholder="A350 RR T-XWB">
                <input type="text" id="i9" name="B737_CFM56" placeholder="B737 CFM56">
                <input type="text" id="i9" name="B737_MAX_CFM_LEAP1B" placeholder="B737 MAX CFM LEAP1B">
                <input type="text" id="i9" name="B777_GE90" placeholder="B777 GE90">
                <input type="text" id="i9" name="B787_GENX" placeholder="B787 GENX">
                <input type="text" id="i9" name="ADDNL_REFR" placeholder="ADDNL REFR">
                <input type="text" id="i9" name="HF" placeholder="HF">
                <input type="text" id="i9" name="FTS" placeholder="FTS">
                <input type="text" id="i9" name="EWIS" placeholder="EWIS">
                <input type="text" id="i9" name="SMS" placeholder="SMS">
                <input type="text" id="i10" name="REGULATIONS" placeholder="REGULATIONS">
                <input type="text" id="i10" name="GCAA" placeholder="GCAA">
                <input type="text" id="i10" name="ETOPS" placeholder="ETOPS">
                <input type="text" id="i10" name="RVSM" placeholder="RVSM">
                <input type="text" id="i10" name="OPER_PROC" placeholder="OPER PROC">
                <input type="text" id="i10" name="REMARK" placeholder="REMARKS">

                </div>
                <div></div>
                <button type="submit" class="btn btn-primary mb-3">SAVE</button>
            </form>
            </div>
        `);
          res.write(`
          <div class="container">
          <table>
          <tr>
                          <form action="/delete_ame_continuations" method="post">
                          <input type="text" name="button_data" placeholder="SR NO ">
                          <button class="btn btn-outline-success" type="submit" style="border-color: #ffffff; background-color: #ff0000; color: #ffffff;">Delete</button>
                          </form>`);
                            res.write(`<button class="btn" style="background-color: red; margin-left:30%;" type="hidden">`);
                            res.write(count_ame_continuation_trainings_red.toString());
                            res.write(`</button>`);
                          
                            res.write(`<button class="btn" style="background-color: orange;" type="hidden">`);
                            res.write(count_ame_continuation_trainings_orange.toString());
                            res.write(`</button>`);
                            
                            res.write(`<button class="btn" style="background-color: yellow;" type="hidden">`);
                            res.write(count_ame_continuation_trainings.toString());
                            res.write(`</button>`);
                            

                        

                            res.write(`
                          <form action="/download_ame_continuation_training" method="post">
                            <button style="float: right;" class="btn btn-outline-success" type="submit" style="border-color: #ffffff; background-color: #ff0000; color: #ffffff;">Download</button>
                            </form>
                          </tr>
                          </table>
                          </div>
                          `);
            res.write(` <script>
                          function scrollHorizontally(event) {
                            const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
                            const scrollContainer = event.currentTarget;
                            scrollContainer.scrollLeft -= delta * 40; // Adjust the scrolling speed as needed
                            event.preventDefault();
                          }
                        </script>`);
            res.write("<div class='table-responsive container' onwheel='scrollHorizontally(event)'>");
            res.write("<table class='table table-striped table-hover table-bordered'>");
            res.write(`<tr><th>SR NO </th>
            <th style="position:sticky; left:0; z-index:1; background-color:white;">Name</th>
            <th>Staff No</th>
            <th>A320 V2500</th>
            <th>Remaining Days</th>
            <th>A320 CFM LEAP 1A</th><th>Remaining Days</th>
            <th>A330 RR T700</th><th>Remaining Days</th>
            <th>A330 GE CF6</th><th>Remaining Days</th>
            <th>A330 NEO RR T7000</th><th>Remaining Days</th>
            <th>A330 P AND W</th><th>Remaining Days</th>
            <th>A350 RR T-XWB</th><th>Remaining Days</th>
            <th>B737 CFM56</th><th>Remaining Days</th>
            <th>B737 MAX CFM LEAP1B</th><th>Remaining Days</th>
            <th>B777 GE90</th><th>Remaining Days</th>
            <th>B787 GENX</th><th>Remaining Days</th>
            <th>ADDNL REFR</th><th>Remaining Days</th>
            <th>HF</th><th>Remaining Days</th>
            <th>FTS</th><th>Remaining Days</th>
            <th>EWIS</th><th>Remaining Days</th>
            <th>SMS</th><th>Remaining Days</th>
            <th>REGULATIONS</th><th>Remaining Days</th>
            <th>GCAA 145 TRG</th><th>Remaining Days</th>
            <th>ETOPS</th><th>Remaining Days</th>
            <th>RVSM</th><th>Remaining Days</th>
            <th>OPER PROCE TRG</th><th>Remaining Days</th>
            <th>REMARKS</th></tr>`);
                }
            var jeswin4 = () => {
                
                connection.query("SELECT * FROM new_schema.ame_continuation_trainings", function (err, resu) {
                    for(let k=0;k<length_of_rows_amecont;k++) 
                    {
                        if(v2==1){
                        res.write('<tr>');
                            if(resu[k].sr_no)
                            {
                            res.write('<td>');
                            res.write(resu[k].sr_no.toString());
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].name)
                            {
                            res.write('<td style="position:sticky; left:0; z-index:1; background-color:white;">');
                            res.write(resu[k].name);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].staff_no)
                            {
                            res.write('<td>');
                            res.write(resu[k].staff_no);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].A320_V2500)
                            {
                                res.write('<td>');
                                res.write(resu[k].A320_V2500);
                                res.write('</td>');
                                var color=getColor(resu[k].A320_V2500);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(resu[k].A320_CFM_LEAP_1A)
                            {
                                res.write('<td>');
                                res.write(resu[k].A320_CFM_LEAP_1A);
                                res.write('</td>');
                                var color=getColor(resu[k].A320_CFM_LEAP_1A);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(resu[k].A330_RR_T700)
                            {
                                res.write('<td>');
                                res.write(resu[k].A330_RR_T700);
                                res.write('</td>');
                                var color=getColor(resu[k].A330_RR_T700);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            
                            if(resu[k].A330_GE_CF6)
                            {
                                res.write('<td>');
                                res.write(resu[k].A330_GE_CF6);
                                res.write('</td>');
                                var color=getColor(resu[k].A330_GE_CF6);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }

                            if(resu[k].A330_NEO_RR_T7000)
                            {
                                res.write('<td>');
                                res.write(resu[k].A330_NEO_RR_T7000);
                                res.write('</td>');
                                var color=getColor(resu[k].A330_NEO_RR_T7000);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }

                            if(resu[k].A330_P_AND_W)
                            {
                                res.write('<td>');
                                res.write(resu[k].A330_P_AND_W);
                                res.write('</td>');
                                var color=getColor(resu[k].A330_P_AND_W);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(resu[k].A350_RR_T_XWB)
                            {
                                res.write('<td>');
                                res.write(resu[k].A350_RR_T_XWB);
                                res.write('</td>');
                                var color=getColor(resu[k].A350_RR_T_XWB);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(resu[k].B737_CFM56)
                            {
                                res.write('<td>');
                                res.write(resu[k].B737_CFM56);
                                res.write('</td>');
                                var color=getColor(resu[k].B737_CFM56);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(resu[k].B737_MAX_CFM_LEAP1B)
                            {
                                res.write('<td>');
                                res.write(resu[k].B737_MAX_CFM_LEAP1B);
                                res.write('</td>');
                                var color=getColor(resu[k].B737_MAX_CFM_LEAP1B);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(resu[k].B777_GE90)
                            {
                                res.write('<td>');
                                res.write(resu[k].B777_GE90);
                                res.write('</td>');
                                var color=getColor(resu[k].B777_GE90);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(resu[k].B787_GENX)
                            {
                                res.write('<td>');
                                res.write(resu[k].B787_GENX);
                                res.write('</td>');
                                var color=getColor(resu[k].B787_GENX);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(resu[k].ADDNL_REFR)
                            {
                                res.write('<td>');
                                res.write(resu[k].ADDNL_REFR);
                                res.write('</td>');
                                var color=getColor(resu[k].ADDNL_REFR);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(resu[k].HF)
                            {
                                res.write('<td>');
                                res.write(resu[k].HF);
                                res.write('</td>');
                                var color=getColor(resu[k].HF);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(resu[k].FTS)
                            {
                                res.write('<td>');
                                res.write(resu[k].FTS);
                                res.write('</td>');
                                var color=getColor(resu[k].FTS);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(resu[k].EWIS)
                            {
                                res.write('<td>');
                                res.write(resu[k].EWIS);
                                res.write('</td>');
                                var color=getColor(resu[k].EWIS);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(resu[k].SMS)
                            {
                                res.write('<td>');
                                res.write(resu[k].SMS);
                                res.write('</td>');
                                var color=getColor(resu[k].SMS);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(resu[k].REGULATIONS)
                            {
                                res.write('<td>');
                                res.write(resu[k].REGULATIONS);
                                res.write('</td>');
                                var color=getColor(resu[k].REGULATIONS);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(resu[k].GCAA)
                            {
                                res.write('<td>');
                                res.write(resu[k].GCAA);
                                res.write('</td>');
                                var color=getColor(resu[k].GCAA);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(resu[k].ETOPS)
                            {
                                res.write('<td>');
                                res.write(resu[k].ETOPS);
                                res.write('</td>');
                                var color=getColor(resu[k].ETOPS);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(resu[k].RVSM)
                            {
                                res.write('<td>');
                                res.write(resu[k].RVSM);
                                res.write('</td>');
                                var color=getColor(resu[k].RVSM);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(resu[k].operator_proc)
                            {
                                res.write('<td>');
                                res.write(resu[k].operator_proc);
                                res.write('</td>');
                                var color=getColor(resu[k].operator_proc);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(resu[k].REMARK)
                            {
                            res.write('<td>');
                            res.write(resu[k].REMARK);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                        res.write('</tr>');
                    }
                    }
                    res.write("</table>");
                    res.write("</div>");
                
                    fun2();
                });
            };
            jeswin4();
            var fun2 = () => {
                if(v3==1){
                res.write("<h2 style='background-color: #007bff; color:white; text-align: center';>AME AUTHORISATIONS</h2>");
                res.write(`
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.3/simplebar.min.css">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.3/simplebar.min.js"></script>
            <style>  
            .form-container {
                max-height: 400px;
                overflow-y: auto;
                scrollbar-width: none;
                -ms-overflow-style: none;
            }   
            .form-container::-webkit-scrollbar {
              width: 0.5em;
              background-color: white;
            } 
            .table-container {
                border-collapse: collapse;
                width: 100%;
                table-layout: auto;
                white-space: nowrap;
            }
            .table-container input {
                padding: 4px;
                text-align: left;
                margin: 4px;
                overflow: auto;
            }
            .form-container .simplebar-track:before {
              width: 5px; 
            }
            .form-container .simplebar-scrollbar:before {
              background-color: #999999;
            }
            </style>
                <div class="form-container" data-simplebar>
            <form action="/ame_authorisations" method="post">
             <div class="table-container">
             <input type="text" id="i1" name="SR_NO" placeholder="SR NO ">
             <input type="text" id="i2" name="NAME" placeholder="NAME">
             <input type="text" id="i3" name="STAFF_NO" placeholder="STAFF NO">
             <input type="text" id="i4" name="ciasl_authn_no" placeholder="CIASL AUTHN NO">
             <input type="text" id="i5" name="ciasl_authn_validity" placeholder="CIASL AUTHN VALIDITY">
             <input type="text" id="i6" name="FLY_DXB" placeholder="FLY DXB">
             <input type="text" id="i7" name="island_authn_validity" placeholder="ISLAND AUTHN VALIDITY">
             <input type="text" id="i8" name="oman_air" placeholder="OMAN AIR">
             <input type="text" id="i9" name="qatar" placeholder="QATAR">
             <input type="text" id="i9" name="sri_lanka" placeholder="SRI LANKA">
             <input type="text" id="i9" name="kuwait" placeholder="KUWAIT">
             <input type="text" id="i9" name="jazeera" placeholder="JAZEERA">
             <input type="text" id="i9" name="air_arabia" placeholder="AIR ARABIA">
             <input type="text" id="i9" name="ethihad" placeholder="ETHIHAD">
             <input type="text" id="i9" name="gulfair" placeholder="GULFAIR">
             <input type="text" id="i9" name="island" placeholder="ISLAND">
             <input type="text" id="i9" name="airasia_thai" placeholder="AIRASIA THAI">
             <input type="text" id="i9" name="scoot_tiger" placeholder="SCOOT TIGER">
             <input type="text" id="i9" name="FLY__dxb2" placeholder="FLY DXB"> 
             <input type="text" id="i10" name="REMARKS" placeholder="REMARKS">

                </div>
                <div></div>
                <button type="submit" class="btn btn-primary mb-3">SAVE</button>
            </form>
            </div>
                `);
                  res.write(`
                  <div class="container">
                  <table>
                  <tr>
                                  <form action="/delete_ame_author" method="post">
                                  <input type="text" name="button_data" placeholder="SR NO ">
                                  <button class="btn btn-outline-success" type="submit" style="border-color: #ffffff; background-color: #ff0000; color: #ffffff;">Delete</button>
                                  </form>`);
                                    res.write(`<button class="btn" style="background-color: red; margin-left:30%;" type="hidden">`);
                                    res.write(count_ame_authorisations_red.toString());
                                    res.write(`</button>`);
                                  
                                    res.write(`<button class="btn" style="background-color: orange;" type="hidden">`);
                                    res.write(count_ame_authorisations_orange.toString());
                                    res.write(`</button>`);
                                    
                                    res.write(`<button class="btn" style="background-color: yellow;" type="hidden">`);
                                    res.write(count_ame_authorisations.toString());
                                    res.write(`</button>`);
                                    
        
                                
        
                                    res.write(`
                                  <form action="/download_ame_authorisations" method="post">
                            <button style="float: right;" class="btn btn-outline-success" type="submit" style="border-color: #ffffff; background-color: #ff0000; color: #ffffff;">Download</button>
                            </form>
                                  </tr>
                                  </table>
                                  </div>
                                  `);
                    res.write(` <script>
                          function scrollHorizontally(event) {
                            const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
                            const scrollContainer = event.currentTarget;
                            scrollContainer.scrollLeft -= delta * 40; // Adjust the scrolling speed as needed
                            event.preventDefault();
                          }
                        </script>`);
            res.write("<div class='table-responsive container' onwheel='scrollHorizontally(event)'>");
                    res.write("<table class='table table-striped table-hover table-bordered'>");
                    res.write(`<tr><th>SR NO </th>
                    <th style="position:sticky; left:0; z-index:1; background-color:white;">Name</th>
                    <th>Staff No</th>
                    <th>Ciasl Authn No</th>
                    <th>Ciasl Authn Validity</th><th>Remaining Days</th>
                    <th>Fly Dxb</th><th>Remaining Days</th>
                    <th>Island Authn Validity</th><th>Remaining Days</th>
                    <th>Oman Air</th>
                    <th>Qatar</th>
                    <th>Sri Lanka</th>
                    <th>Kuwait</th>
                    <th>Jazeera</th>
                    <th>Air Arabia</th>
                    <th>Ethihad</th>
                    <th>Gulfair</th>
                    <th>Island</th>
                    <th>Airasia Thai</th>
                    <th>Scoot Tiger</th>
                    <th>Fly  Dxb</th>
                    <th>Remarks</th></tr>`);
                }
                    var jeswin4 = () => {
                        
                        connection.query("SELECT * FROM new_schema.ame_authorisations", function (err, resu) {
                            for(let k=0;k<length_of_rows_ameauth;k++) 
                            {
                                if(v3==1){
                                res.write('<tr>');
                                    if(resu[k].sr_no)
                                    {
                                    res.write('<td>');
                                    res.write(resu[k].sr_no.toString());
                                    res.write('</td>');
                                    }
                                    else
                                    {
                                        
                                        res.write('<td></td>');
                                    }
                                    if(resu[k].name)
                                    {
                                    res.write('<td style="position:sticky; left:0; z-index:1; background-color:white;">');
                                    res.write(resu[k].name);
                                    res.write('</td>');
                                    }
                                    else
                                    {
                                        
                                        res.write('<td></td>');
                                    }
                                    if(resu[k].staff_no)
                                    {
                                    res.write('<td>');
                                    res.write(resu[k].staff_no);
                                    res.write('</td>');
                                    }
                                    else
                                    {
                                        
                                        res.write('<td></td>');
                                    }
                                    if(resu[k].ciasl_authn_no)
                                    {
                                    res.write('<td>');
                                    res.write(resu[k].ciasl_authn_no);
                                    res.write('</td>');
                                    }
                                    else
                                    {
                                        
                                        res.write('<td></td>');
                                    }
                                    if(resu[k].ciasl_authn_validity)
                                    {
                                        res.write('<td>');
                                        res.write(resu[k].ciasl_authn_validity);
                                        res.write('</td>');
                                        var color=getColor(resu[k].ciasl_authn_validity);
                                        res.write('<td style="background-color: ' + color + ';">');
                                        res.write(days_difference.toString());
                                        res.write('</td>'); 
                                    }
                                    else
                                    {
                                        res.write('<td></td>');
                                        res.write('<td></td>');
                                    }
                                    if(resu[k].fly_dxb)
                                    {
                                        res.write('<td>');
                                        res.write(resu[k].fly_dxb);
                                        res.write('</td>');
                                        var color=getColor(resu[k].fly_dxb);
                                        res.write('<td style="background-color: ' + color + ';">');
                                        res.write(days_difference.toString());
                                        res.write('</td>'); 
                                    }
                                    else
                                    {
                                        res.write('<td></td>');
                                        res.write('<td></td>');
                                    }
                                    if(resu[k].island_authn_validity)
                                    {
                                        res.write('<td>');
                                        res.write(resu[k].island_authn_validity);
                                        res.write('</td>');
                                        var color=getColor(resu[k].island_authn_validity);
                                        res.write('<td style="background-color: ' + color + ';">');
                                        res.write(days_difference.toString());
                                        res.write('</td>'); 
                                    }
                                    else
                                    {
                                        res.write('<td></td>');
                                        res.write('<td></td>');
                                    }
                                    if(resu[k].oman_air)
                                    {
                                    res.write('<td>');
                                    res.write(resu[k].oman_air);
                                    res.write('</td>');
                                    }
                                    else
                                    {
                                        
                                        res.write('<td></td>');
                                    }
                                    if(resu[k].qatar)
                                    {
                                    res.write('<td>');
                                    res.write(resu[k].qatar);
                                    res.write('</td>');
                                    }
                                    else
                                    {
                                        
                                        res.write('<td></td>');
                                    }
                                    if(resu[k].sri_lanka)
                                    {
                                    res.write('<td>');
                                    res.write(resu[k].sri_lanka);
                                    res.write('</td>');
                                    }
                                    else
                                    {
                                        
                                        res.write('<td></td>');
                                    }
                                    if(resu[k].kuwait)
                                    {
                                    res.write('<td>');
                                    res.write(resu[k].kuwait);
                                    res.write('</td>');
                                    }
                                    else
                                    {
                                        
                                        res.write('<td></td>');
                                    }
                                    if(resu[k].jazeera)
                                    {
                                    res.write('<td>');
                                    res.write(resu[k].jazeera);
                                    res.write('</td>');
                                    }
                                    else
                                    {
                                        
                                        res.write('<td></td>');
                                    }
                                    if(resu[k].air_arabia)
                                    {
                                    res.write('<td>');
                                    res.write(resu[k].air_arabia);
                                    res.write('</td>');
                                    }
                                    else
                                    {
                                        
                                        res.write('<td></td>');
                                    }
                                    if(resu[k].ethihad)
                                    {
                                    res.write('<td>');
                                    res.write(resu[k].ethihad);
                                    res.write('</td>');
                                    }
                                    else
                                    {
                                        
                                        res.write('<td></td>');
                                    }
                                    if(resu[k].gulfair)
                                    {
                                    res.write('<td>');
                                    res.write(resu[k].gulfair);
                                    res.write('</td>');
                                    }
                                    else
                                    {
                                        
                                        res.write('<td></td>');
                                    }
                                    if(resu[k].island)
                                    {
                                    res.write('<td>');
                                    res.write(resu[k].island);
                                    res.write('</td>');
                                    }
                                    else
                                    {
                                        
                                        res.write('<td></td>');
                                    }
                                    if(resu[k].airasia_thai)
                                    {
                                    res.write('<td>');
                                    res.write(resu[k].airasia_thai);
                                    res.write('</td>');
                                    }
                                    else
                                    {
                                        
                                        res.write('<td></td>');
                                    }
                                    if(resu[k].scoot_tiger)
                                    {
                                    res.write('<td>');
                                    res.write(resu[k].scoot_tiger);
                                    res.write('</td>');
                                    }
                                    else
                                    {
                                        
                                        res.write('<td></td>');
                                    }
                                    if(resu[k].fly__dxb)
                                    {
                                    res.write('<td>');
                                    res.write(resu[k].fly__dxb);
                                    res.write('</td>');
                                    }
                                    else
                                    {
                                        
                                        res.write('<td></td>');
                                    }
                                    if(resu[k].remark)
                                    {
                                    res.write('<td>');
                                    res.write(resu[k].remark);
                                    res.write('</td>');
                                    }
                                    else
                                    {
                                        
                                        res.write('<td></td>');
                                    }
                                res.write('</tr>');
                                }
                            }
                            res.write("</table>");
                            res.write("</div>");
                            
                            fun3();
                        });
                    };
                    jeswin4();
                    
            };
            var fun3 = () =>{
                if(v4==1){
                res.write("<h2 style='background-color: #007bff; color:white; text-align: center';>AUTHORISATION COVERAGE</h2>");
                res.write(`
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.3/simplebar.min.css">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.3/simplebar.min.js"></script>
            <style>  
            .form-container {
                max-height: 400px;
                overflow-y: auto;
                scrollbar-width: none;
                -ms-overflow-style: none;
            }   
            .form-container::-webkit-scrollbar {
              width: 0.5em;
              background-color: white;
            } 
            .table-container {
                border-collapse: collapse;
                width: 100%;
                table-layout: auto;
                white-space: nowrap;
            }
            .table-container input {
                padding: 4px;
                text-align: left;
                margin: 4px;
                overflow: auto;
            }
            .form-container .simplebar-track:before {
              width: 5px; 
            }
            .form-container .simplebar-scrollbar:before {
              background-color: #999999;
            }
            </style>
            <div class="form-container" data-simplebar>
            <form action="/authorisation_coverage" method="post">
             <div class="table-container">
                <input type="text" id="i1" name="SR_NO" placeholder="SL NO">
                <input type="text" id="i2" name="NAME" placeholder="Name">
                <input type="text" id="i3" name="CAT" placeholder="Cat">
                <input type="text" id="i4" name="tiger_v2500" placeholder="tiger_v2500">
                <input type="text" id="i5" name="srilankan_v2500" placeholder="srilankan_v2500">
                <input type="text" id="i5" name="srilankan_cfm56" placeholder="srilankan_cfm56">
                <input type="text" id="i6" name="srilankan_cfmleap" placeholder="srilankan_cfmleap">
                <input type="text" id="i7" name="srilankan_t700" placeholder="srilankan_t700">
                <input type="text" id="i8" name="etihad_v2500" placeholder="etihad_v2500">
                <input type="text" id="i9" name="etihad_t700" placeholder="etihad_t700">
                <input type="text" id="i9" name="etihad_genx" placeholder="etihad_genx">
                <input type="text" id="i10" name="arabia_cfm56" placeholder="arabia_cfm56">
                <input type="text" id="i1" name="arabia_cfmleap" placeholder="arabia_cfmleap">
                <input type="text" id="i2" name="qatar_v2500" placeholder="qatar_v2500">
                <input type="text" id="i3" name="qatar_cfm56" placeholder="qatar_cfm56">
                <input type="text" id="i4" name="qatar_gecf6" placeholder="qatar_gecf6">
                <input type="text" id="i5" name="qatar_genx" placeholder="qatar_genx">
                <input type="text" id="i5" name="qatar_trentxwb" placeholder="qatar_trentxwb">
                <input type="text" id="i6" name="kuwait_cfm56" placeholder="kuwait_cfm56">
                <input type="text" id="i7" name="kuwait_leap" placeholder="kuwait_leap">
                <input type="text" id="i8" name="kuwait_t700" placeholder="kuwait_t700">
                <input type="text" id="i9" name="kuwait_neo_t7000" placeholder="kuwait_neo_t7000">
                <input type="text" id="i9" name="kuwait_300er" placeholder="kuwait_300er">
                <input type="text" id="i10" name="jazeera_cfm56" placeholder="jazeera_cfm56">
                <input type="text" id="i1" name="jazeera_leap" placeholder="jazeera_leap">
                <input type="text" id="i2" name="thai_v2500" placeholder="thai_v2500">
                <input type="text" id="i3" name="thai_cfm56" placeholder="thai_cfm56">
                <input type="text" id="i4" name="gulf_cfm56" placeholder="gulf_cfm56">
                <input type="text" id="i5" name="gulf_v2500" placeholder="gulf_v2500">
                <input type="text" id="i5" name="gulf_neo" placeholder="gulf_neo">
                <input type="text" id="i6" name="oman_cfm56" placeholder="oman_cfm56">
                <input type="text" id="i7" name="oman_max" placeholder="oman_max">
                <input type="text" id="i8" name="oman_genx" placeholder="oman_genx">
                <input type="text" id="i9" name="oman_t700" placeholder="oman_t700">
                <input type="text" id="i9" name="dubai_ng" placeholder="dubai_ng">
                <input type="text" id="i10" name="maldives_cfm56" placeholder="maldives_cfm56">
                <input type="text" id="i7" name="india_v2500" placeholder="india_v2500">
                <input type="text" id="i8" name="india_cfm56" placeholder="india_cfm56">
                <input type="text" id="i9" name="india_cfm567b" placeholder="india_cfm567b">
                <input type="text" id="i9" name="easa_v2500" placeholder="easa_v2500">
                <input type="text" id="i10" name="easa_cfm56" placeholder="easa_cfm56">
                </div>
                <div></div>
                <button type="submit" class="btn btn-primary mb-3">SAVE</button>
            </form>
            </div>
            `);
            res.write(`
            <div class="container">
            <table>
            <tr>
                            <form action="/delete_author_cov" method="post">
                            <input type="text" name="button_data" placeholder="SR NO ">
                            <button class="btn btn-outline-success" type="submit" style="border-color: #ffffff; background-color: #ff0000; color: #ffffff;">Delete</button>
                            </form>
                            `);
                            res.write(`
                          <form action="/download_auth_coverage" method="post">
                            <button style="float: right;" class="btn btn-outline-success" type="submit" style="border-color: #ffffff; background-color: #ff0000; color: #ffffff;">Download</button>
                            </form>
                          </tr>
                          </table>
                          </div>
                          `);
                          res.write(` <script>
                          function scrollHorizontally(event) {
                            const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
                            const scrollContainer = event.currentTarget;
                            scrollContainer.scrollLeft -= delta * 40; // Adjust the scrolling speed as needed
                            event.preventDefault();
                          }
                        </script>`);
            res.write("<div class='table-responsive container' onwheel='scrollHorizontally(event)'>");
                
res.write(`
<table class='table table-striped table-hover table-bordered'>

<tr>
    <th rowspan="6">SL No</th>
    <th rowspan="6">NAME </th><th rowspan="6">CAT</th>
    <th>TR</th><th colspan="4">UL</th><th colspan="3">EY</th>
    <th colspan="2" rowspan="3">G9 (GCAA ) Air Arabia </th>
    <th colspan="5">QR</th><th colspan="5">KU</th><th colspan="2">J9</th>
    <th colspan="2">FD</th><th colspan="3">GF</th><th colspan="4">WY</th>
    <th rowspan="3">FZ(FLY DUBAI)</th><th rowspan="3">IASL Maldives</th>
    <th colspan="3" rowspan="3">DGCA(INDIA)</th><th colspan="2" rowspan="3">EASA</th>
</tr>
<tr>
    <th>CAAS</th><th colspan="4">(CAASL)</th><th colspan="3">(GCAA)</th>
    <th colspan="5">(QCAA)</th><th colspan="5">(KW- DGCA)</th>
    <th colspan="2">(KW-DGCA)</th><th colspan="2">(CAAT)</th>
    <th colspan="3">(BCAA)</th><th colspan="4">CAA(OMAN)</th>
</tr>
<tr>
    <th>Tiger </th><th colspan="4">Srilankan</th><th colspan="3">Etihad </th>
    <th colspan="5">Qatar Airways</th><th colspan="5">Kuwait</th>
    <th colspan="2">Jazeera </th><th colspan="2">Thai Air Asia</th>
    <th colspan="3">Gulf Air </th><th colspan="4">OMAN AIR </th>
</tr>
<tr>
    <th>A319/</th><th>A320</th><th>A320</th><th>A320/21</th><th>A330</th>
    <th>A320/21</th><th>A330</th><th>B787</th><th rowspan="3">A320 CFM 56</th>
    <th rowspan="3">A321 CFM LEAP</th><th>A320</th><th>A320</th><th>A330</th>
    <th>B787</th><th rowspan="3">A350 Trent XWB</th><th>A320 </th><th>A320</th>
    <th rowspan="3">A330 T700</th><th rowspan="3">A330 NEO T7000</th>
    <th rowspan="3">B777-300 ER</th><th rowspan="3">A320 CFM 56</th><th>A320</th>
    <th>A320</th><th>A320</th><th>A320/ A321</th><th>A320/A321</th>
    <th rowspan="3">A320/A321 NEO CFM LEAP 1A </th><th>B737</th><th>B737</th>
    <th>B787</th><th>A330</th><th rowspan="3">B737-NG</th><th rowspan="3">A320/ A321 CFM 56</th>
    <th>A320</th><th>A320</th><th rowspan="3">B737 CFM 56-7B</th><th>A320</th><th>A320</th>
</tr>
<tr>    
    <th>A320</th><th>SERIES</th><th>SERIES</th><th rowspan="2">CFM LEAP</th>
    <th rowspan="2">T700</th><th rowspan="2">V2500</th><th rowspan="2">T700</th>
    <th rowspan="2">Genx</th><th>SERIES</th><th rowspan="2">CFM 56</th>
    <th rowspan="2">GE CF6</th><th rowspan="2">Genx</th><th>SERIES</th><th>SERIES</th>
    <th>SERIES</th><th>SERIES</th><th>SERIES</th><th rowspan="2">CFM 56</th>
    <th rowspan="2">V2500</th><th rowspan="2">CFM 56</th><th rowspan="2">MAX</th>
    <th rowspan="2">GENX</th><th rowspan="2">T700</th><th>SERIES</th><th>SERIES</th>
    <th>SERIES</th><th>SERIES</th>
</tr>
<tr>    
    <th>V2500</th><th>V2500</th><th>CFM 56</th><th>V2500</th><th>CFM 56</th>
    <th>LEAP</th><th>LEAP</th><th>V2500</th><th>CFM 56</th><th>V2500</th>
    <th>CFM 56</th><th>V2500</th><th>CFM 56</th>
</tr>
                `);
                }
                var jenbros = () => {
                    connection.query("SELECT * FROM new_schema.authorisation_coverage", function (err, resu) {
                        for(let k=0;k<length_of_rows_authorisation_cov;k++) 
                        {
                            if(v4==1){
                            res.write('<tr>');
                                if(resu[k].sl_no)
                                {
                                res.write('<td>');
                                res.write(resu[k].sl_no.toString());
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].name)
                                {
                                res.write('<td style="position:sticky; left:0; z-index:1; background-color:white;">');
                                res.write(resu[k].name);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].cat)
                                {
                                res.write('<td>');
                                res.write(resu[k].cat);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].tiger_v2500=='X')
                                {
                                res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].tiger_v2500);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].srilankan_v2500=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].srilankan_v2500);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].srilankan_cfm56=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].srilankan_cfm56);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].srilankan_cfmleap=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].srilankan_cfmleap);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].srilankan_t700=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].srilankan_t700);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].etihad_v2500=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].etihad_v2500);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].etihad_t700=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].etihad_t700);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].etihad_genx=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].etihad_genx);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].arabia_cfm56=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].arabia_cfm56);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].arabia_cfmleap=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].arabia_cfmleap);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].qatar_v2500=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].qatar_v2500);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].qatar_cfm56=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].qatar_cfm56);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].qatar_gecf6=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].qatar_gecf6);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].qatar_genx=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].qatar_genx);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].qatar_trentxwb=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].qatar_trentxwb);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].kuwait_cfm56=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].kuwait_cfm56);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].kuwait_leap=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].kuwait_leap);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].kuwait_t700=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].kuwait_t700);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].kuwait_neo_t7000=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].kuwait_neo_t7000);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].kuwait_300er=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].kuwait_300er);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].jazeera_cfm56=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].jazeera_cfm56);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].jazeera_leap=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].jazeera_leap);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].thai_v2500=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].thai_v2500);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].thai_cfm56=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].thai_cfm56);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].gulf_cfm56=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].gulf_cfm56);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].gulf_v2500=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].gulf_v2500);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].gulf_neo=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].gulf_neo);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].oman_cfm56=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].oman_cfm56);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].oman_max=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].oman_max);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }   
                                if(resu[k].oman_genx=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].oman_genx);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }   
                                if(resu[k].oman_t700=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].oman_t700);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }  
                                if(resu[k].dubai_ng=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].dubai_ng);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }   
                                if(resu[k].maldives_cfm56=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].maldives_cfm56);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }   
                                if(resu[k].india_v2500=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].india_v2500);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }   
                                if(resu[k].india_cfm56=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].india_cfm56);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].india_cfm567b=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].india_cfm567b);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].easa_v2500=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].easa_v2500);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].easa_cfm56=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].easa_cfm56);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                            res.write('</tr>');
                            }
                        }
                        res.write("</table>");
                        res.write("</div>");
                        
                        res.end();
                    });
                };
                jenbros();
            };
        };
        }
    });
    
});
app.get('/TOOLS.html',basicauth,function(req,res){
    fs.readFile("TOOLS.html", function (err, pgResp){
        if (err) {
            res.writeHead(404);
            res.write('Contents you are looking are Not Found');
        } else {
            res.write(pgResp);
            if(v12==1){
            res.write("<h2 style='background-color: #007bff; color:white; text-align: center';>Tools And Equipment Calibration</h2>");

            res.write(`
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.3/simplebar.min.css">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.3/simplebar.min.js"></script>
            <style>  
            .form-container {
                max-height: 400px;
                overflow-y: auto;
                scrollbar-width: none;
                -ms-overflow-style: none;
            }   
            .form-container::-webkit-scrollbar {
              width: 0.5em;
              background-color: white;
            } 
            .table-container {
                border-collapse: collapse;
                width: 100%;
                table-layout: auto;
                white-space: nowrap;
            }
            .table-container input {
                padding: 4px;
                text-align: left;
                margin: 4px;
                overflow: auto;
            }
            .form-container .simplebar-track:before {
              width: 5px; 
            }
            .form-container .simplebar-scrollbar:before {
              background-color: #999999;
            }
            </style>
            <div class="form-container" data-simplebar>
            <form action="/tools_and_equipment_calibration" method="post">
             <div class="table-container">
              <input type="text" id="i1" name="SR_NO1" placeholder="SR NO ">
                <input type="text" id="i2" name="NOMENCLATURE" placeholder="Nomenclature">
                <input type="text" id="i3" name="RANG" placeholder="Range">
                <input type="text" id="i4" name="PART_NO" placeholder="Part No">
                <input type="text" id="i5" name="SER_NO" placeholder="Ser No">
                <input type="text" id="i6" name="CIASL_ID_NO" placeholder="Ciasl id">
                <input type="text" id="i7" name="CALIBERATION_DATE" placeholder="Calibration Date">
                <input type="text" id="i8" name="CALIBERATION_DUE_DATE" placeholder="Calibration Due Date">
                <input type="text" id="i9" name="CALIBERATION_DONE_BY_ORGN" placeholder="calibration done by organisation">
                <input type="text" id="i10" name="REMARKS" placeholder="REMARKS">

                </div>
                <div></div>
                <button type="submit" class="btn btn-primary mb-3">SAVE</button>
            </form>
            </div>
            `);
          res.write(`
          <div class="container">
          <table>
          <tr>
                          <form action="/delete_tools" method="post">
                          <input type="text" name="button_data" placeholder="SR NO ">
                          <button class="btn btn-outline-success" type="submit" style="border-color: #ffffff; background-color: #ff0000; color: #ffffff;">Delete</button>
                          </form>`);
                          res.write(`<button class="btn" style="background-color: red; margin-left:30%;" type="hidden">`);
                          res.write(count_tools_red.toString());
                          res.write(`</button>`);
                          res.write(`<button class="btn" style="background-color: orange;" type="hidden">`);
                          res.write(count_tools_orange.toString());
                          res.write(`</button>`);
                          res.write(`<button class="btn" style="background-color: yellow;" type="hidden">`);
                          res.write(count_tools.toString());
                          res.write(`</button>`);
                            res.write(`
                          <form action="/download_tools" method="post">
                            <button style="float: right;" class="btn btn-outline-success" type="submit" style="border-color: #ffffff; background-color: #ff0000; color: #ffffff;">Download</button>
                            </form>
                          </tr>
                          </table>
                          </div>
                          `);
            res.write(` <script>
                          function scrollHorizontally(event) {
                            const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
                            const scrollContainer = event.currentTarget;
                            scrollContainer.scrollLeft -= delta * 40; // Adjust the scrolling speed as needed
                            event.preventDefault();
                          }
                        </script>`);
            res.write("<div class='table-responsive container' onwheel='scrollHorizontally(event)'>");
            res.write("<table class='table table-striped table-hover table-bordered'>");
            res.write("<tr><th>SR NO </th><th style=`position:sticky; left:0; z-index:1; background-color:white;`>Nomenclature</th><th>Range</th><th>Part No</th><th>Ser No</th><th>Ciasl Id No</th><th>Calibration Date</th><th>Calibration Due Date</th><th>Remaining Days</th><th>Calibration Done By Orgn</th><th>Remarks</th></tr>");
            }
            var jeswin1 = () => {
                
                connection.query("SELECT * FROM new_schema.tools_and_equipment_calibration", function (error, result) {
                    for(let i=0;i<length_of_rows_tools;i++) 
                    {
                        if(v12==1){
                        res.write('<tr>');
                            if(result[i].sr_no)
                            {
                            res.write('<td>');
                            res.write(result[i].sr_no.toString());
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].nomenclature)
                            {
                            res.write('<td style="position:sticky; left:0; z-index:1; background-color:white;">');
                            res.write(result[i].nomenclature);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].rang)
                            {
                            res.write('<td>');
                            res.write(result[i].rang);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].part_no)
                            {
                            res.write('<td>');
                            res.write(result[i].part_no);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].ser_no)
                            {
                            res.write('<td>');
                            res.write(result[i].ser_no);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].ciasl_id_no)
                            {
                            res.write('<td>');
                            res.write(result[i].ciasl_id_no);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].caliberation_date)
                            {
                            res.write('<td>');
                            res.write(result[i].caliberation_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].caliberation_due_date)
                            {
                            res.write('<td>');
                            res.write(result[i].caliberation_due_date);
                            res.write('</td>');
                            var color=getColor(result[i].caliberation_due_date);
                            res.write('<td style="background-color: ' + color + ';">');
                            res.write(days_difference.toString());
                            res.write('</td>');
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[i].caliberation_done_by_orgn)
                            {
                            res.write('<td>');
                            res.write(result[i].caliberation_done_by_orgn);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].remarks)
                            {
                            res.write('<td>');
                            res.write(result[i].remarks);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                        res.write('</tr>');
                        }
                    }
                    res.write("</table>");
                    res.write("</div>");
                    res.end();
                });
            };
            jeswin1();
        }
    });
    

});
app.get('/AUDITOR.html',basicauth,function(req,res){
    fs.readFile("AUDITOR.html", function (err, pgResp){
        if (err) {
            res.writeHead(404);
            res.write('Contents you are looking are Not Found');
        } else {
            res.write(pgResp);
            if(v6==1){
            res.write("<h2 style='background-color: #007bff; color:white; text-align: center';>REGULATOR AUDIT</h2>");

            res.write(`
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.3/simplebar.min.css">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.3/simplebar.min.js"></script>
            <style>  
            .form-container {
                max-height: 400px;
                overflow-y: auto;
                scrollbar-width: none;
                -ms-overflow-style: none;
            }   
            .form-container::-webkit-scrollbar {
              width: 0.5em;
              background-color: white;
            } 
            .table-container {
                border-collapse: collapse;
                width: 100%;
                table-layout: auto;
                white-space: nowrap;
            }
            .table-container input {
                padding: 4px;
                text-align: left;
                margin: 4px;
                overflow: auto;
            }
            .form-container .simplebar-track:before {
              width: 5px; 
            }
            .form-container .simplebar-scrollbar:before {
              background-color: #999999;
            }
            </style>
            <div class="form-container" data-simplebar>
            <form action="/regular_audit" method="post">
             <div class="table-container">
                        <input type="text" id="i1" name="SR_NO2" placeholder="SR NO ">
                        <input type="text" id="i2" name="REGULATOR" placeholder="Regulator">
                        <input type="text" id="i3" name="AUD_DATE" placeholder="Audit Date">
                        <input type="text" id="i4" name="NO_OF_FINDINGS" placeholder="No of findings">
                        <input type="text" id="i5" name="NO_OF_OBSERV" placeholder="No Of Observations">
                        <input type="text" id="i6" name="CAP_DUE_DATE" placeholder="Cap Due Date">
                        <input type="text" id="i7" name="CAP_SUBMT_DATE" placeholder="Cap Submitted Date">
                        <input type="text" id="i8" name="CA_submit_due_date" placeholder="Ca Due Date">
                        <input type="text" id="i9" name="CA_SUBMT_DATE" placeholder="Ca Submitted Date">
                        <input type="text" id="i9" name="Audit_clos" placeholder="Audit Closure Date">
                        <input type="text" id="i10" name="REMARKS" placeholder="REMARKS">
                </div>
                <div></div>
                <button type="submit" class="btn btn-primary mb-3">SAVE</button>
            </form>
            </div>
            `);
          res.write(`
          <div class="container">
          <table>
          <tr>

          <form action="/delete_regular_audit" method="post">
          <input type="text" name="button_data" placeholder="SR NO ">
          <button class="btn btn-outline-success" type="submit" style="border-color: #ffffff; background-color: #ff0000; color: #ffffff;">Delete</button>
          </form>`);
          
              res.write(`<button class="btn" style="background-color: red; margin-left:30%;" type="hidden">`);
                          res.write(count_regular_audit_red.toString());
                          res.write(`</button>`);
                          
                                res.write(`<button class="btn" style="background-color: orange;" type="hidden">`);
                            res.write(count_regular_audit_orange.toString());
                            res.write(`</button>`);
                            
                            res.write(`<button class="btn" style="background-color: yellow;" type="hidden">`);
                            res.write(count_regular_audit.toString());
                            res.write(`</button>`);
                            

                        

                            res.write(`
                          <form action="/download_regular_audit" method="post">
                            <button style="float: right;" class="btn btn-outline-success" type="submit" style="border-color: #ffffff; background-color: #ff0000; color: #ffffff;">Download</button>
                            </form>
                          </tr>
                          </table>
                          </div>
                          `);
            res.write(` <script>
                          function scrollHorizontally(event) {
                            const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
                            const scrollContainer = event.currentTarget;
                            scrollContainer.scrollLeft -= delta * 40; // Adjust the scrolling speed as needed
                            event.preventDefault();
                          }
                        </script>`);
            res.write("<div class='table-responsive container' onwheel='scrollHorizontally(event)'>");
            res.write("<table class='table table-striped table-hover table-bordered'>");
            res.write("<tr><th>SR NO </th><th style=`position:sticky; left:0; z-index:1; background-color:white;`>Regulator</th><th>Audit Date</th><th>No Of Findings</th><th>No Of Observations</th><th>CAP Due Date</th><th>Remaining days</th><th>CAP Submitted Date</th><th>CA Due Date</th><th>Remaining days</th><th>CA Submitted Date</th><th>Audit Closure Date</th><th>Remarks</th></tr>");
            }
            var jeswin3 = () => {
                
                connection.query("SELECT * FROM new_schema.regular_audit", function (error, result) {
                    for(let i=0;i<length_of_rows_reg_audit;i++) 
                    {
                        if(v6==1){
                        res.write('<tr>');
                            if(result[i].sr_no)
                            {
                            res.write('<td>');
                            res.write(result[i].sr_no.toString());
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].regulator)
                            {
                            res.write('<td style="position:sticky; left:0; z-index:1; background-color:white;">');
                            res.write(result[i].regulator);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].audit_date)
                            {
                            res.write('<td>');
                            res.write(result[i].audit_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].no_of_findings)
                            {
                            res.write('<td>');
                            res.write(result[i].no_of_findings);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].no_of_observations)
                            {
                            res.write('<td>');
                            res.write(result[i].no_of_observations);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].cap_due_date)
                            {
                                res.write('<td>');
                                res.write(result[i].cap_due_date);
                                res.write('</td>');
                                var color=getColor(result[i].cap_due_date);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[i].cap_submitted_date)
                            {
                            res.write('<td>');
                            res.write(result[i].cap_submitted_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].ca_submit_due_date)
                            {
                                res.write('<td>');
                                res.write(result[i].ca_submit_due_date);
                                res.write('</td>');
                                var color=getColor(result[i].ca_submit_due_date);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[i].ca_submitted_date)
                            {
                            res.write('<td>');
                            res.write(result[i].ca_submitted_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].audit_closure_date)
                            {
                            res.write('<td>');
                            res.write(result[i].audit_closure_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].remark)
                            {
                            res.write('<td>');
                            res.write(result[i].remark);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                        res.write('</tr>');
                    }
                }
                    res.write("</table>");
                    res.write("</div>");
                    
                    fun1();
                    
                });
            };
            jeswin3();
        }
        var fun1 = () =>
        {
            if(v7==1){
        res.write("<h2 style='background-color: #007bff; color:white; text-align: center';>AUDIT BY AIRLINE OPERATORS</h2>");
        res.write(`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.3/simplebar.min.css">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.3/simplebar.min.js"></script>
            <style>  
            .form-container {
                max-height: 400px;
                overflow-y: auto;
                scrollbar-width: none;
                -ms-overflow-style: none;
            }   
            .form-container::-webkit-scrollbar {
              width: 0.5em;
              background-color: white;
            } 
            .table-container {
                border-collapse: collapse;
                width: 100%;
                table-layout: auto;
                white-space: nowrap;
            }
            .table-container input {
                padding: 4px;
                text-align: left;
                margin: 4px;
                overflow: auto;
            }
            .form-container .simplebar-track:before {
              width: 5px; 
            }
            .form-container .simplebar-scrollbar:before {
              background-color: #999999;
            }
            </style>
        <div class="form-container" data-simplebar>
            <form action="/audit_by_airline_operators" method="post">
             <div class="table-container">
                   <input type="text" id="i1" name="SR_NO3" placeholder="SR NO ">
                   <input type="text" id="i2" name="OPERATOR" placeholder="Operator">
                   <input type="text" id="i3" name="AUDITDATE" placeholder="Audit Date">
                   <input type="text" id="i4" name="NO_OF_FINDINGS" placeholder="No Of Findings">
                   <input type="text" id="i5" name="NO_OF_OBSERV" placeholder="No Of Observations">
                   <input type="text" id="i6" name="CAP_DUE_DATE" placeholder="CAP Due Date">
                   <input type="text" id="i7" name="CAP_SUBMT_DATE" placeholder="CAP Submitted Date">
                   <input type="text" id="i8" name="CA_submit_due_date" placeholder="CA Due Date">
                   <input type="text" id="i9" name="CA_SUBMT_DATE" placeholder="CA Submitted Date">
                   <input type="text" id="i9" name="Audit_clos" placeholder="Audit Closure Date">
                   <input type="text" id="i10" name="REMARKS" placeholder="REMARKS">

                </div>
                <div></div>
                <button type="submit" class="btn btn-primary mb-3">SAVE</button>
            </form>
            </div>
        `);
          res.write(`
          <div class="container">
          <table>
          <tr>

                          <form action="/delete_audit_by_airline_operators" method="post">
                          <input type="text" name="button_data" placeholder="SR NO ">
                          <button class="btn btn-outline-success" type="submit" style="border-color: #ffffff; background-color: #ff0000; color: #ffffff;">Delete</button>
                          </form>`);
                        
                              res.write(`<button class="btn" style="background-color: red; margin-left:30%" type="hidden">`);
                          res.write(count_audit_by_airline_operators_red.toString());
                          res.write(`</button>`);
                          
                                res.write(`<button class="btn" style="background-color: orange;" type="hidden">`);
                            res.write(count_audit_by_airline_operators_orange.toString());
                            res.write(`</button>`);
                            
                            res.write(`<button class="btn" style="background-color: yellow;" type="hidden">`);
                            res.write(count_audit_by_airline_operators.toString());
                            res.write(`</button>`);
                            

                        

                            res.write(`
                          <form action="/download_audit_by_airline_operators" method="post">
                            <button style="float: right;" class="btn btn-outline-success" type="submit" style="border-color: #ffffff; background-color: #ff0000; color: #ffffff;">Download</button>
                            </form>
                          </tr>
                          </table>
                          </div>
                          `);
            res.write(` <script>
                          function scrollHorizontally(event) {
                            const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
                            const scrollContainer = event.currentTarget;
                            scrollContainer.scrollLeft -= delta * 40; // Adjust the scrolling speed as needed
                            event.preventDefault();
                          }
                        </script>`);
            res.write("<div class='table-responsive container' onwheel='scrollHorizontally(event)'>");
            res.write("<table class='table table-striped table-hover table-bordered'>");
            res.write("<tr><th>SR NO </th><th style=`position:sticky; left:0; z-index:1; background-color:white;`>Operator</th><th>Audit Date</th><th>No Of Findings</th><th>No Of Observations</th><th>CAP Due Date</th><th>Remaining Days</th><th>CAP Submitted Date</th><th>CA Due Date</th><th>Remaining Days</th><th>CA Submitted Date</th><th>Audit Closure Date</th><th>Remarks</th></tr>");
            }
            var jeswin4 = () => {
                
                connection.query("SELECT * FROM new_schema.audit_by_airline_operators", function (err, resu) {
                    for(let k=0;k<length_of_rows_audit_operator;k++) 
                    {
                        if(v7==1){
                        res.write('<tr>');
                            if(resu[k].sr_no)
                            {
                            res.write('<td>');
                            res.write(resu[k].sr_no.toString());
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].operator)
                            {
                            res.write('<td style="position:sticky; left:0; z-index:1; background-color:white;">');
                            res.write(resu[k].operator);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].audit_date)
                            {
                            res.write('<td>');
                            res.write(resu[k].audit_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].no_of_findings)
                            {
                            res.write('<td>');
                            res.write(resu[k].no_of_findings);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].no_of_obsrvns)
                            {
                            res.write('<td>');
                            res.write(resu[k].no_of_obsrvns);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].cap_due_date)
                            {
                                res.write('<td>');
                                res.write(resu[k].cap_due_date);
                                res.write('</td>');
                                var color=getColor(resu[k].cap_due_date);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(resu[k].cap_submitted_date)
                            {
                            res.write('<td>');
                            res.write(resu[k].cap_submitted_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].cap_submit_due_date)
                            {
                                res.write('<td>');
                                res.write(resu[k].cap_submit_due_date);
                                res.write('</td>');
                                var color=getColor(resu[k].cap_submit_due_date);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(resu[k].ca_submitted_date)
                            {
                            res.write('<td>');
                            res.write(resu[k].ca_submitted_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].audit_closure_date)
                            {
                            res.write('<td>');
                            res.write(resu[k].audit_closure_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].remark)
                            {
                            res.write('<td>');
                            res.write(resu[k].remark);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                        res.write('</tr>');
                    }
                }
                    res.write("</table>");
                    res.write("</div>");
                    
                    fun2();
                });
            };
            jeswin4();
            var fun2 = () =>{
                if(v8==1){
                res.write("<h2 style='background-color: #007bff; color:white; text-align: center';>QUALITY AUDIT-QUALITY DIVISION</h2>");
        res.write(`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.3/simplebar.min.css">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.3/simplebar.min.js"></script>
            <style>  
            .form-container {
                max-height: 400px;
                overflow-y: auto;
                scrollbar-width: none;
                -ms-overflow-style: none;
            }   
            .form-container::-webkit-scrollbar {
              width: 0.5em;
              background-color: white;
            } 
            .table-container {
                border-collapse: collapse;
                width: 100%;
                table-layout: auto;
                white-space: nowrap;
            }
            .table-container input {
                padding: 4px;
                text-align: left;
                margin: 4px;
                overflow: auto;
            }
            .form-container .simplebar-track:before {
              width: 5px; 
            }
            .form-container .simplebar-scrollbar:before {
              background-color: #999999;
            }
            </style>
        <div class="form-container" data-simplebar>
        <form action="/quality_audit" method="post">
         <div class="table-container">
                  <input type="text" id="i1" name="SR_NO4" placeholder="SR NO ">
                  <input type="text" id="i2" name="NAME" placeholder="Auditor Name">
                  <input type="text" id="i3" name="AUDITDATE" placeholder="Audit Date">
                  <input type="text" id="i4" name="NO_OF_FINDINGS" placeholder="No Of Findings">
                  <input type="text" id="i5" name="NO_OF_OBSERV" placeholder="No Of Observations">
                  <input type="text" id="i6" name="CAP_DUE_DATE" placeholder="CAP Due Date">
                  <input type="text" id="i7" name="CAP_SUBMT_DATE" placeholder="CAP Submitted Date">
                  <input type="text" id="i8" name="CA_submit_due_date" placeholder="CA Submit Due Date">
                  <input type="text" id="i9" name="CA_SUBMT_DATE" placeholder="CA Submitted Date">
                  <input type="text" id="i9" name="Audit_clos" placeholder="Audit Closure Date">
                  <input type="text" id="i10" name="REMARKS" placeholder="REMARKS">

            </div>
            <div></div>
            <button type="submit" class="btn btn-primary mb-3">SAVE</button>
        </form>
        </div>`);
          res.write(`
          <div class="container">
          <table>
          <tr>
          <form action="/delete_quality_audit_quality_division" method="post">
          <input type="text" name="button_data" placeholder="SR NO ">
          <button class="btn btn-outline-success" type="submit" style="border-color: #ffffff; background-color: #ff0000; color: #ffffff;">Delete</button>
          </form>`);
         
              res.write(`<button class="btn" style="background-color: red; margin-left:30%;" type="hidden">`);
                          res.write(count_quality_audit_quality_division_red.toString());
                          res.write(`</button>`);
                          
                                res.write(`<button class="btn" style="background-color: orange;" type="hidden">`);
                            res.write(count_quality_audit_quality_division_orange.toString());
                            res.write(`</button>`);
                           
                            res.write(`<button class="btn" style="background-color: yellow;" type="hidden">`);
                            res.write(count_quality_audit_quality_division.toString());
                            res.write(`</button>`);
                            

                        

                            res.write(`
                          <form action="/download_quality_audit_quality_division" method="post">
                            <button style="float: right;" class="btn btn-outline-success" type="submit" style="border-color: #ffffff; background-color: #ff0000; color: #ffffff;">Download</button>
                            </form>
                          </tr>
                          </table>
                          </div>
                          `);
            res.write(` <script>
                          function scrollHorizontally(event) {
                            const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
                            const scrollContainer = event.currentTarget;
                            scrollContainer.scrollLeft -= delta * 40; // Adjust the scrolling speed as needed
                            event.preventDefault();
                          }
                        </script>`);
            res.write("<div class='table-responsive container' onwheel='scrollHorizontally(event)'>");
            res.write("<table class='table table-striped table-hover table-bordered'>");
            res.write("<tr><th>SR NO </th><th style=`position:sticky; left:0; z-index:1; background-color:white;`>Auditor Name</th><th>Audit Date</th><th>No Of Findings</th><th>No Of Observations</th><th>CAP Due Date</th><th>Remaining Days</th><th>CAP Submitted Date</th><th>CA Due Date</th><th>Remaining Days</th><th>CA Submitted Date</th><th>Audit Closure Date</th><th>Remarks</th></tr>");
                }
            var jeswin5 = () => {
                
                connection.query("SELECT * FROM new_schema.quality_audit", function (err, resu) {
                    for(let k=0;k<length_of_rows_quality_auditor;k++) 
                    {
                        if(v8==1){
                        res.write('<tr>');
                            if(resu[k].sr_no)
                            {
                            res.write('<td>');
                            res.write(resu[k].sr_no.toString());
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].auditor_name)
                            {
                            res.write('<td style="position:sticky; left:0; z-index:1; background-color:white;">');
                            res.write(resu[k].auditor_name);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].audit_date)
                            {
                            res.write('<td>');
                            res.write(resu[k].audit_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].no_of_findings)
                            {
                            res.write('<td>');
                            res.write(resu[k].no_of_findings);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].no_of_observations)
                            {
                            res.write('<td>');
                            res.write(resu[k].no_of_observations);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].cap_due_date)
                            {
                                res.write('<td>');
                                res.write(resu[k].cap_due_date);
                                res.write('</td>');
                                var color=getColor(resu[k].cap_due_date);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(resu[k].cap_submitted_date)
                            {
                            res.write('<td>');
                            res.write(resu[k].cap_submitted_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].ca_submit_due_date)
                            {
                                res.write('<td>');
                                res.write(resu[k].ca_submit_due_date);
                                res.write('</td>');
                                var color=getColor(resu[k].ca_submit_due_date);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(resu[k].ca_submitted_date)
                            {
                            res.write('<td>');
                            res.write(resu[k].ca_submitted_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].audit_closure_date)
                            {
                            res.write('<td>');
                            res.write(resu[k].audit_closure_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].remark)
                            {
                            res.write('<td>');
                            res.write(resu[k].remark);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                        res.write('</tr>');
                    }
                }
                    res.write("</table>");
                    res.write("</div>");
                    
                    fun3();
                });
            };
            jeswin5();
            var fun3 = () =>{
                if(v9==1){
                res.write("<h2 style='background-color: #007bff; color:white; text-align: center';>QUALITY AUDIT-LINE MAINTENANCE</h2>");
                res.write(`
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.3/simplebar.min.css">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.3/simplebar.min.js"></script>
            <style>  
            .form-container {
                max-height: 400px;
                overflow-y: auto;
                scrollbar-width: none;
                -ms-overflow-style: none;
            }   
            .form-container::-webkit-scrollbar {
              width: 0.5em;
              background-color: white;
            } 
            .table-container {
                border-collapse: collapse;
                width: 100%;
                table-layout: auto;
                white-space: nowrap;
            }
            .table-container input {
                padding: 4px;
                text-align: left;
                margin: 4px;
                overflow: auto;
            }
            .form-container .simplebar-track:before {
              width: 5px; 
            }
            .form-container .simplebar-scrollbar:before {
              background-color: #999999;
            }
            </style>
                <div class="form-container" data-simplebar>
            <form action="/line_maintenance" method="post">
             <div class="table-container">
                   <input type="text" id="i1" name="SR_NO5" placeholder="SR NO ">
                   <input type="text" id="i2" name="NAME" placeholder="Auditor Name">
                   <input type="text" id="i3" name="AUDITDATE" placeholder="Audit Date">
                   <input type="text" id="i3" name="AUDITTYPE" placeholder="Audit Type">
                   <input type="text" id="i4" name="NO_OF_FINDINGS" placeholder="No Of Findings">
                   <input type="text" id="i5" name="NO_OF_OBSERV" placeholder="No Of Observations">
                   <input type="text" id="i6" name="CAP_DUE_DATE" placeholder="CAP Due Date">
                   <input type="text" id="i7" name="CAP_SUBMT_DATE" placeholder="CAP Submitted Date">
                   <input type="text" id="i8" name="CA_submit_due_date" placeholder="CA Submit Due Date">
                   <input type="text" id="i9" name="CA_SUBMT_DATE" placeholder="CA Submitted Date">
                   <input type="text" id="i9" name="Audit_clos" placeholder="Audit Closure Date">
                   <input type="text" id="i10" name="REMARKS" placeholder="Remarks">

                </div>
                <div></div>
                <button type="submit" class="btn btn-primary mb-3">SAVE</button>
            </form>
            </div>
                `);
          res.write(`
          <div class="container">
          <table>
          <tr>
                          <form action="/delete_quality_audit_line_maintenance" method="post">
                          <input type="text" name="button_data" placeholder="SR NO ">
                          <button class="btn btn-outline-success" type="submit" style="border-color: #ffffff; background-color: #ff0000; color: #ffffff;">Delete</button>
                          </form>`);
                         
                              res.write(`<button class="btn" style="background-color: red; margin-left:30%" type="hidden">`);
                          res.write(count_line_maintenance_red.toString());
                          res.write(`</button>`);
                          
                           
                                res.write(`<button class="btn" style="background-color: orange;" type="hidden">`);
                            res.write(count_line_maintenance_orange.toString());
                            res.write(`</button>`);
                            
                            res.write(`<button class="btn" style="background-color: yellow;" type="hidden">`);
                            res.write(count_line_maintenance.toString());
                            res.write(`</button>`);
                            

                        

                            res.write(`
                          <form action="/download_quality_audit_line_maintainance" method="post">
                            <button style="float: right;" class="btn btn-outline-success" type="submit" style="border-color: #ffffff; background-color: #ff0000; color: #ffffff;">Download</button>
                            </form>
                          </tr>
                          </table>
                          </div>
                          `);
            res.write(` <script>
                          function scrollHorizontally(event) {
                            const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
                            const scrollContainer = event.currentTarget;
                            scrollContainer.scrollLeft -= delta * 40; // Adjust the scrolling speed as needed
                            event.preventDefault();
                          }
                        </script>`);
            res.write("<div class='table-responsive container' onwheel='scrollHorizontally(event)'>");
            res.write("<table class='table table-striped table-hover table-bordered'>");
            res.write("<tr><th>SR NO </th><th style=`position:sticky; left:0; z-index:1; background-color:white;`>Auditor Name</th><th>Audit Date</th><th>Audit Type</th><th>No Of Findings</th><th>No Of Observations</th><th>CAP Due Date</th><th>Remaining Days</th><th>CAP Submitted Date</th><th>CA Due Date</th><th>Remaining Days</th><th>CA Submitted Date</th><th>Audit Closure Date</th><th>Remarks</th></tr>");
                }
            var jeswin6 = () => {
                connection.query("SELECT * FROM new_schema.line_maintenance", function (err, resu) {
                    for(let k=0;k<length_of_rows_line_main;k++) 
                    {
                        if(v9==1){
                        res.write('<tr>');
                            if(resu[k].sr_no)
                            {
                            res.write('<td>');
                            res.write(resu[k].sr_no.toString());
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].auditor_name)
                            {
                            res.write('<td style="position:sticky; left:0; z-index:1; background-color:white;">');
                            res.write(resu[k].auditor_name);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].audit_date)
                            {
                            res.write('<td>');
                            res.write(resu[k].audit_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].audit_type)
                            {
                            res.write('<td>');
                            res.write(resu[k].audit_type);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].no_of_findings)
                            {
                            res.write('<td>');
                            res.write(resu[k].no_of_findings);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].no_of_observations)
                            {
                            res.write('<td>');
                            res.write(resu[k].no_of_observations);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].cap_due_date)
                            {
                                res.write('<td>');
                                res.write(resu[k].cap_due_date);
                                res.write('</td>');
                                var color=getColor(resu[k].cap_due_date);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(resu[k].cap_submitted_date)
                            {
                            res.write('<td>');
                            res.write(resu[k].cap_submitted_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].ca_submit_due_date)
                            {
                                res.write('<td>');
                                res.write(resu[k].ca_submit_due_date);
                                res.write('</td>');
                                var color=getColor(resu[k].ca_submit_due_date);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(resu[k].ca_submitted_date)
                            {
                            res.write('<td>');
                            res.write(resu[k].ca_submitted_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].audit_closure_date)
                            {
                            res.write('<td>');
                            res.write(resu[k].audit_closure_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].remark)
                            {
                            res.write('<td>');
                            res.write(resu[k].remark);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                        res.write('</tr>');
                    }
                }
                    res.write("</table>");
                    res.write("</div>");
                    
                    fun4();
                });
                
            };
        
            jeswin6();
            var fun4 = () =>{
                if(v10==1){
                res.write("<h2 style='background-color: #007bff; color:white; text-align: center';>AUDIT OF EXTERNAL AGENCIES BY CIASL AUDITORS</h2>");
                res.write(`
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.3/simplebar.min.css">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.3/simplebar.min.js"></script>
            <style>  
            .form-container {
                max-height: 400px;
                overflow-y: auto;
                scrollbar-width: none;
                -ms-overflow-style: none;
            }   
            .form-container::-webkit-scrollbar {
              width: 0.5em;
              background-color: white;
            } 
            .table-container {
                border-collapse: collapse;
                width: 100%;
                table-layout: auto;
                white-space: nowrap;
            }
            .table-container input {
                padding: 4px;
                text-align: left;
                margin: 4px;
                overflow: auto;
            }
            .form-container .simplebar-track:before {
              width: 5px; 
            }
            .form-container .simplebar-scrollbar:before {
              background-color: #999999;
            }
            </style>
                <div class="form-container" data-simplebar>
            <form action="/audit_of_external" method="post">
             <div class="table-container">
                  
                      <input type="text" id="i1" name="SR_NO5" placeholder="SR NO ">
                      <input type="text" id="i2" name="ORGZN" placeholder="Auditor Organization">
                      <input type="text" id="i2" name="NAME" placeholder="Auditor Name">
                      <input type="text" id="i3" name="AUDITDATE" placeholder="Audit Date">
                      <input type="text" id="i4" name="NO_OF_FINDINGS" placeholder="No Of Findings">
                      <input type="text" id="i5" name="NO_OF_OBSERV" placeholder="No Of Observations">
                      <input type="text" id="i6" name="CAP_received" placeholder="CAP Received Date">
                      <input type="text" id="i7" name="CAP_approved" placeholder="CAP Approved Date">
                      <input type="text" id="i8" name="CA_received" placeholder="CA Received Date">
                      <input type="text" id="i9" name="CA_approved" placeholder="CA Approved Date">
                      <input type="text" id="i9" name="Audit_clos" placeholder="Audit Closed Date">
                      <input type="text" id="i10" name="REMARKS" placeholder="Remarks">

                </div>
                <div></div>
                <button type="submit" class="btn btn-primary mb-3">SAVE</button>
            </form>
            </div>
                `);
          res.write(`
          <div class="container">
          <table>
          <tr>
                          <form action="/delete_audit_of_external_agencies" method="post">
                          <input type="text" name="button_data" placeholder="SR NO ">
                          <button class="btn btn-outline-success" type="submit" style="border-color: #ffffff; background-color: #ff0000; color: #ffffff;">Delete</button>
                          </form>
                          <form action="/download_audit_of_external_agencies" method="post">
                            <button style="float: right;" class="btn btn-outline-success" type="submit" style="border-color: #ffffff; background-color: #ff0000; color: #ffffff;">Download</button>
                            </form>
                          </tr>
                          </table>
                          </div>
                          `);
            res.write(` <script>
                          function scrollHorizontally(event) {
                            const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
                            const scrollContainer = event.currentTarget;
                            scrollContainer.scrollLeft -= delta * 40; // Adjust the scrolling speed as needed
                            event.preventDefault();
                          }
                        </script>`);
            res.write("<div class='table-responsive container' onwheel='scrollHorizontally(event)'>");
            res.write("<table class='table table-striped table-hover table-bordered'>");
            res.write("<tr><th>SR NO </th><th style=`position:sticky; left:0; z-index:1; background-color:white;`>Auditor Organization</th><th>Auditor Name</th><th>Audit Date</th><th>No Of Findings</th><th>No Of Observations</th><th>CAP Received Date</th><th>CAP APPROVED DATE</th><th>CA RECEIVED DATE</th><th>CA Approved Date</th><th>Audit Closure Date</th><th>Remarks</th></tr>");
                }
            var jeswin7 = () => {
                connection.query("SELECT * FROM new_schema.audit_of_external", function (err, resu) {
                    for(let k=0;k<length_of_rows_audit_of_external;k++) 
                    {
                        if(v10==1){
                        res.write('<tr>');
                            if(resu[k].sr_no)
                            {
                            res.write('<td>');
                            res.write(resu[k].sr_no.toString());
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].auditee_orgzn)
                            {
                            res.write('<td style="position:sticky; left:0; z-index:1; background-color:white;">');
                            res.write(resu[k].auditee_orgzn);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].auditor_name)
                            {
                            res.write('<td>');
                            res.write(resu[k].auditor_name);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].audit_date)
                            {
                            res.write('<td>');
                            res.write(resu[k].audit_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].no_of_findings)
                            {
                            res.write('<td>');
                            res.write(resu[k].no_of_findings);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].no_of_observations)
                            {
                            res.write('<td>');
                            res.write(resu[k].no_of_observations);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].cap_received_date)
                            {
                            res.write('<td>');
                            res.write(resu[k].cap_received_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].cap_approved_date)
                            {
                            res.write('<td>');
                            res.write(resu[k].cap_approved_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].ca_received_date)
                            {
                            res.write('<td>');
                            res.write(resu[k].ca_received_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].ca_approved_date)
                            {
                            res.write('<td>');
                            res.write(resu[k].ca_approved_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].audit_closed_date)
                            {
                            res.write('<td>');
                            res.write(resu[k].audit_closed_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].remark)
                            {
                            res.write('<td>');
                            res.write(resu[k].remark);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                        res.write('</tr>');
                    }
                }
                    res.write("</table>");
                    res.write("</div>");
                    
                    fun5();
                });
                
            };
            jeswin7();
            var fun5=()=>{
                if(v11==1){
                res.write("<h2 style='background-color: #007bff; color:white; text-align: center';>INTERNAL QUALITY AUDITORS</h2>");
                res.write(`
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.3/simplebar.min.css">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.3/simplebar.min.js"></script>
            <style>  
            .form-container {
                max-height: 400px;
                overflow-y: auto;
                scrollbar-width: none;
                -ms-overflow-style: none;
            }   
            .form-container::-webkit-scrollbar {
              width: 0.5em;
              background-color: white;
            } 
            .table-container {
                border-collapse: collapse;
                width: 100%;
                table-layout: auto;
                white-space: nowrap;
            }
            .table-container input {
                padding: 4px;
                text-align: left;
                margin: 4px;
                overflow: auto;
            }
            .form-container .simplebar-track:before {
              width: 5px; 
            }
            .form-container .simplebar-scrollbar:before {
              background-color: #999999;
            }
            </style>
                <div class="form-container" data-simplebar>
            <form action="/internal_quality_auditors" method="post">
             <div class="table-container">
                <input type="text"  id="i1" name="SR_NO" placeholder="SR NO ">
                <input type="text"  id="i2" name="NAME" placeholder="Auditor Name">
                <input type="text"  id="i3" name="AUTH_NO" placeholder="AUTH NO">
                <input type="text"  id="i4" name="AUTH_VALID_DATE" placeholder="AUTH VALID DATE">
                <input type="text"  id="i5" name="AUDITOR_INT_DATE" placeholder="AUDITOR INT DATE">
                <input type="text"  id="i6" name="REG_DONE_DATE" placeholder="REG DONE DATE">
                <input type="text"  id="i7" name="REG_DUE_DATE" placeholder="REG DUE DATE">
                <input type="text"  id="i8" name="HF_DONE_DATE" placeholder="HF DONE DATE">
                <input type="text"  id="i9" name="HF_DUE_DATE" placeholder="HF DUE DATE">
                <input type="text"  id="i9" name="FTS_DONE_DATE" placeholder="FTS DONE DATE">
                <input type="text"  id="i9" name="FTS_DUE_DATE" placeholder="FTS DUE DATE">
                <input type="text"  id="i9" name="EWIS_DONE_DATE" placeholder="FTS DONE DATE">
                <input type="text"  id="i9" name="EWIS_DUE_DATE" placeholder="FTS DUE DATE">
                <input type="text"  id="i9" name="SMS_DONE_DATE" placeholder="FTS DONE DATE">
                <input type="text"  id="i9" name="SMS_DUE_DATE" placeholder="FTS DUE DATE">
                <input type="text"  id="i10" name="REMARKS" placeholder="REMARKS">

                </div>
                <div></div>
                <button type="submit" class="btn btn-primary mb-3">SAVE</button>
            </form>
            </div>
                `);
          res.write(`
          <div class="container">
          <table>
          <tr>
                          <form action="/delete_internal_quality_auditors" method="post">
                          <input type="text" name="button_data" placeholder="SR NO ">
                          <button class="btn btn-outline-success" type="submit" style="border-color: #ffffff; background-color: #ff0000; color: #ffffff;">Delete</button>
                          </form>`);
                       
                          res.write(`<button class="btn" style="background-color: red; margin-left:30%;" type="hidden">`);
                          res.write(count_internal_quality_auditors_red.toString());
                          res.write(`</button>`);
                         
                                res.write(`<button class="btn" style="background-color: orange;" type="hidden">`);
                            res.write(count_internal_quality_auditors_orange.toString());
                            res.write(`</button>`);
                           
                            res.write(`<button class="btn" style="background-color: yellow;" type="hidden">`);
                            res.write(count_internal_quality_auditors.toString());
                            res.write(`</button>`);
                            

                        

                            res.write(`
                          <form action="/download_internal_auditors" method="post">
                            <button style="float: right;" class="btn btn-outline-success" type="submit" style="border-color: #ffffff; background-color: #ff0000; color: #ffffff;">Download</button>
                            </form>
                          </tr>
                          </table>
                          </div>
                          `);
            res.write(` <script>
                          function scrollHorizontally(event) {
                            const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
                            const scrollContainer = event.currentTarget;
                            scrollContainer.scrollLeft -= delta * 40; // Adjust the scrolling speed as needed
                            event.preventDefault();
                          }
                        </script>`);
            res.write("<div class='table-responsive container' onwheel='scrollHorizontally(event)'>");
            res.write("<table class='table table-striped table-hover table-bordered'>");
            res.write(`<tr>
            <th>SR NO </th>
            <th style="position:sticky; left:0; z-index:1; background-color:white;">Name</th>
            <th>Auth No</th>
            <th>Auth Valid Date</th>
            <th>Remaining Days</th>
            <th>Auditor Date Init</th>
            <th>Regulations Done Date</th>
            <th>Regulations Due Date</th>
            <th>Remaining Days</th>
            <th>HF Done Date</th>
            <th>HF Due Date</th>
            <th>Remaining Days</th>
            <th>FTS Done Date</th>
            <th>FTS Due Date</th>
            <th>Remaining Days</th>
            <th>EWIS Done Date</th>
            <th>EWIS Due Date</th>
            <th>Remaining Days</th>
            <th>SMS Done Date</th>
            <th>SMS Due Date</th>
            <th>Remaining Days</th>
            <th>Remark</th>
            </tr>`);
                }
            var jeswin8 = () => {
                connection.query("SELECT * FROM new_schema.internal_quality_auditors", function (err, resu) {
                    for(let k=0;k<length_of_rows_internal;k++) 
                    {
                        if(v11==1){
                        res.write('<tr>');
                            if(resu[k].sr_no)
                            {
                            res.write('<td>');
                            res.write(resu[k].sr_no.toString());
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].name)
                            {
                            res.write('<td style="position:sticky; left:0; z-index:1; background-color:white;">');
                            res.write(resu[k].name);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].auth_no)
                            {
                            res.write('<td>');
                            res.write(resu[k].auth_no);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].auth_validity_date)
                            {
                                res.write('<td>');
                                res.write(resu[k].auth_validity_date);
                                res.write('</td>');
                                var color=getColor(resu[k].auth_validity_date);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(resu[k].auditor_date_initial)
                            {
                            res.write('<td>');
                            res.write(resu[k].auditor_date_initial);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].regulations_done_date)
                            {
                            res.write('<td>');
                            res.write(resu[k].regulations_done_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].regulations_due_date)
                            {
                                res.write('<td>');
                                res.write(resu[k].regulations_due_date);
                                res.write('</td>');
                                var color=getColor(resu[k].regulations_due_date);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(resu[k].hf_done_date)
                            {
                            res.write('<td>');
                            res.write(resu[k].hf_done_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].hf_due_date)
                            {
                                res.write('<td>');
                                res.write(resu[k].hf_due_date);
                                res.write('</td>');
                                var color=getColor(resu[k].hf_due_date);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(resu[k].fts_done_date)
                            {
                            res.write('<td>');
                            res.write(resu[k].fts_done_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].fts_due_date)
                            {
                                res.write('<td>');
                                res.write(resu[k].fts_due_date);
                                res.write('</td>');
                                var color=getColor(resu[k].fts_due_date);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(resu[k].ewis_done_date)
                            {
                            res.write('<td>');
                            res.write(resu[k].ewis_done_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].ewis_due_date)
                            {
                                res.write('<td>');
                                res.write(resu[k].ewis_due_date);
                                res.write('</td>');
                                var color=getColor(resu[k].ewis_due_date);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(resu[k].sms_done_date)
                            {
                            res.write('<td>');
                            res.write(resu[k].sms_done_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].sms_due_date)
                            {
                                res.write('<td>');
                                res.write(resu[k].sms_due_date);
                                res.write('</td>');
                                var color=getColor(resu[k].sms_due_date);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(resu[k].remark)
                            {
                            res.write('<td>');
                            res.write(resu[k].remark);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                        res.write('</tr>');
                    }
                }
                    res.write("</table>");
                    res.write("</div>");
                    
                    res.end();
                });
            };
            jeswin8();
            };
            
        };
        };
    };
};
    });
    
});
app.get('/GSE.html',basicauth,function(req,res){
    fs.readFile("GSE.html", function (err, pgResp){
        if (err) {
            res.writeHead(404);
            res.write('Contents you are looking are Not Found');
        } else {
            res.write(pgResp);
            if(v14==1){
            res.write("<h2 style='background-color: #007bff; color:white; text-align: center';>GROUND SUPPORT EQPT MAINTENANCE</h2>");
            res.write(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.3/simplebar.min.css">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.3/simplebar.min.js"></script>
            <style>  
            .form-container {
                max-height: 400px;
                overflow-y: auto;
                scrollbar-width: none;
                -ms-overflow-style: none;
            }   
            .form-container::-webkit-scrollbar {
              width: 0.5em;
              background-color: white;
            } 
            .table-container {
                border-collapse: collapse;
                width: 100%;
                table-layout: auto;
                white-space: nowrap;
            }
            .table-container input {
                padding: 4px;
                text-align: left;
                margin: 4px;
                overflow: auto;
            }
            .form-container .simplebar-track:before {
              width: 5px; 
            }
            .form-container .simplebar-scrollbar:before {
              background-color: #999999;
            }
            </style>
            <div class="form-container" data-simplebar>
            <form action="/GSE" method="post">
             <div class="table-container">
                <input type="text" id="input1" name="SL_NO" placeholder="SL NO">
                <input type="text" id="input2" name="EQPT_NAME" placeholder="EQPT NAME">
                <input type="text" id="input3" name="EQPT_ID_NO" placeholder="EQPT ID NO">
                <input type="text" id="input4" name="TYPE_OF_CHECK" placeholder="TYPE OF CHECK">
                <input type="text" id="input5" name="LAST_CHECK" placeholder="LAST CHECK DATE">
                <input type="text" id="input6" name="NEXT_CHECK" placeholder="NEXT CHECK DUE DATE">
                </div>
                <div></div>
                <button type="submit" class="btn btn-primary mb-3">SAVE</button>
            </form>
            </div>
            `);
          res.write(`
            <div class="container">
            <table>
            <tr>
                            <form action="/delete_gse" method="post">
                            <input type="text" name="button_data" placeholder="SR NO ">
                            <button class="btn btn-outline-success" type="submit" style="border-color: #ffffff; background-color: #ff0000; color: #ffffff;">Delete</button>
                            </form>
                            `);
                        
                            res.write(`<button class="btn" style="background-color: red; margin-left:30%;" type="hidden">`);
                            res.write(count_gse_red.toString());
                          res.write(`</button>`);
                         
                                res.write(`<button class="btn" style="background-color: orange;" type="hidden">`);
                            res.write(count_gse_orange.toString());
                            res.write(`</button>`);
                        
                            res.write(`<button class="btn" style="background-color: yellow;" type="hidden">`);
                            res.write(count_gse.toString());
                            res.write(`</button>`);
                            
                        

                            res.write(`
                            
                            <form action="/download_gse" method="post">
                            <button style="float: right;" class="btn btn-outline-success" type="submit" style="border-color: #ffffff; background-color: #ff0000; color: #ffffff;">Download</button>
                            </form>
                            
            </tr>             
            <table>
            </div>
                            `);
            res.write(` <script>
                          function scrollHorizontally(event) {
                            const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
                            const scrollContainer = event.currentTarget;
                            scrollContainer.scrollLeft -= delta * 40; // Adjust the scrolling speed as needed
                            event.preventDefault();
                          }
                        </script>`);
            res.write("<div class='table-responsive container' onwheel='scrollHorizontally(event)'>");
            res.write("<table class='table table-striped table-hover table-bordered'>");
            res.write(`<tr><th>SR NO </th>
            <th style="position:sticky; left:0; z-index:1; background-color:white;">Eqpt Name</th>
            <th>Eqpt Id No</th>
            <th>Type Of Check</th>
            <th>Last Check Done Date</th>
            <th>Next Check Due Date</th>
            <th>Remaining Days</th>
            </tr>
            `);
            }
            var keerthi = () => {
                connection.query("SELECT * FROM new_schema.gse", function (error, result) {
                    for(let i=0;i<length_of_rows_gse;i++) 
                    {
                        if(v14==1){
                        res.write('<tr>');
                        if(result[i].sl_no)
                            {
                            res.write('<td>');
                            res.write(result[i].sl_no.toString());
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].eqpt_name)
                            {
                            res.write('<td style="position:sticky; left:0; z-index:1; background-color:white;">');
                            res.write(result[i].eqpt_name);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].eqpt_id_no)
                            {
                            res.write('<td>');
                            res.write(result[i].eqpt_id_no);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].type_of_check)
                            {
                            res.write('<td>');
                            res.write(result[i].type_of_check);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].last_check)
                            {
                            res.write('<td>');
                            res.write(result[i].last_check);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].next_check)
                            {
                                res.write('<td>');
                                res.write(result[i].next_check);
                                res.write('</td>');
                                var color=getColor(result[i].next_check);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>');
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                        res.write('</tr>');
                    }
                }
                    res.write("</table>");
                    res.write("</div>");
                    
                    res.end();
                });
            };
            keerthi();


        }
    });
});
app.get('/QUALITY.html',basicauth,function(req,res){
    fs.readFile("QUALITY.html", function (err, pgResp){
        if (err) {
            res.writeHead(404);
            res.write('Contents you are looking are Not Found');
        } else {
            res.write(pgResp);
            if(v15==1){
            res.write("<h2 style='background-color: #007bff; color:white; text-align: center';>REGULATOR APPROVAL TABLE</h2>");
            res.write(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.3/simplebar.min.css">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.3/simplebar.min.js"></script>
            <style>  
            .form-container {
                max-height: 400px;
                overflow-y: auto;
                scrollbar-width: none;
                -ms-overflow-style: none;
            }   
            .form-container::-webkit-scrollbar {
              width: 0.5em;
              background-color: white;
            } 
            .table-container {
                border-collapse: collapse;
                width: 100%;
                table-layout: auto;
                white-space: nowrap;
            }
            .table-container input {
                padding: 4px;
                text-align: left;
                margin: 4px;
                overflow: auto;
            }
            .form-container .simplebar-track:before {
              width: 5px; 
            }
            .form-container .simplebar-scrollbar:before {
              background-color: #999999;
            }
            </style>
            <div class="form-container" data-simplebar>
            <form action="/regulator_approval" method="post">
             <div class="table-container">
             <input type="text" id="i1" name="SL_NO1" placeholder="SR NO ">
             <input type="text" id="i2" name="REGULATOR" placeholder="Regulator">
             <input type="text" id="i3" name="AMO_APPROV_NO" placeholder="AMO Approval No">
             <input type="text" id="i4" name="INI_APPROV_DATE" placeholder="Initial Approval Date">
             <input type="text" id="i5" name="APPROV_VALID_DATE" placeholder="Approval Validity Date">
             <input type="text" id="i6" name="A1" placeholder="Scope Of Approval A1">
             <input type="text" id="i7" name="A2" placeholder="Scope Of Approval A2">
             <input type="text" id="i8" name="A3" placeholder="Scope Of Approval A3">
             <input type="text" id="i9" name="A4" placeholder="Scope Of Approval A4">
             <input type="text" id="i9" name="operators_under_reg" placeholder="Operators Under Regulator">
             <input type="text" id="i10" name="B1" placeholder="Certifying Staff B1">
             <input type="text" id="i10" name="B2" placeholder="Certifying Staff B2">

                </div>
                <div></div>
                <button type="submit" class="btn btn-primary mb-3">SAVE</button>
            </form>
            </div>
            `);     
          res.write(`
            <div class="container">
            <table>
            <tr>
                            <form action="/delete_reg_approv_table" method="post">
                            <input type="text" name="button_data" placeholder="SR NO ">
                            <button class="btn btn-outline-success" type="submit" style="border-color: #ffffff; background-color: #ff0000; color: #ffffff;">Delete</button>
                            </form>`);
                            
                            res.write(`<button class="btn" style="background-color: red; margin-left:30%;" type="hidden">`);
                            res.write(count_regulators_amo_approvals_red.toString());
                            res.write(`</button>`);
                           
                                  res.write(`<button class="btn" style="background-color: orange;" type="hidden">`);
                              res.write(count_regulators_amo_approvals_orange.toString());
                              res.write(`</button>`);
                              
                             
                              res.write(`<button class="btn" style="background-color: yellow;" type="hidden">`);
                              res.write(count_regulators_amo_approvals.toString());
                              res.write(`</button>`);
                              

                          
  
                              res.write(`
                            <form action="/download_regulator_approval_table" method="post">
                            <button style="float: right;" class="btn btn-outline-success" type="submit" style="border-color: #ffffff; background-color: #ff0000; color: #ffffff;">Download</button>
                            </form>
                            </tr>
                            </table>
                            </div>
                            `);
            res.write(` <script>
                          function scrollHorizontally(event) {
                            const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
                            const scrollContainer = event.currentTarget;
                            scrollContainer.scrollLeft -= delta * 40; // Adjust the scrolling speed as needed
                            event.preventDefault();
                          }
                        </script>`);
            res.write("<div class='table-responsive container' onwheel='scrollHorizontally(event)'>");
            res.write("<table class='table table-striped table-hover table-bordered'>");
            res.write(`
             <tr>
      <th rowspan="2">SR NO </th>
      <th rowspan="2" style="position:sticky; left:0; z-index:1; background-color:white;">Regulator</th>
      <th rowspan="2">AMO Approval No</th>
      <th rowspan="2">Initial Approval Date</th>
      <th rowspan="2">Approval Validity Date</th>
      <th rowspan="2">Remaining Days</th>
      <th colspan="4">Scope of Approval</th>
      <th rowspan="2">Operators Under the Regulator</th>
      <th rowspan="2">Certifying Staff B1</th>
      <th rowspan="2">Certifying Staff B2</th>
    </tr>
    <tr>
        <th>A1</th>
        <th>A2</th>
        <th>B1</th>
        <th>B2</th>
      </tr>
    <tr>
            `);
            }
            var kee = () => {
                
                connection.query("SELECT * FROM new_schema.regulators_amo_approvals", function (error, result) {
                    for(let i=0;i<length_of_rows_raa;i++) 
                    {
                        if(v15==1){
                        res.write('<tr>');
                            if(result[i].sl_no)
                            {
                            res.write('<td>');
                            res.write(result[i].sl_no.toString());
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].regulator)
                            {
                            res.write('<td style="position:sticky; left:0; z-index:1; background-color:white;">');
                            res.write(result[i].regulator);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].amo_approval_no)
                            {
                            res.write('<td>');
                            res.write(result[i].amo_approval_no);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].initial_approval_date)
                            {
                            res.write('<td>');
                            res.write(result[i].initial_approval_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].approval_validity_date)
                            {
                            res.write('<td>');
                            res.write(result[i].approval_validity_date);
                            res.write('</td>');
                            var color=getColor(result[i].approval_validity_date);
                            res.write('<td style="background-color: ' + color + ';">');
                            res.write(days_difference.toString());
                            res.write('</td>');
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            
                            if(result[i].scope_of_approval_a1)
                            {
                            res.write('<td>');
                            res.write(result[i].scope_of_approval_a1);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].scope_of_approval_a2)
                            {
                            res.write('<td>');
                            res.write(result[i].scope_of_approval_a2);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].scope_of_approval_a3)
                            {
                            res.write('<td>');
                            res.write(result[i].scope_of_approval_a3);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].scope_of_approval_a4)
                            {
                            res.write('<td>');
                            res.write(result[i].scope_of_approval_a4);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].operators_under_regulator)
                            {
                            res.write('<td>');
                            res.write(result[i].operators_under_regulator);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].staff_b1)
                            {
                            res.write('<td>');
                            res.write(result[i].staff_b1);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].staff_b2)
                            {
                            res.write('<td>');
                            res.write(result[i].staff_b2);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                        res.write('</tr>');
                    }
                }
                    res.write("</table>");
                    res.write("</div>");
                    
                    keerthi();
                });
            };
            kee();
        }
        var keerthi = () => {
            if(v16==1){
            res.write("<h2 style='background-color: #007bff; color:white; text-align: center';>OPERATORS</h2>");
            res.write(`
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.3/simplebar.min.css">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.3/simplebar.min.js"></script>
            <style>  
            .form-container {
                max-height: 400px;
                overflow-y: auto;
                scrollbar-width: none;
                -ms-overflow-style: none;
            }   
            .form-container::-webkit-scrollbar {
              width: 0.5em;
              background-color: white;
            } 
            .table-container {
                border-collapse: collapse;
                width: 100%;
                table-layout: auto;
                white-space: nowrap;
            }
            .table-container input {
                padding: 4px;
                text-align: left;
                margin: 4px;
                overflow: auto;
            }
            .form-container .simplebar-track:before {
              width: 5px; 
            }
            .form-container .simplebar-scrollbar:before {
              background-color: #999999;
            }
            </style>
            <div class="form-container" data-simplebar>
            <form action="/insert_operators" method="post">
             <div class="table-container">
                <input type="text" id="i1" name="SL_NO2" placeholder="SR NO ">
                <input type="text" id="i2" name="OPERATOR" placeholder="Operator">
                <input type="text" id="i3" name="OP_code" placeholder="Operator Code">
                <input type="text" id="i4" name="INI_AGREEE_DATE" placeholder="Initial Agreement Date">
                <input type="text" id="i5" name="AGREE_VALID_DATE" placeholder="Agreement Validity Date">

                </div>
                <div></div>
                <button type="submit" class="btn btn-primary mb-3">SAVE</button>
            </form>
            </div>
            `);     
          res.write(`
            <div class="container">
            <table>
            <tr>
                            <form action="/delete_operators" method="post">
                            <input type="text" name="button_data" placeholder="SR NO ">
                            <button class="btn btn-outline-success" type="submit" style="border-color: #ffffff; background-color: #ff0000; color: #ffffff;">Delete</button>
                            </form>`);
                            
                            res.write(`<button class="btn" style="background-color: red; margin-left:30%;" type="hidden">`);
                            res.write(count_operators_red.toString());
                            res.write(`</button>`);
                            
                                  res.write(`<button class="btn" style="background-color: orange;" type="hidden">`);
                              res.write(count_operators_orange.toString());
                              res.write(`</button>`);
                              
                             
                              res.write(`<button class="btn" style="background-color: yellow;" type="hidden">`);
                              res.write(count_operators.toString());
                              res.write(`</button>`);
                              

                          
  
                              res.write(`
                            <form action="/download_operators" method="post">
                            <button style="float: right;" class="btn btn-outline-success" type="submit" style="border-color: #ffffff; background-color: #ff0000; color: #ffffff;">Download</button>
                            </form>
                            </tr>
                            </table>
                            </div>
                            `);
            res.write(` <script>
                          function scrollHorizontally(event) {
                            const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
                            const scrollContainer = event.currentTarget;
                            scrollContainer.scrollLeft -= delta * 40; // Adjust the scrolling speed as needed
                            event.preventDefault();
                          }
                        </script>`);
            res.write("<div class='table-responsive container' onwheel='scrollHorizontally(event)'>");
            res.write("<table class='table table-striped table-hover table-bordered'>");
            res.write(`
            <tr>
            <th>SR NO </th>
            <th style="position:sticky; left:0; z-index:1; background-color:white;">Operator</th>
            <th>Operator Code</th>
            <th>Initial Agreement Date</th>
            <th>Agreement Validity Date</th>
            <th>Remaining Days</th>
            </tr>
            `);
            }
            var keert = () => {
                
                connection.query("SELECT * FROM new_schema.operators", function (error, result) {
                    for(let i=0;i<length_of_rows_operator;i++) 
                    {
                        if(v16==1){
                        res.write('<tr>');
                            if(result[i].sl_no)
                            {
                            res.write('<td>');
                            res.write(result[i].sl_no.toString());
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].operator)
                            {
                            res.write('<td style="position:sticky; left:0; z-index:1; background-color:white;">');
                            res.write(result[i].operator);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].op_code)
                            {
                            res.write('<td>');
                            res.write(result[i].op_code);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].ini_agree_date)
                            {
                            res.write('<td>');
                            res.write(result[i].ini_agree_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].agree_validity_date)
                            {
                            res.write('<td>');
                            res.write(result[i].agree_validity_date);
                            res.write('</td>');
                            var color=getColor(result[i].agree_validity_date);
                            res.write('<td style="background-color: ' + color + ';">');
                            res.write(days_difference.toString());
                            res.write('</td>');}
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            
                            
                            
                        res.write('</tr>');
                    }
                }
                    res.write("</table>");
                    res.write("</div>");
                    
                    res.end();
                });
            };
            keert();
        };
    });
});
app.get('/STORAGE.html',basicauth,function(req,res){
    fs.readFile("STORAGE.html", function (err, pgResp){
        if (err) {
            res.writeHead(404);
            res.write('Contents you are looking are Not Found');
        } else {
            res.write(pgResp);
            if(v17==1){
            res.write("<h2 style='background-color: #007bff; color:white; text-align: center';>STORAGE LIFE MONITORING</h2>");
            res.write(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.3/simplebar.min.css">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.3/simplebar.min.js"></script>
            <style>  
            .form-container {
                max-height: 400px;
                overflow-y: auto;
                scrollbar-width: none;
                -ms-overflow-style: none;
            }   
            .form-container::-webkit-scrollbar {
              width: 0.5em;
              background-color: white;
            } 
            .table-container {
                border-collapse: collapse;
                width: 100%;
                table-layout: auto;
                white-space: nowrap;
            }
            .table-container input {
                padding: 4px;
                text-align: left;
                margin: 4px;
                overflow: auto;
            }
            .form-container .simplebar-track:before {
              width: 5px; 
            }
            .form-container .simplebar-scrollbar:before {
              background-color: #999999;
            }
            </style>
            <div class="form-container" data-simplebar>
            <form action="/STORAGE" method="post">
             <div class="table-container">
                <input type="text" id="input1" name="SL_NO" placeholder="SR NO ">
                <input type="text" id="input2" name="NOMENCLATURE" placeholder="NOMENCLATURE">
                <input type="text" id="input3" name="PART_NO" placeholder="PART NO">
                <input type="text" id="input4" name="BATCH_NO" placeholder="BATCH NO">
                <input type="text" id="input5" name="STORAGE_LIFE_EXPIRY" placeholder="STORAGE LIFE EXPIRY">
                </div>
                <div></div>
                <button type="submit" class="btn btn-primary mb-3">SAVE</button>
            </form>
            </div>
            `);
          res.write(`
            <div class="container">
            <table>
            <tr>
                            <form action="/delete_storage" method="post">
                            <input type="text" name="button_data" placeholder="SR NO ">
                            <button class="btn btn-outline-success" type="submit" style="border-color: #ffffff; background-color: #ff0000; color: #ffffff;">Delete</button>
                            </form>
                            `);
                            res.write(`<button class="btn" style="background-color: red; margin-left:30%;" type="hidden">`);
                            res.write(count_storage_red.toString());
                            res.write(`</button>`);
                            res.write(`<button class="btn" style="background-color: orange;" type="hidden">`);
                            res.write(count_storage_orange.toString());
                            res.write(`</button>`);
                            res.write(`<button class="btn" style="background-color: yellow;" type="hidden">`);
                            res.write(count_storage.toString());
                            res.write(`</button>`);
                            

                        

                            res.write(`
                            
                            <form action="/download_storage" method="post">
                            <button style="float: right;" class="btn btn-outline-success" type="submit" style="border-color: #ffffff; background-color: #ff0000; color: #ffffff;">Download</button>
                            </form>
                            
            </tr>             
            <table>
            </div>
                            `);
            res.write(` <script>
                          function scrollHorizontally(event) {
                            const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
                            const scrollContainer = event.currentTarget;
                            scrollContainer.scrollLeft -= delta * 40; // Adjust the scrolling speed as needed
                            event.preventDefault();
                          }
                        </script>`);
            res.write("<div class='table-responsive container' onwheel='scrollHorizontally(event)'>");
            res.write("<table class='table table-striped table-hover table-bordered'>");
            res.write(`<tr><th>SR NO </th>
            <th style="position:sticky; left:0; z-index:1; background-color:white;">Nomenclature</th>
            <th>Part No</th>
            <th>Batch No</th>
            <th>Storage Life Expiry</th>
            <th>Remaining Days</th>
            </tr>
            `);
            }
            var keerthi = () => {
                connection.query("SELECT * FROM new_schema.storage_life_monitoring", function (error, result) {
                    for(let i=0;i<length_of_rows_storage;i++) 
                    {
                        if(v17==1){
                        res.write('<tr>');
                        if(result[i].sl_no)
                            {
                            res.write('<td>');
                            res.write(result[i].sl_no.toString());
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].nomenclature)
                            {
                            res.write('<td style="position:sticky; left:0; z-index:1; background-color:white;">');
                            res.write(result[i].nomenclature.toString());
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].part_no)
                            {
                            res.write('<td>');
                            res.write(result[i].part_no.toString());
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].batch_no)
                            {
                            res.write('<td>');
                            res.write(result[i].batch_no.toString());
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            
                            if(result[i].storage_life)
                            {
                                res.write('<td>');
                                res.write(result[i].storage_life);
                                res.write('</td>');
                                var color=getColor(result[i].storage_life);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>');
                                }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                        res.write('</tr>');
                    }
                }
                    res.write("</table>");
                    res.write("</div>");
                    
                    res.end();
                });
            };
            keerthi();
        }
    });
});
app.get('/TECHNICIAN.html',basicauth,function(req,res){
    fs.readFile("TECHNICIAN.html", function (err, pgResp){
        if (err) {
            res.writeHead(404);
            res.write('Contents you are looking are Not Found');
        } else {
            res.write(pgResp);
            if(v5==1){
            res.write("<h2 style='background-color: #007bff; color:white; text-align: center';>TECHNICIANS / STORE INSPECTOR/TECHNICAL ASST  CONTINUATION TRAININGS</h2>");

            res.write(`
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.3/simplebar.min.css">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.3/simplebar.min.js"></script>
            <style>  
            .form-container {
                max-height: 400px;
                overflow-y: auto;
                scrollbar-width: none;
                -ms-overflow-style: none;
            }   
            .form-container::-webkit-scrollbar {
              width: 0.5em;
              background-color: white;
            } 
            .table-container {
                border-collapse: collapse;
                width: 100%;
                table-layout: auto;
                white-space: nowrap;
            }
            .table-container input {
                padding: 4px;
                text-align: left;
                margin: 4px;
                overflow: auto;
            }
            .form-container .simplebar-track:before {
              width: 5px; 
            }
            .form-container .simplebar-scrollbar:before {
              background-color: #999999;
            }
            </style>
            <div class="form-container" data-simplebar>
            <form action="/technician_continuation_trainings" method="post">
             <div class="table-container">
                <input type="text" id="i1" name="SR_NO" placeholder="SR NO ">
                <input type="text" id="i2" name="NAME" placeholder="Name">
                <input type="text" id="i3" name="DESGN" placeholder="Desgn">
                <input type="text" id="i4" name="STAFF_NO" placeholder="Staff No">
                <input type="text" id="i5" name="FTS" placeholder="FTS">
                <input type="text" id="i5" name="HF" placeholder="HF">
                <input type="text" id="i6" name="EWIS" placeholder="EWIS">
                <input type="text" id="i7" name="SMS" placeholder="SMS">
                <input type="text" id="i8" name="IMPROC" placeholder="IM proc. moe & regln">
                <input type="text" id="i9" name="STPROC" placeholder="Store proc & esds">
                <input type="text" id="i9" name="DGR" placeholder="DGR">
                <input type="text" id="i10" name="REMARKS" placeholder="REMARKS">


                </div>
                <div></div>
                <button type="submit" class="btn btn-primary mb-3">SAVE</button>
            </form>
            </div>
            `);
            res.write(`
            <div class="container">
            <table>
            <tr>
                            <form action="/delete_tech_row" method="post">
                            <input type="text" name="button_data" placeholder="SR NO ">
                            <button class="btn btn-outline-success" type="submit" style="border-color: #ffffff; background-color: #ff0000; color: #ffffff;">Delete</button>
                            </form>`);
                            
                            res.write(`<button class="btn" style="background-color: red; margin-left:30%;" type="hidden">`);
                            res.write(count_technician_red.toString());
                            res.write(`</button>`);
                        
                                  res.write(`<button class="btn" style="background-color: orange;" type="hidden">`);
                              res.write(count_technician_orange.toString());
                              res.write(`</button>`);
                              
                              res.write(`<button class="btn" style="background-color: yellow;" type="hidden">`);
                              res.write(count_technician.toString());
                              res.write(`</button>`);
                              
  
                          
  
                              res.write(`
                            <form action="/download_techician" method="post">
                            <button style="float: right;" class="btn btn-outline-success" type="submit" style="border-color: #ffffff; background-color: #ff0000; color: #ffffff;">Download</button>
                            </form>
                            </tr>
                            </table>
                            </div>
                            `);
            res.write(` <script>
                          function scrollHorizontally(event) {
                            const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
                            const scrollContainer = event.currentTarget;
                            scrollContainer.scrollLeft -= delta * 40; // Adjust the scrolling speed as needed
                            event.preventDefault();
                          }
                        </script>`);
            res.write("<div class='table-responsive container' onwheel='scrollHorizontally(event)'>");
            res.write("<table class='table table-striped table-hover table-bordered'>");
            res.write("<tr><th>SR NO </th><th style=`position:sticky; left:0; z-index:1; background-color:white;`>Name</th><th>Desgn</th><th>Staff No</th><th>FTS</th><th>Remaining Days</th><th>HF</th><th>Remaining Days</th><th>EWIS</th><th>Remaining Days</th><th>SMS</th><th>Remaining Days</th><th>IM proc. moe & regln</th><th>Remaining Days</th><th>Store proc & Esds</th><th>Remaining Days</th><th>DGR</th><th>Remaining Days</th><th>Remarks</th></tr>");
            }
            var jeswin2 = () => {
                
                connection.query("SELECT * FROM new_schema.technician_continuation_trainings", function (error, result) {
                    for(let i=0;i<length_of_rows_technician;i++) 
                    {
                        if(v5==1){
                        res.write('<tr>');
                            if(result[i].sr_no)
                            {
                            res.write('<td>');
                            res.write(result[i].sr_no.toString());
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].name)
                            {
                            res.write('<td style="position:sticky; left:0; z-index:1; background-color:white;">');
                            res.write(result[i].name);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].desgn)
                            {
                            res.write('<td>');
                            res.write(result[i].desgn);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].staff_no)
                            {
                            res.write('<td>');
                            res.write(result[i].staff_no);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].fts)
                            {
                            
                                res.write('<td>');
                                res.write(result[i].fts);
                                res.write('</td>');
                                var color=getColor(result[i].fts);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>');
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[i].hf)
                            {
                            
                                res.write('<td>');
                                res.write(result[i].hf);
                                res.write('</td>');
                                var color=getColor(result[i].hf);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>');
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[i].ewis)
                            {
                            
                                res.write('<td>');
                                res.write(result[i].ewis);
                                res.write('</td>');
                                var color=getColor(result[i].ewis);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>');
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[i].sms)
                            {
                            
                                res.write('<td>');
                                res.write(result[i].sms);
                                res.write('</td>');
                                var color=getColor(result[i].sms);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>');
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[i].lm_procedure_moe_and_regln)
                            {
                            
                                res.write('<td>');
                                res.write(result[i].lm_procedure_moe_and_regln);
                                res.write('</td>');
                                var color=getColor(result[i].lm_procedure_moe_and_regln);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>');
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[i].store_procedure_and_esds)
                            {
                            
                                res.write('<td>');
                                res.write(result[i].store_procedure_and_esds);
                                res.write('</td>');
                                var color=getColor(result[i].store_procedure_and_esds);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>');
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[i].dgr)
                            {
                            
                                res.write('<td>');
                                res.write(result[i].dgr);
                                res.write('</td>');
                                var color=getColor(result[i].dgr);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>');
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[i].remark)
                            {
                            res.write('<td>');
                            res.write(result[i].remark);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            
                        res.write('</tr>');
                    }
                }
                    res.write("</table>");
                    res.write("</div>");
                    
                    res.end();
                });
            };
            jeswin2();
        }
        

    });
    
});
app.get('/ADMIN.html',basicauth,function(req,res){
    
    fs.readFile("ADMIN.html", function (err, pgResp){
        if (err) {
            res.writeHead(404);
            res.write('Contents you are looking are Not Found');
        } else {
            res.write(pgResp);
            if(v13==1){
            res.write("<h2 style='background-color: #007bff; color:white; text-align: center';>All-Staff-Data</h2>");

            res.write(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.3/simplebar.min.css">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.3/simplebar.min.js"></script>
            <style>  
            .form-container {
                max-height: 400px;
                overflow-y: auto;
                scrollbar-width: none;
                -ms-overflow-style: none;
            }   
            .form-container::-webkit-scrollbar {
              width: 0.5em;
              background-color: white;
            } 
            .table-container {
                border-collapse: collapse;
                width: 100%;
                table-layout: auto;
                white-space: nowrap;
            }
            .table-container input {
                padding: 4px;
                text-align: left;
                margin: 4px;
                overflow: auto;
            }
            .form-container .simplebar-track:before {
              width: 5px; 
            }
            .form-container .simplebar-scrollbar:before {
              background-color: #999999;
            }
            </style>

            <div class="form-container" data-simplebar>
            <form action="/all_staff_data" method="post">
             <div class="table-container">
             <input type="text" id="input1" name="SR_NO" placeholder="SR NO ">
             <input type="text" id="input2" name="NAME" placeholder="NAME">
             <input type="text" id="input3" name="DESG" placeholder="DESG">
             <input type="text" id="input4" name="STAFF_NO" placeholder="STAFF NO">
             <input type="text" id="input5" name="JOINING_DATE" placeholder="JOINING DATE">
             <input type="text" id="input6" name="CONTRACT_STARTING_DATE" placeholder="CONTRACT STARTING DATE">
             <input type="text" id="input6" name="CONTRACT_VALIDITY_DATE" placeholder="CONTRACT VALIDITY DATE">
             <input type="text" id="input7" name="AVS" placeholder="AVSEC TRAINING DATE">
             <input type="text" id="input7" name="AVSEC" placeholder="AVSEC TRAINING DUE DATE">
             <input type="text" id="input8" name="AEP" placeholder="AEP VALIDITY">
             <input type="text" id="input9" name="ADP" placeholder="ADP VALIDITY">
             <input type="text" id="input9" name="PCC" placeholder="PCC">
             <input type="text" id="input10" name="REMARKS" placeholder="REMARKS">
             
              </div>
              <div></div>
              <button type="submit" class="btn btn-primary mb-3" >SAVE</button>
            </form>
            </div>`);
            
res.write(`
<div class="container">
<table>
<tr>
                <form action="/delete_staff_data" method="post">
                <input type="text" name="button_data" placeholder="SR NO ">
                <button class="btn btn-outline-success" type="submit" style="border-color: #ffffff; background-color: #ff0000; color: #ffffff;">Delete</button>
                </form>`);
                res.write(`<button class="btn" style="background-color: red; margin-left:30%;" type="hidden">`);
                res.write(count_all_staff_data_red.toString());
                res.write(`</button>`);
                res.write(`<button class="btn" style="background-color: orange;" type="hidden">`);
                res.write(count_all_staff_data_orange.toString());
                res.write(`</button>`);
                res.write(`<button class="btn" style="background-color: yellow;" type="hidden">`);
                res.write(count_all_staff_data.toString());
                res.write(`</button>`);
                  
            res.write(`
                <form action="/download_all_staff_data" method="post">
                            <button style="float: right;" class="btn btn-outline-success" type="submit" style="border-color: #ffffff; background-color: #ff0000; color: #ffffff;">Download</button>
                            </form>
                </tr>
                </table>
                </div>
                `);
                res.write(` <script>
                          function scrollHorizontally(event) {
                            const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
                            const scrollContainer = event.currentTarget;
                            scrollContainer.scrollLeft -= delta * 40; // Adjust the scrolling speed as needed
                            event.preventDefault();
                          }
                        </script>`);
            res.write("<div class='table-responsive container' onwheel='scrollHorizontally(event)'>");
            res.write("<table class='table table-striped table-hover table-bordered'>");
            res.write("<tr><th>SR NO </th><th style=`position:sticky; left:0; z-index:1; background-color:white;`>NAME</th><th>DESG</th><th>STAFF NO</th><th>INITIAL JOINING DATE</th><th>CONTRACT STARTING DATE</th><th>CONTRACT VALIDITY DATE</th><th>Remaining Days</th><th>AVSEC TRAINING DATE</th><th>AVSEC TRAINING DUE DATE</th><th>Remaining Days</th><th>AEP VALIDITY</th><th>Remaining Days</th><th>ADP VALIDITY</th><th>Remaining Days</th><th>PCC</th><th>Remaining Days</th><th>REMARKS</th></tr>");
            }
            var jeswin = () => {
                
                connection.query("SELECT * FROM new_schema.all_staff_data", function (error, result) {
                    for(let i=0;i<length_of_rows;i++) 
                    {
                        if(v13==1){
                        res.write('<tr>');
                            if(result[i].sr_no)
                            {
                            res.write('<td>');
                            res.write(result[i].sr_no.toString());
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].name)
                            {
                            res.write('<td style="position:sticky; left:0; z-index:1; background-color:white;">');
                            res.write(result[i].name);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].desgn)
                            {
                            res.write('<td>');
                            res.write(result[i].desgn);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].staff_no)
                            {
                            res.write('<td>');
                            res.write(result[i].staff_no);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].joining_date)
                            {
                            res.write('<td>');
                            res.write(result[i].joining_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].current_contract_starting_date)
                            {
                            res.write('<td>');
                            res.write(result[i].current_contract_starting_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].contract_validity_date)
                            {
                                res.write('<td>');
                                res.write(result[i].contract_validity_date.split('/').join('-'));
                                res.write('</td>');
                                var color=getColor(result[i].contract_validity_date);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>');
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[i].avsec)
                            {
                            res.write('<td>');
                            res.write(result[i].avsec);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }

                            if(result[i].avsec_training_due_date)
                            {
                                res.write('<td>');
                                res.write(result[i].avsec_training_due_date.split('/').join('-'));
                                res.write('</td>');
                                var color=getColor(result[i].avsec_training_due_date);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>');
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[i].aep_validity)
                            {
                                    res.write('<td>');
                                    res.write(result[i].aep_validity);
                                    res.write('</td>');
                                    var color=getColor(result[i].aep_validity);
                                    res.write('<td style="background-color: ' + color + ';">');
                                    res.write(days_difference.toString());
                                    res.write('</td>');
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[i].adp_validity)
                            {
                                    res.write('<td>');
                                    res.write(result[i].adp_validity);
                                    res.write('</td>');
                                    var color=getColor(result[i].adp_validity);
                                    res.write('<td style="background-color: ' + color + ';">');
                                    res.write(days_difference.toString());
                                    res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[i].pcc)
                            {
                                res.write('<td>');
                                res.write(result[i].pcc.split('/').join('-'));
                                res.write('</td>');
                                var color=getColor(result[i].pcc);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[i].remarks)
                            {
                            res.write('<td>');
                            res.write(result[i].remarks);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                        res.write('</tr>');
                    }
                }
                    res.write("</table>");
                    res.write("</div>");
                    
                    res.end();
                });
            };
            jeswin();
        }
    });
});
app.get('/PERMISSION.html',basicauth,authRole,function(req,res){
    fs.readFile("PERMISSION.html", function (err, pgResp){
        if (err) {
            res.writeHead(404);
            res.write('Contents you are looking are Not Found');
        } else {
            res.write(pgResp);

            res.write("<h2 style='background-color: #007bff; color:white; text-align: center';>PERMISSIONS</h2>");
            res.write(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.3/simplebar.min.css">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/simplebar/5.3.3/simplebar.min.js"></script>
            <style>  
            .form-container {
                max-height: 400px;
                overflow-y: auto;
                scrollbar-width: none;
                -ms-overflow-style: none;
            }   
            .form-container::-webkit-scrollbar {
              width: 0.5em;
              background-color: white;
            } 
            .table-container {
                border-collapse: collapse;
                width: 100%;
                table-layout: auto;
                white-space: nowrap;
            }
            .table-container input {
                padding: 4px;
                text-align: left;
                margin: 4px;
                overflow: auto;
            }
            .form-container .simplebar-track:before {
              width: 5px; 
            }
            .form-container .simplebar-scrollbar:before {
              background-color: #999999;
            }
            </style>
            <div class="form-container" data-simplebar>
            <form action="/PERMISSION" method="post">
             <div class="table-container">
                <input type="text" id="input1" name="USER_ID" placeholder="USER ID">
                <input type="text" id="input2" name="USER_FULLNAME" placeholder="USER FULLNAME">
                <input type="text" id="input3" name="AME_LICENSE" placeholder="AME_LICENSE">
                <input type="text" id="input4" name="AME_CONTINUATION" placeholder="AME_CONTINUATION">
                <input type="text" id="input5" name="AME_AUTHORISATION" placeholder="AME_AUTHORISATION">
                <input type="text" id="input5" name="AUTHORISATION_COVERAGE" placeholder="AUTHORISATION_COVERAGE">
                <input type="text" id="input5" name="TECHNICIANS" placeholder="TECHNICIANS">
                <input type="text" id="input5" name="REGULAR_AUDIT" placeholder="REGULAR_AUDIT">
                <input type="text" id="input5" name="AUDIT_BY_AIRLINE" placeholder="AUDIT_BY_AIRLINE">
                <input type="text" id="input5" name="QUALITY_AUDIT_QUALITY" placeholder="QUALITY_AUDIT_QUALITY">
                <input type="text" id="input5" name="QUALITY_AUDIT_LINE" placeholder="QUALITY_AUDIT_LINE">
                <input type="text" id="input5" name="AUDIT_EXTERNAL_CIASL" placeholder="AUDIT_EXTERNAL_CIASL">
                <input type="text" id="input5" name="INTERNAL_QUALITY" placeholder="INTERNAL_QUALITY">
                <input type="text" id="input5" name="TOOLS" placeholder="TOOLS">
                <input type="text" id="input5" name="ALL_STAFF" placeholder="ALL_STAFF">
                <input type="text" id="input5" name="GROUND_SUPPORT" placeholder="GROUND_SUPPORT">
                <input type="text" id="input1" name="REGULATOR_APPROVAL" placeholder="REGULATOR_APPROVAL">
                <input type="text" id="input2" name="OPERATORS" placeholder="OPERATORS">
                <input type="text" id="input3" name="STORAGE_LIFE" placeholder="STORAGE_LIFE">
                </div>
                <div></div>
                <button type="submit" class="btn btn-primary mb-3">SAVE</button>
            </form>
            </div>
            `);
          res.write(`
            <div class="container">
            <table>
            <tr>
                            <form action="/delete_permission" method="post">
                            <input type="text" name="button_data" placeholder="SR NO ">
                            <button class="btn btn-outline-success" type="submit" style="border-color: #ffffff; background-color: #ff0000; color: #ffffff;">Delete</button>
                            </form>
                            `);
                            
                            

                        

                            res.write(`
                            
                            <form action="/download_permission" method="post">
                            <button style="float: right;" class="btn btn-outline-success" type="submit" style="border-color: #ffffff; background-color: #ff0000; color: #ffffff;">Download</button>
                            </form>
                            
            </tr>             
            </table>
            </div>
                            `);
                            res.write(` <script>
                            function scrollHorizontally(event) {
                              const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
                              const scrollContainer = event.currentTarget;
                              scrollContainer.scrollLeft -= delta * 40; // Adjust the scrolling speed as needed
                              event.preventDefault();
                            }
                          </script>`);
              res.write("<div class='table-responsive container' onwheel='scrollHorizontally(event)'>");
            res.write("<table class='table table-striped table-hover table-bordered'>");
            res.write(`<tr><th>USER ID</th>
            <th style="position:sticky; left:0; z-index:1; background-color:white;">USER FULLNAME</th>
            <th>AME LICENSE</th>
            <th>AME CONTINUATION</th>
            <th>AME AUTHORISATION</th>
            <th>AUTHORISATION COVERAGE</th>
            <th>TECHNICIANS</th>
            <th>REGULAR AUDIT</th>
            <th>AUDIT BY AIRLINE</th>
            <th>QUALITY AUDIT QUALITY</th>
            <th>QUALITY AUDIT LINE</th>
            <th>AUDIT EXTERNAL CIASL</th>
            <th>INTERNAL QUALITY</th>
            <th>TOOLS</th>
            <th>ALL STAFF</th>
            <th>GROUND SUPPORT</th>
            <th>REGULATOR APPROVAL</th>
            <th>OPERATORS</th>
            <th>STORAGE LIFE</th>
            </tr>
            `);
            var keerthi = () => {
                connection.query("SELECT * FROM new_schema.permissions", function (error, result) {
                    for(let i=0;i<length_of_rows_permission;i++) 
                    {
                        res.write('<tr>');
                        if(result[i].user_id)
                            {
                            res.write('<td>');
                            res.write(result[i].user_id.toString());
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].user_fullname)
                            {
                            res.write('<td style="position:sticky; left:0; z-index:1; background-color:white;">');
                            res.write(result[i].user_fullname);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].AME_LICENSE)
                            {
                            res.write('<td>');
                            res.write(result[i].AME_LICENSE);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].AME_CONTINUATION)
                            {
                            res.write('<td>');
                            res.write(result[i].AME_CONTINUATION);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }if(result[i].AME_AUTHORISATION)
                            {
                            res.write('<td>');
                            res.write(result[i].AME_AUTHORISATION);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }if(result[i].AUTHORISATION_COVERAGE)
                            {
                            res.write('<td>');
                            res.write(result[i].AUTHORISATION_COVERAGE);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }if(result[i].TECHNICIANS)
                            {
                            res.write('<td>');
                            res.write(result[i].TECHNICIANS);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }if(result[i].REGULAR_AUDIT)
                            {
                            res.write('<td>');
                            res.write(result[i].REGULAR_AUDIT);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }if(result[i].AUDIT_BY_AIRLINE)
                            {
                            res.write('<td>');
                            res.write(result[i].AUDIT_BY_AIRLINE);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }if(result[i].QUALITY_AUDIT_QUALITY)
                            {
                            res.write('<td>');
                            res.write(result[i].QUALITY_AUDIT_QUALITY);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }if(result[i].QUALITY_AUDIT_LINE)
                            {
                            res.write('<td>');
                            res.write(result[i].QUALITY_AUDIT_LINE);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }if(result[i].AUDIT_EXTERNAL_CIASL)
                            {
                            res.write('<td>');
                            res.write(result[i].AUDIT_EXTERNAL_CIASL);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].INTERNAL_QUALITY)
                            {
                            res.write('<td>');
                            res.write(result[i].INTERNAL_QUALITY);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].TOOLS)
                            {
                            res.write('<td>');
                            res.write(result[i].TOOLS);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].ALL_STAFF)
                            {
                            res.write('<td>');
                            res.write(result[i].ALL_STAFF);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }if(result[i].GROUND_SUPPORT)
                            {
                            res.write('<td>');
                            res.write(result[i].GROUND_SUPPORT);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].REGULATOR_APPROVAL)
                            {
                            res.write('<td>');
                            res.write(result[i].REGULATOR_APPROVAL);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].OPERATORS)
                            {
                            res.write('<td>');
                            res.write(result[i].OPERATORS);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].STORAGE_LIFE)
                            {
                            res.write('<td>');
                            res.write(result[i].STORAGE_LIFE);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                        res.write('</tr>');
                    }
                    res.write("</table>");
                    res.write("</div>");
                    res.end();
                });
            };
            keerthi();
        }
    });
});


app.post('/search_auditor',function(req,res){
    fs.readFile("AUDITOR.html", function (err, pgResp){
        if (err) {
            res.writeHead(404);
            res.write('Contents you are looking are Not Found');
        } else {
            res.write(pgResp);
            var jes = () => {
                connection.query(`SELECT COUNT(*) AS C FROM new_schema.regular_audit WHERE LOWER(regulator) LIKE LOWER('%${req.body.jen}%')`,function(error,resu){
                    if (error) throw error;
                    var lengt = resu[0].C;
                    console.log(lengt);
                    var jen = () => {
                        connection.query(`SELECT * FROM new_schema.regular_audit WHERE LOWER(regulator) LIKE LOWER('%${req.body.jen}%')`, function (error, result) {
                            if(lengt>0)
                            {
                                if(v6==1)
                                {
                            res.write("<h2 style='background-color: #007bff; color:white; text-align: center';>REGULAR AUDIT</h2>");
                            res.write("<div class='table-responsive container'>");
                            res.write("<table class='table table-striped table-hover table-bordered'>");
                            res.write("<tr><td>SR NO </td><td>REGULATOR</td><td>AUDIT DATE</td><td>NO OF FINDINGS</td><td>NO OF OBSER'S</td><td>CAP DUE DATE</td><td>Remaining days</td><td>CAP SUBMITTED DATE</td><td>CA DUE DATE</td><td>Remaining days</td><td>CA SUBMITTED DATE</td><td>AUDIT CLOSURE DATE</td><td>REMARKS</td></tr>");
                            }
                        }
                            for(let i=0;i<lengt;i++) 
                            {
                                if(v6==1)
                                {
                                res.write('<tr>');
                            if(result[i].sr_no)
                            {
                            res.write('<td>');
                            res.write(result[i].sr_no.toString());
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].regulator)
                            {
                            res.write('<td>');
                            res.write(result[i].regulator);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].audit_date)
                            {
                            res.write('<td>');
                            res.write(result[i].audit_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].no_of_findings)
                            {
                            res.write('<td>');
                            res.write(result[i].no_of_findings);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].no_of_observations)
                            {
                            res.write('<td>');
                            res.write(result[i].no_of_observations);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].cap_due_date)
                            {
                                res.write('<td>');
                                res.write(result[i].cap_due_date);
                                res.write('</td>');
                                var color=getColor(result[i].cap_due_date);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[i].cap_submitted_date)
                            {
                            res.write('<td>');
                            res.write(result[i].cap_submitted_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].ca_submit_due_date)
                            {
                                res.write('<td>');
                                res.write(result[i].ca_submit_due_date);
                                res.write('</td>');
                                var color=getColor(result[i].ca_submit_due_date);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[i].ca_submitted_date)
                            {
                            res.write('<td>');
                            res.write(result[i].ca_submitted_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].audit_closure_date)
                            {
                            res.write('<td>');
                            res.write(result[i].audit_closure_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].remark)
                            {
                            res.write('<td>');
                            res.write(result[i].remark);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                        res.write('</tr>');
                                }
                    }
                            
                            res.write("</table></div>");
                            
                            jes1();
                          });
                        };
                    jen();
                    
                });
                var jes1 = () => {
                    connection.query(`SELECT COUNT(*) AS C FROM new_schema.audit_by_airline_operators WHERE LOWER(operator) LIKE LOWER('%${req.body.jen}%')`,function(error,resu){
                        if (error) throw error;
                    var lengt = resu[0].C;
                    console.log(lengt);
                    var jen1 = () => {
                        connection.query(`SELECT * FROM new_schema.audit_by_airline_operators WHERE LOWER(operator) LIKE LOWER('%${req.body.jen}%')`, function (error, result) {
                            if(lengt>0)
                            {
                                if(v7==1)
                                {
                            res.write("<h2 style='background-color: #007bff; color:white; text-align: center';>AUDIT BY AIRLINE OPERATORS</h2>");
                            res.write("<div class='table-responsive container'>");
                            res.write("<table class='table table-striped table-hover table-bordered'>");
                            }
                        }
                            for(let k=0;k<lengt;k++) 
                    {
                        if(v7==1)
                        {
                        res.write('<tr>');
                            if(result[k].sr_no)
                            {
                            res.write('<td>');
                            res.write(result[k].sr_no.toString());
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].operator)
                            {
                            res.write('<td>');
                            res.write(result[k].operator);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].audit_date)
                            {
                            res.write('<td>');
                            res.write(result[k].audit_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].no_of_findings)
                            {
                            res.write('<td>');
                            res.write(result[k].no_of_findings);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].no_of_obsrvns)
                            {
                            res.write('<td>');
                            res.write(result[k].no_of_obsrvns);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].cap_due_date)
                            {
                                res.write('<td>');
                                res.write(result[k].cap_due_date);
                                res.write('</td>');
                                var color=getColor(result[k].cap_due_date);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[k].cap_submitted_date)
                            {
                            res.write('<td>');
                            res.write(result[k].cap_submitted_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].cap_submit_due_date)
                            {
                                res.write('<td>');
                                res.write(result[k].cap_submit_due_date);
                                res.write('</td>');
                                var color=getColor(result[k].cap_submit_due_date);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[k].ca_submitted_date)
                            {
                            res.write('<td>');
                            res.write(result[k].ca_submitted_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].audit_closure_date)
                            {
                            res.write('<td>');
                            res.write(result[k].audit_closure_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].remark)
                            {
                            res.write('<td>');
                            res.write(result[k].remark);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                        res.write('</tr>');
                        }
                    }

                            res.write("</table></div>");
                            jes2();                            
                        });
                    };
                    jen1();
                    });
                    var jes2  = () => {
                        connection.query(`SELECT COUNT(*) AS C FROM new_schema.quality_audit WHERE LOWER(auditor_name) LIKE LOWER('%${req.body.jen}%')`,function(error,resu){
                            if (error) throw error;
                    var lengt = resu[0].C;
                    console.log(lengt);
                    var jen2 = () => {
                        connection.query(`SELECT * FROM new_schema.quality_audit WHERE LOWER(auditor_name) LIKE LOWER('%${req.body.jen}%')`, function (error, result) {
                            if(lengt>0)
                            {
                                if(v8==1)
                                {
                            res.write("<h2 style='background-color: #007bff; color:white; text-align: center';>QUALITY AUDIT-QUALITY DIVISION</h2>");
                            res.write("<div class='table-responsive container'>");
                            res.write("<table class='table table-striped table-hover table-bordered'>");
                            }
                        }
                            for(let k=0;k<lengt;k++) 
                    {
                        if(v8==1)
                        {
                        res.write('<tr>');
                            if(result[k].sr_no)
                            {
                            res.write('<td>');
                            res.write(result[k].sr_no.toString());
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].auditor_name)
                            {
                            res.write('<td>');
                            res.write(result[k].auditor_name);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].audit_date)
                            {
                            res.write('<td>');
                            res.write(result[k].audit_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].no_of_findings)
                            {
                            res.write('<td>');
                            res.write(result[k].no_of_findings);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].no_of_observations)
                            {
                            res.write('<td>');
                            res.write(result[k].no_of_observations);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].cap_due_date)
                            {
                                res.write('<td>');
                                res.write(result[k].cap_due_date);
                                res.write('</td>');
                                var color=getColor(result[k].cap_due_date);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[k].cap_submitted_date)
                            {
                            res.write('<td>');
                            res.write(result[k].cap_submitted_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].ca_submit_due_date)
                            {
                                res.write('<td>');
                                res.write(result[k].ca_submit_due_date);
                                res.write('</td>');
                                var color=getColor(result[k].ca_submit_due_date);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[k].ca_submitted_date)
                            {
                            res.write('<td>');
                            res.write(result[k].ca_submitted_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].audit_closure_date)
                            {
                            res.write('<td>');
                            res.write(result[k].audit_closure_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].remark)
                            {
                            res.write('<td>');
                            res.write(result[k].remark);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                        res.write('</tr>');
                        }
                    };
                            res.write("</table></div>");
                            jes3();
                        });
                    };
                    jen2();
                        });
                        var jes3 = () => {
                            connection.query(`SELECT COUNT(*) AS C FROM new_schema.line_maintenance WHERE LOWER(auditor_name) LIKE LOWER('%${req.body.jen}%')`,function(error,resu){
                                if (error) throw error;
                                var lengt = resu[0].C;
                                console.log(lengt);
                                var jen3 = () => {
                                    connection.query(`SELECT * FROM new_schema.line_maintenance WHERE LOWER(auditor_name) LIKE LOWER('%${req.body.jen}%')`, function (error, result) {
                                        if(lengt>0)
                                        {
                                            if(v9==1)
                                            {
                                        res.write("<h2 style='background-color: #007bff; color:white; text-align: center';>QUALITY AUDIT-LINE MAINTENANCE</h2>");
                                        res.write("<div class='table-responsive container'>");
                                        res.write("<table class='table table-striped table-hover table-bordered'>");
                                        }
                                    }
                                        for(let k=0;k<lengt;k++) 
                                    {
                                        if(v9==1)
                                        {
                        res.write('<tr>');
                            if(result[k].sr_no)
                            {
                            res.write('<td>');
                            res.write(result[k].sr_no.toString());
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].auditor_name)
                            {
                            res.write('<td>');
                            res.write(result[k].auditor_name);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].audit_date)
                            {
                            res.write('<td>');
                            res.write(result[k].audit_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].audit_type)
                            {
                            res.write('<td>');
                            res.write(result[k].audit_type);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].no_of_findings)
                            {
                            res.write('<td>');
                            res.write(result[k].no_of_findings);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].no_of_observations)
                            {
                            res.write('<td>');
                            res.write(result[k].no_of_observations);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].cap_due_date)
                            {
                                res.write('<td>');
                                res.write(result[k].cap_due_date);
                                res.write('</td>');
                                var color=getColor(result[k].cap_due_date);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[k].cap_submitted_date)
                            {
                            res.write('<td>');
                            res.write(result[k].cap_submitted_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].ca_submit_due_date)
                            {
                                res.write('<td>');
                                res.write(result[k].ca_submit_due_date);
                                res.write('</td>');
                                var color=getColor(result[k].ca_submit_due_date);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[k].ca_submitted_date)
                            {
                            res.write('<td>');
                            res.write(result[k].ca_submitted_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].audit_closure_date)
                            {
                            res.write('<td>');
                            res.write(result[k].audit_closure_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].remark)
                            {
                            res.write('<td>');
                            res.write(result[k].remark);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                        res.write('</tr>');
                                        }
                    }

                                        res.write("</table></div>");
                                        jes4();
                                    });
                                };
                                jen3();
                            });
                            var jes4 = () => {
                                connection.query(`SELECT COUNT(*) AS C FROM new_schema.audit_of_external WHERE LOWER(auditor_name) LIKE LOWER('%${req.body.jen}%')`,function(error,resu){
                                    if (error) throw error;
                            var lengt = resu[0].C;
                            console.log(lengt);
                                    var jen4 = () => {
                                        connection.query(`SELECT * FROM new_schema.audit_of_external WHERE LOWER(auditor_name) LIKE LOWER('%${req.body.jen}%')`, function (error, result) {
                                            if(lengt>0)
                                            {
                                                if(v10==1)
                                                {
                                            res.write("<h2 style='background-color: #007bff; color:white; text-align: center';>AUDIT OF EXTERNAL AGENCIES BY CIASL AUDITORS</h2>");
                                            res.write("<div class='table-responsive container'>");
                                            res.write("<table class='table table-striped table-hover table-bordered'>");
                                            } }
                                            for(let k=0;k<lengt;k++) 
                    {
                        if(v10==1)
                        {
                        res.write('<tr>');
                            if(result[k].sr_no)
                            {
                            res.write('<td>');
                            res.write(result[k].sr_no.toString());
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].auditor_name)
                            {
                            res.write('<td>');
                            res.write(result[k].auditee_orgzn);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].auditor_name)
                            {
                            res.write('<td>');
                            res.write(result[k].auditor_name);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].audit_date)
                            {
                            res.write('<td>');
                            res.write(result[k].audit_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].no_of_findings)
                            {
                            res.write('<td>');
                            res.write(result[k].no_of_findings);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].no_of_observations)
                            {
                            res.write('<td>');
                            res.write(result[k].no_of_observations);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].cap_received_date)
                            {
                            res.write('<td>');
                            res.write(result[k].cap_received_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].cap_approved_date)
                            {
                            res.write('<td>');
                            res.write(result[k].cap_approved_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].ca_received_date)
                            {
                            res.write('<td>');
                            res.write(result[k].ca_received_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].ca_approved_date)
                            {
                            res.write('<td>');
                            res.write(result[k].ca_approved_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].audit_closed_date)
                            {
                            res.write('<td>');
                            res.write(result[k].audit_closed_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].remark)
                            {
                            res.write('<td>');
                            res.write(result[k].remark);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                        res.write('</tr>');
                        }
                    }

                                            res.write("</table></div>");
                                            jes5();

                                        });
                                    };
                                    jen4();
                                });
                                var jes5 = () => {
                                    connection.query(`SELECT COUNT(*) AS C FROM new_schema.internal_quality_auditors WHERE LOWER(name) LIKE LOWER('%${req.body.jen}%')`,function(error,resu){
                                        if (error) throw error;
                                var lengt = resu[0].C;
                                console.log(lengt);
                                        var jen5 = () => {
                                            connection.query(`SELECT * FROM new_schema.internal_quality_auditors WHERE LOWER(name) LIKE LOWER('%${req.body.jen}%')`, function (error, result) {
                                                if(lengt>0)
                                                {
                                                    if(v11==1)
                                                    {
                                                res.write("<h2 style='background-color: #007bff; color:white; text-align: center';>INTERNAL QUALITY AUDITORS</h2>");
                                                res.write("<div class='table-responsive container'>");
                                                res.write("<table class='table table-striped table-hover table-bordered'>");
                                                }
                                            }
                                                for(let k=0;k<lengt;k++) 
                    {
                        if(v11==1)
                        {
                        res.write('<tr>');
                            if(result[k].sr_no)
                            {
                            res.write('<td>');
                            res.write(result[k].sr_no.toString());
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].name)
                            {
                            res.write('<td>');
                            res.write(result[k].name);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].auth_no)
                            {
                            res.write('<td>');
                            res.write(result[k].auth_no);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].auth_validity_date)
                            {
                                res.write('<td>');
                                res.write(result[k].auth_validity_date);
                                res.write('</td>');
                                var color=getColor(result[k].auth_validity_date);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[k].auditor_date_initial)
                            {
                            res.write('<td>');
                            res.write(result[k].auditor_date_initial);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].regulations_done_date)
                            {
                            res.write('<td>');
                            res.write(result[k].regulations_done_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].regulations_due_date)
                            {
                                res.write('<td>');
                                res.write(result[k].regulations_due_date);
                                res.write('</td>');
                                var color=getColor(result[k].regulations_due_date);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[k].hf_done_date)
                            {
                            res.write('<td>');
                            res.write(result[k].hf_done_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].hf_due_date)
                            {
                                res.write('<td>');
                                res.write(result[k].hf_due_date);
                                res.write('</td>');
                                var color=getColor(result[k].hf_due_date);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[k].fts_done_date)
                            {
                            res.write('<td>');
                            res.write(result[k].fts_done_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].fts_due_date)
                            {
                                res.write('<td>');
                                res.write(result[k].fts_due_date);
                                res.write('</td>');
                                var color=getColor(result[k].fts_due_date);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[k].ewis_done_date)
                            {
                            res.write('<td>');
                            res.write(result[k].ewis_done_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].ewis_due_date)
                            {
                                res.write('<td>');
                                res.write(result[k].ewis_due_date);
                                res.write('</td>');
                                var color=getColor(result[k].ewis_due_date);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[k].sms_done_date)
                            {
                            res.write('<td>');
                            res.write(result[k].sms_done_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[k].sms_due_date)
                            {
                                res.write('<td>');
                                res.write(result[k].sms_due_date);
                                res.write('</td>');
                                var color=getColor(result[k].sms_due_date);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[k].remark)
                            {
                            res.write('<td>');
                            res.write(result[k].remark);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                        res.write('</tr>');
                        }
                    }
                                                res.write("</table></div>");
                                                res.end();
                                            });
                                        };
                                        jen5();
                                    });
                                };
                            };
                        };
                    };
                };
            };
            jes();
        }
        
    });
    
});
app.post('/search_others',function(req,res){
    fs.readFile("ADMIN.html", function (err, pgResp){
        if (err) {
            res.writeHead(404);
            res.write('Contents you are looking are Not Found');
        } else {
            res.write(pgResp);
            
            console.log(req.body.jen);
            var jes = () => {
                connection.query(`SELECT COUNT(*) AS C FROM new_schema.all_staff_data WHERE LOWER(name) LIKE LOWER('%${req.body.jen}%') OR LOWER(desgn) LIKE LOWER('%${req.body.jen}%')`,function(error,resu){
                    if (error) throw error;
                    var lengt = resu[0].C;
                    console.log(lengt);
                    var jen = () => {
                        connection.query(`SELECT * FROM new_schema.all_staff_data WHERE LOWER(name) LIKE LOWER('%${req.body.jen}%') OR LOWER(desgn) LIKE LOWER('%${req.body.jen}%')`, function (error, result) {
                            if(lengt>0)
                            {
                                if(v13==1)
                                {
                            res.write("<h2 style='background-color: #007bff; color:white; text-align: center';>All-Staff-Data</h2>");
                            res.write("<div class='table-responsive container'>");
                            res.write("<table class='table table-striped table-hover table-bordered'>");
                            res.write("<tr><td>SR NO </td><td>NAME</td><td>DESG</td><td>STAFF NO</td><td>JOINING DATE</td><td>CONTRACT STARTING DATE</td><td>CONTRACT VALIDITY DATE</td><td>Remaining Days</td><td>AVSEC TRAINING DATE</td><td>AVSEC TRAINING DUE DATE</td><td>Remaining Days</td><td>AEP VALIDITY</td><td>Remaining Days</td><td>ADP VALIDITY</td><td>Remaining Days</td><td>PCC</td><td>Remaining Days</td><td>REMARKS</td></tr>");
                            } 
                        }
                            for(let i=0;i<lengt;i++) 
                    {
                        if(v13==1)
                        {
                        res.write('<tr>');
                            if(result[i].sr_no)
                            {
                            res.write('<td>');
                            res.write(result[i].sr_no.toString());
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].name)
                            {
                            res.write('<td>');
                            res.write(result[i].name);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].desgn)
                            {
                            res.write('<td>');
                            res.write(result[i].desgn);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].staff_no)
                            {
                            res.write('<td>');
                            res.write(result[i].staff_no);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].joining_date)
                            {
                            res.write('<td>');
                            res.write(result[i].joining_date.split('/').join('-'));
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].current_contract_starting_date)
                            {
                            res.write('<td>');
                            res.write(result[i].current_contract_starting_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].contract_validity_date)
                            {
                                res.write('<td>');
                                res.write(result[i].contract_validity_date.split('/').join('-'));
                                res.write('</td>');
                                var color=getColor(result[i].contract_validity_date);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }

                            if(result[i].avsec)
                            {
                            res.write('<td>');
                            res.write(result[i].avsec.split('/').join('-'));
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].avsec_training_due_date)
                            {
                                res.write('<td>');
                                res.write(result[i].avsec_training_due_date.split('/').join('-'));
                                res.write('</td>');
                                var color=getColor(result[i].avsec_training_due_date);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[i].aep_validity)
                            {
                                res.write('<td>');
                                res.write(result[i].aep_validity.split('/').join('-'));
                                res.write('</td>');
                                var color=getColor(result[i].aep_validity);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[i].adp_validity)
                            {
                                res.write('<td>');
                                res.write(result[i].adp_validity.split('/').join('-'));
                                res.write('</td>');
                                var color=getColor(result[i].adp_validity);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[i].pcc)
                            {
                                res.write('<td>');
                                res.write(result[i].pcc.split('/').join('-'));
                                res.write('</td>');
                                var color=getColor(result[i].pcc);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[i].remarks)
                            {
                            res.write('<td>');
                            res.write(result[i].remarks);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                        res.write('</tr>');
                        }
                    }
                            res.write("</table></div>");
                            res.end();
                          });
                          
                          
                            
                        };
                    jen();
                    
                });
            };
            jes();
            
        }
        
        
    });
    
});
app.post('/search_engineers',function(req,res){
    fs.readFile("ENGINEER.html", function (err, pgResp){
        if (err) {
            res.writeHead(404);
            res.write('Contents you are looking are Not Found');
        } else {
            res.write(pgResp);
            
            console.log(req.body.jen);
            var jes = () => {
                connection.query(`SELECT COUNT(*) AS C FROM new_schema.amelicense WHERE LOWER(name) LIKE LOWER('%${req.body.jen}%')`,function(error,resu){
                    if (error) throw error;
                    var lengt = resu[0].C;
                    console.log(lengt);
                    var jen = () => {
                        connection.query(`SELECT * FROM new_schema.amelicense WHERE LOWER(name) LIKE LOWER('%${req.body.jen}%')`, function (error, result) {
                            if(lengt>0)
                            {
                                if(v1==1)
                                {
                            res.write("<h2 style='background-color: #007bff; color:white; text-align: center';>AME LICENSE</h2>");
                            res.write("<div class='table-responsive container'>");
                            res.write("<table class='table table-striped table-hover table-bordered'>");
                            res.write(`<tr>
            <td>sr_no</td>
            <td>name</td>
            <td>license_cat</td>
            <td>dgca lic no</td>
            <td>dgca lic validity</td>
            <td>remaining days</td>
            <td>easa lic no</td>
            <td>easa lic validity</td>
            <td>remaining days</td>
            <td>A320_series_V2500</td>
            <td>A320_series_CFM_56</td>
            <td>A320_series_LEAP_1A</td>
            <td>A320_series_p_and_w</td>
            <td>A330_T700</td>
            <td>A330_NEO_T70000</td>
            <td>A330_GE_CF6</td>
            <td>A350_TRENT_XWB</td>
            <td>B737_NG_CFM56_7B</td>
            <td>B737_MAX_LEAP_1B</td>
            <td>B777_GE_90</td>
            <td>B787_GEnX</td>
            <td>remarks</td>
            </tr>`);
                                    }    }
            for(let i=0;i<lengt;i++) 
            {
                if(v1==1){
                res.write('<tr>');
                    if(result[i].sr_no)
                    {
                    res.write('<td>');
                    res.write(result[i].sr_no.toString());
                    res.write('</td>');
                    }
                    else
                    {
                        
                        res.write('<td></td>');
                    }
                    if(result[i].name)
                    {
                    res.write('<td>');
                    res.write(result[i].name);
                    res.write('</td>');
                    }
                    else
                    {
                        
                        res.write('<td></td>');
                    }
                    if(result[i].license_cat)
                    {
                    res.write('<td>');
                    res.write(result[i].license_cat);
                    res.write('</td>');
                    }
                    else
                    {
                        
                        res.write('<td></td>');
                    }
                    if(result[i].dgca_lic_no)
                    {
                    res.write('<td>');
                    res.write(result[i].dgca_lic_no);
                    res.write('</td>');
                    }
                    else
                    {
                        
                        res.write('<td></td>');
                    }
                    if(result[i].dgca_lic_validity)
                    {
                        res.write('<td>');
                        res.write(result[i].dgca_lic_validity);
                        res.write('</td>');
                        var color=getColor(result[i].dgca_lic_validity);
                        res.write('<td style="background-color: ' + color + ';">');
                        res.write(days_difference.toString());
                        res.write('</td>'); 
                    }
                    else
                    {
                        res.write('<td></td>');
                        res.write('<td></td>');
                    }
                    if(result[i].easa_lic_no)
                    {
                    res.write('<td>');
                    res.write(result[i].easa_lic_no);
                    res.write('</td>');
                    }
                    else
                    {
                        
                        res.write('<td></td>');
                    }
                    if(result[i].easa_lic_validity)
                    {
                        res.write('<td>');
                        res.write(result[i].easa_lic_validity);
                        res.write('</td>');
                        var color=getColor(result[i].easa_lic_validity);
                        res.write('<td style="background-color: ' + color + ';">');
                        res.write(days_difference.toString());
                        res.write('</td>'); 
                    }
                    else
                    {
                        res.write('<td></td>');
                        res.write('<td></td>');
                    }
                    if(result[i].A320_series_V2500)
                    {
                    res.write('<td>');
                    res.write(result[i].A320_series_V2500);
                    res.write('</td>');
                    }
                    else
                    {
                        
                        res.write('<td></td>');
                    }
                    if(result[i].A320_series_CFM_56)
                    {
                    res.write('<td>');
                    res.write(result[i].A320_series_CFM_56);
                    res.write('</td>');
                    }
                    else
                    {
                        
                        res.write('<td></td>');
                    }
                    if(result[i].A320_series_LEAP_1A)
                    {
                    res.write('<td>');
                    res.write(result[i].A320_series_LEAP_1A);
                    res.write('</td>');
                    }
                    else
                    {
                        
                        res.write('<td></td>');
                    }
                    if(result[i].A320_series_p_and_w)
                    {
                    res.write('<td>');
                    res.write(result[i].A320_series_p_and_w);
                    res.write('</td>');
                    }
                    else
                    {
                        
                        res.write('<td></td>');
                    }
                    if(result[i].A330_T700)
                    {
                    res.write('<td>');
                    res.write(result[i].A330_T700);
                    res.write('</td>');
                    }
                    else
                    {
                        
                        res.write('<td></td>');
                    }
                    if(result[i].A330_NEO_T70000)
                    {
                    res.write('<td>');
                    res.write(result[i].A330_NEO_T70000);
                    res.write('</td>');
                    }
                    else
                    {
                        
                        res.write('<td></td>');
                    }
                    if(result[i].A330_GE_CF6)
                    {
                    res.write('<td>');
                    res.write(result[i].A330_GE_CF6);
                    res.write('</td>');
                    }
                    else
                    {
                        
                        res.write('<td></td>');
                    }
                    if(result[i].A350_TRENT_XWB)
                    {
                    res.write('<td>');
                    res.write(result[i].A350_TRENT_XWB);
                    res.write('</td>');
                    }
                    else
                    {
                        
                        res.write('<td></td>');
                    }
                    if(result[i].B737_NG_CFM56_7B)
                    {
                    res.write('<td>');
                    res.write(result[i].B737_NG_CFM56_7B);
                    res.write('</td>');
                    }
                    else
                    {
                        
                        res.write('<td></td>');
                    }
                    if(result[i].B737_MAX_LEAP_1B)
                    {
                    res.write('<td>');
                    res.write(result[i].B737_MAX_LEAP_1B);
                    res.write('</td>');
                    }
                    else
                    {
                        
                        res.write('<td></td>');
                    }
                    if(result[i].B777_GE_90)
                    {
                    res.write('<td>');
                    res.write(result[i].B777_GE_90);
                    res.write('</td>');
                    }
                    else
                    {
                        
                        res.write('<td></td>');
                    }
                    if(result[i].B787_GEnX)
                    {
                    res.write('<td>');
                    res.write(result[i].B787_GEnX);
                    res.write('</td>');
                    }
                    else
                    {
                        
                        res.write('<td></td>');
                    }
                    if(result[i].remarks)
                    {
                    res.write('<td>');
                    res.write(result[i].remarks);
                    res.write('</td>');
                    }
                    else
                    {
                        
                        res.write('<td></td>');
                    }
                res.write('</tr>');
                }
            }
                            
                            res.write("</table></div>");
                            jes1();
                          });
                        };
                    jen();
                    
                });
                var jes1 = () => {
                    connection.query(`SELECT COUNT(*) AS C FROM new_schema.ame_continuation_trainings WHERE LOWER(name) LIKE LOWER('%${req.body.jen}%')`,function(error,resu){
                        if (error) throw error;
                        var lengt = resu[0].C;
                        console.log(lengt);
                        var jen1 = () => {
                            connection.query(`SELECT * FROM new_schema.ame_continuation_trainings WHERE LOWER(name) LIKE LOWER('%${req.body.jen}%')`, function (error, result) {
                                if(lengt>0)
                                {
                                    if(v2==1)
                                    {
                                res.write("<h2 style='background-color: #007bff; color:white; text-align: center';>AME CONTINUATION TRAININGS</h2>");
                                res.write("<div class='table-responsive container'>");
                                res.write("<table class='table table-striped table-hover table-bordered'>");
                                res.write(`<tr><td>SR NO </td>
            <td>name</td>
            <td>staff no</td>
            <td>A320_v2500</td>
            <td>Remaining Days</td>
            <td>A320_CFM_LEAP_1A</td><td>Remaining Days</td>
            <td>A330_RR_T700</td><td>Remaining Days</td>
            <td>A330_NEO_RR_T7000</td><td>Remaining Days</td>
            <td>A330_GE_CF6</td><td>Remaining Days</td>
            <td>A330_P_AND_W</td><td>Remaining Days</td>
            <td>A350_RR_T-XWB</td><td>Remaining Days</td>
            <td>B737_CFM56</td><td>Remaining Days</td>
            <td>B737_MAX_CFM_LEAP1B</td><td>Remaining Days</td>
            <td>B777_GE90</td><td>Remaining Days</td>
            <td>B787_GENX</td><td>Remaining Days</td>
            <td>ADDNL_REFR</td><td>Remaining Days</td>
            <td>HF</td><td>Remaining Days</td>
            <td>FTS</td><td>Remaining Days</td>
            <td>EWIS</td><td>Remaining Days</td>
            <td>SMS</td><td>Remaining Days</td>
            <td>regulations</td><td>Remaining Days</td>
            <th>GCAA 145 Trg</th><th>Remaining Days</th>
            <th>ETOPS</th><th>Remaining Days</th>
            <th>RVSM</th><th>Remaining Days</th>
            <th>Operator Procedures Trg</th><th>Remaining Days</th>
            <td>REMARKS</td></tr>`);

                                } }
            for(let k=0;k<lengt;k++) 
            {
                if(v2==1)
                {
                res.write('<tr>');
                    if(result[k].sr_no)
                    {
                    res.write('<td>');
                    res.write(result[k].sr_no.toString());
                    res.write('</td>');
                    }
                    else
                    {
                        
                        res.write('<td></td>');
                    }
                    if(result[k].name)
                    {
                    res.write('<td>');
                    res.write(result[k].name);
                    res.write('</td>');
                    }
                    else
                    {
                        
                        res.write('<td></td>');
                    }
                    if(result[k].staff_no)
                    {
                    res.write('<td>');
                    res.write(result[k].staff_no);
                    res.write('</td>');
                    }
                    else
                    {
                        
                        res.write('<td></td>');
                    }
                    if(result[k].A320_V2500)
                    {
                        res.write('<td>');
                        res.write(result[k].A320_V2500);
                        res.write('</td>');
                        var color=getColor(result[k].A320_V2500);
                        res.write('<td style="background-color: ' + color + ';">');
                        res.write(days_difference.toString());
                        res.write('</td>'); 
                    }
                    else
                    {
                        res.write('<td></td>');
                        res.write('<td></td>');
                    }
                    if(result[k].A320_CFM_LEAP_1A)
                    {
                        res.write('<td>');
                        res.write(result[k].A320_CFM_LEAP_1A);
                        res.write('</td>');
                        var color=getColor(result[k].A320_CFM_LEAP_1A);
                        res.write('<td style="background-color: ' + color + ';">');
                        res.write(days_difference.toString());
                        res.write('</td>'); 
                    }
                    else
                    {
                        res.write('<td></td>');
                        res.write('<td></td>');
                    }
                    if(result[k].A330_RR_T700)
                    {
                        res.write('<td>');
                        res.write(result[k].A330_RR_T700);
                        res.write('</td>');
                        var color=getColor(result[k].A330_RR_T700);
                        res.write('<td style="background-color: ' + color + ';">');
                        res.write(days_difference.toString());
                        res.write('</td>'); 
                    }
                    else
                    {
                        res.write('<td></td>');
                        res.write('<td></td>');
                    }
                    if(result[k].A330_NEO_RR_T7000)
                    {
                        res.write('<td>');
                        res.write(result[k].A330_NEO_RR_T7000);
                        res.write('</td>');
                        var color=getColor(result[k].A330_NEO_RR_T7000);
                        res.write('<td style="background-color: ' + color + ';">');
                        res.write(days_difference.toString());
                        res.write('</td>'); 
                    }
                    else
                    {
                        res.write('<td></td>');
                        res.write('<td></td>');
                    }
                    if(result[k].A330_GE_CF6)
                    {
                        res.write('<td>');
                        res.write(result[k].A330_GE_CF6);
                        res.write('</td>');
                        var color=getColor(result[k].A330_GE_CF6);
                        res.write('<td style="background-color: ' + color + ';">');
                        res.write(days_difference.toString());
                        res.write('</td>'); 
                    }
                    else
                    {
                        res.write('<td></td>');
                        res.write('<td></td>');
                    }
                    if(result[k].A330_P_AND_W)
                    {
                        res.write('<td>');
                        res.write(result[k].A330_P_AND_W);
                        res.write('</td>');
                        var color=getColor(result[k].A330_P_AND_W);
                        res.write('<td style="background-color: ' + color + ';">');
                        res.write(days_difference.toString());
                        res.write('</td>'); 
                    }
                    else
                    {
                        res.write('<td></td>');
                        res.write('<td></td>');
                    }
                    if(result[k].A350_RR_T_XWB)
                    {
                        res.write('<td>');
                        res.write(result[k].A350_RR_T_XWB);
                        res.write('</td>');
                        var color=getColor(result[k].A350_RR_T_XWB);
                        res.write('<td style="background-color: ' + color + ';">');
                        res.write(days_difference.toString());
                        res.write('</td>'); 
                    }
                    else
                    {
                        res.write('<td></td>');
                        res.write('<td></td>');
                    }
                    if(result[k].B737_CFM56)
                    {
                        res.write('<td>');
                        res.write(result[k].B737_CFM56);
                        res.write('</td>');
                        var color=getColor(result[k].B737_CFM56);
                        res.write('<td style="background-color: ' + color + ';">');
                        res.write(days_difference.toString());
                        res.write('</td>'); 
                    }
                    else
                    {
                        res.write('<td></td>');
                        res.write('<td></td>');
                    }
                    if(result[k].B737_MAX_CFM_LEAP1B)
                    {
                        res.write('<td>');
                        res.write(result[k].B737_MAX_CFM_LEAP1B);
                        res.write('</td>');
                        var color=getColor(result[k].B737_MAX_CFM_LEAP1B);
                        res.write('<td style="background-color: ' + color + ';">');
                        res.write(days_difference.toString());
                        res.write('</td>'); 
                    }
                    else
                    {
                        res.write('<td></td>');
                        res.write('<td></td>');
                    }
                    if(result[k].B777_GE90)
                    {
                        res.write('<td>');
                        res.write(result[k].B777_GE90);
                        res.write('</td>');
                        var color=getColor(result[k].B777_GE90);
                        res.write('<td style="background-color: ' + color + ';">');
                        res.write(days_difference.toString());
                        res.write('</td>'); 
                    }
                    else
                    {
                        res.write('<td></td>');
                        res.write('<td></td>');
                    }
                    if(result[k].B787_GENX)
                    {
                        res.write('<td>');
                        res.write(result[k].B787_GENX);
                        res.write('</td>');
                        var color=getColor(result[k].B787_GENX);
                        res.write('<td style="background-color: ' + color + ';">');
                        res.write(days_difference.toString());
                        res.write('</td>'); 
                }
                    else
                    {
                        res.write('<td></td>');
                        res.write('<td></td>');
                    }
                    if(result[k].ADDNL_REFR)
                    {
                        res.write('<td>');
                        res.write(result[k].ADDNL_REFR);
                        res.write('</td>');
                        var color=getColor(result[k].ADDNL_REFR);
                        res.write('<td style="background-color: ' + color + ';">');
                        res.write(days_difference.toString());
                        res.write('</td>'); 
                    }
                    else
                    {
                        res.write('<td></td>');
                        res.write('<td></td>');
                    }
                    if(result[k].HF)
                    {
                        res.write('<td>');
                        res.write(result[k].adp_validity);
                        res.write('</td>');
                        var color=getColor(result[k].adp_validity);
                        res.write('<td style="background-color: ' + color + ';">');
                        res.write(days_difference.toString());
                        res.write('</td>'); 
                }
                    else
                    {
                        res.write('<td></td>');
                        res.write('<td></td>');
                    }
                    if(result[k].FTS)
                    {
                        res.write('<td>');
                        res.write(result[k].FTS);
                        res.write('</td>');
                        var color=getColor(result[k].FTS);
                        res.write('<td style="background-color: ' + color + ';">');
                        res.write(days_difference.toString());
                        res.write('</td>'); 
                }
                    else
                    {
                        res.write('<td></td>');
                        res.write('<td></td>');
                    }
                    if(result[k].EWIS)
                    {
                        res.write('<td>');
                        res.write(result[k].adp_validity);
                        res.write('</td>');
                        var color=getColor(result[k].adp_validity);
                        res.write('<td style="background-color: ' + color + ';">');
                        res.write(days_difference.toString());
                        res.write('</td>'); 
                }
                    else
                    {
                        res.write('<td></td>');
                        res.write('<td></td>');
                    }
                    if(result[k].SMS)
                    {
                        res.write('<td>');
                        res.write(result[k].SMS);
                        res.write('</td>');
                        var color=getColor(result[k].SMS);
                        res.write('<td style="background-color: ' + color + ';">');
                        res.write(days_difference.toString());
                        res.write('</td>'); 
                    }
                    else
                    {
                        res.write('<td></td>');
                        res.write('<td></td>');
                    }
                    if(result[k].REGULATIONS)
                    {
                        res.write('<td>');
                        res.write(result[k].REGULATIONS);
                        res.write('</td>');
                        var color=getColor(result[k].REGULATIONS);
                        res.write('<td style="background-color: ' + color + ';">');
                        res.write(days_difference.toString());
                        res.write('</td>'); 
                    }
                    else
                    {
                        res.write('<td></td>');
                        res.write('<td></td>');
                    }
                    if(resu[k].GCAA)
                            {
                                res.write('<td>');
                                res.write(resu[k].GCAA);
                                res.write('</td>');
                                var color=getColor(resu[k].GCAA);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(resu[k].ETOPS)
                            {
                                res.write('<td>');
                                res.write(resu[k].ETOPS);
                                res.write('</td>');
                                var color=getColor(resu[k].ETOPS);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(resu[k].RVSM)
                            {
                                res.write('<td>');
                                res.write(resu[k].RVSM);
                                res.write('</td>');
                                var color=getColor(resu[k].RVSM);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(resu[k].operator_proc)
                            {
                                res.write('<td>');
                                res.write(resu[k].operator_proc);
                                res.write('</td>');
                                var color=getColor(resu[k].operator_proc);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                    if(result[k].REMARK)
                    {
                    res.write('<td>');
                    res.write(result[k].REMARK);
                    res.write('</td>');
                    }
                    else
                    {
                        
                        res.write('<td></td>');
                    }
                res.write('</tr>');
                }
            }
                                res.write("</table></div>");
                                jes2();
                            });
                        };
                        jen1();
                    });
                    var jes2 = () => {
                        connection.query(`SELECT COUNT(*) AS C FROM new_schema.ame_authorisations WHERE LOWER(name) LIKE LOWER('%${req.body.jen}%')`,function(error,resu){
                            if (error) throw error;
                            var lengt = resu[0].C;
                            console.log(lengt);
                            var jen2 = () => {
                                connection.query(`SELECT * FROM new_schema.ame_authorisations WHERE LOWER(name) LIKE LOWER('%${req.body.jen}%')`, function (error, resu) {
                                   if(lengt>0)
                                   {
                                    if(v3==1)
                                    {
                                    res.write("<h2 style='background-color: #007bff; color:white; text-align: center';>AME AUTHORISATIONS</h2>");
                                    res.write("<div class='table-responsive container'>");
                                    res.write("<table class='table table-striped table-hover table-bordered'>");
                                    res.write(`<tr><td>SR NO </td>
                    <td>NAME</td>
                    <td>STAFF_NO</td>
                    <td>ciasl_authn_no</td>
                    <td>ciasl_authn_validity</td><td>Remaining Days</td>
                    <td>fly_dxb</td><td>Remaining Days</td>
                    <td>island_authn_validity</td><td>Remaining Days</td>
                    <td>oman_air</td>
                    <td>qatar</td>
                    <td>sri_lanka</td>
                    <td>kuwait</td>
                    <td>jazeera</td>
                    <td>air_arabia</td>
                    <td>ethihad</td>
                    <td>gulfair</td>
                    <td>island</td>
                    <td>airasia_thai</td>
                    <td>scoot_tiger</td>
                    <td>fly__dxb</td>
                    <td>REMARKS</td></tr>`);
                                   } }
                    for(let k=0;k<lengt;k++) 
                    {
                        if(v3==1)
                        {
                        res.write('<tr>');
                            if(resu[k].sr_no)
                            {
                            res.write('<td>');
                            res.write(resu[k].sr_no.toString());
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].name)
                            {
                            res.write('<td>');
                            res.write(resu[k].name);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].staff_no)
                            {
                            res.write('<td>');
                            res.write(resu[k].staff_no);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].ciasl_authn_no)
                            {
                            res.write('<td>');
                            res.write(resu[k].ciasl_authn_no);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].ciasl_authn_validity)
                            {
                                res.write('<td>');
                                res.write(resu[k].ciasl_authn_validity);
                                res.write('</td>');
                                var color=getColor(resu[k].ciasl_authn_validity);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                        }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(resu[k].fly_dxb)
                            {
                                res.write('<td>');
                                res.write(resu[k].fly_dxb);
                                res.write('</td>');
                                var color=getColor(resu[k].fly_dxb);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(resu[k].island_authn_validity)
                            {
                                res.write('<td>');
                                res.write(resu[k].island_authn_validity);
                                res.write('</td>');
                                var color=getColor(result[i].island_authn_validity);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>'); 
                        }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(resu[k].oman_air)
                            {
                            res.write('<td>');
                            res.write(resu[k].oman_air);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].qatar)
                            {
                            res.write('<td>');
                            res.write(resu[k].qatar);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].sri_lanka)
                            {
                            res.write('<td>');
                            res.write(resu[k].sri_lanka);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].kuwait)
                            {
                            res.write('<td>');
                            res.write(resu[k].kuwait);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].jazeera)
                            {
                            res.write('<td>');
                            res.write(resu[k].jazeera);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].air_arabia)
                            {
                            res.write('<td>');
                            res.write(resu[k].air_arabia);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].ethihad)
                            {
                            res.write('<td>');
                            res.write(resu[k].ethihad);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].gulfair)
                            {
                            res.write('<td>');
                            res.write(resu[k].gulfair);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].island)
                            {
                            res.write('<td>');
                            res.write(resu[k].island);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].airasia_thai)
                            {
                            res.write('<td>');
                            res.write(resu[k].airasia_thai);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].scoot_tiger)
                            {
                            res.write('<td>');
                            res.write(resu[k].scoot_tiger);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].fly__dxb)
                            {
                            res.write('<td>');
                            res.write(resu[k].fly__dxb);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(resu[k].remark)
                            {
                            res.write('<td>');
                            res.write(resu[k].remark);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                        res.write('</tr>');
                        }
                    }
                                    
                                    res.write("</table></div>");
                                    jes3();
                                });
                            };
                            jen2();
                        });
                        var jes3 = () => {
                            connection.query(`SELECT COUNT(*) AS C FROM new_schema.authorisation_coverage WHERE LOWER(name) LIKE LOWER('%${req.body.jen}%')`,function(error,resu){
                                if (error) throw error;
                                var lengt = resu[0].C;
                                console.log(lengt);
                                var jen2 = () => {
                                    connection.query(`SELECT * FROM new_schema.authorisation_coverage WHERE LOWER(name) LIKE LOWER('%${req.body.jen}%')`, function (error, resu) {
                                       if(lengt>0)
                                       {
                                        if(v4==1)
                                        {
                                        res.write("<h2 style='background-color: #007bff; color:white; text-align: center';>AUTHORISATION COVERAGE</h2>");
                                        res.write("<div class='table-responsive container'>");
                                        res.write("<table class='table table-striped table-hover table-bordered'>");
                                        res.write(`
                                        <tr>
    <th rowspan="6">SL No</th>
    <th rowspan="6">NAME </th><th rowspan="6">CAT</th>
    <th>TR</th><th colspan="4">UL</th><th colspan="3">EY</th>
    <th colspan="2" rowspan="3">G9 (GCAA ) Air Arabia </th>
    <th colspan="5">QR</th><th colspan="5">KU</th><th colspan="2">J9</th>
    <th colspan="2">FD</th><th colspan="3">GF</th><th colspan="4">WY</th>
    <th rowspan="3">FZ(FLY DUBAI)</th><th rowspan="3">IASL Maldives</th>
    <th colspan="3" rowspan="3">DGCA(INDIA)</th><th colspan="2" rowspan="3">EASA</th>
</tr>
<tr>
    <th>CAAS</th><th colspan="4">(CAASL)</th><th colspan="3">(GCAA)</th>
    <th colspan="5">(QCAA)</th><th colspan="5">(KW- DGCA)</th>
    <th colspan="2">(KW-DGCA)</th><th colspan="2">(CAAT)</th>
    <th colspan="3">(BCAA)</th><th colspan="4">CAA(OMAN)</th>
</tr>
<tr>
    <th>Tiger </th><th colspan="4">Srilankan</th><th colspan="3">Etihad </th>
    <th colspan="5">Qatar Airways</th><th colspan="5">Kuwait</th>
    <th colspan="2">Jazeera </th><th colspan="2">Thai Air Asia</th>
    <th colspan="3">Gulf Air </th><th colspan="4">OMAN AIR </th>
</tr>
<tr>
    <th>A319/</th><th>A320</th><th>A320</th><th>A320/21</th><th>A330</th>
    <th>A320/21</th><th>A330</th><th>B787</th><th rowspan="3">A320 CFM 56</th>
    <th rowspan="3">A321 CFM LEAP</th><th>A320</th><th>A320</th><th>A330</th>
    <th>B787</th><th rowspan="3">A350 Trent XWB</th><th>A320 </th><th>A320</th>
    <th rowspan="3">A330 T700</th><th rowspan="3">A330 NEO T7000</th>
    <th rowspan="3">B777-300 ER</th><th rowspan="3">A320 CFM 56</th><th>A320</th>
    <th>A320</th><th>A320</th><th>A320/ A321</th><th>A320/A321</th>
    <th rowspan="3">A320/A321 NEO CFM LEAP 1A </th><th>B737</th><th>B737</th>
    <th>B787</th><th>A330</th><th rowspan="3">B737-NG</th><th rowspan="3">A320/ A321 CFM 56</th>
    <th>A320</th><th>A320</th><th rowspan="3">B737 CFM 56-7B</th><th>A320</th><th>A320</th>
</tr>
<tr>    
    <th>A320</th><th>SERIES</th><th>SERIES</th><th rowspan="2">CFM LEAP</th>
    <th rowspan="2">T700</th><th rowspan="2">V2500</th><th rowspan="2">T700</th>
    <th rowspan="2">Genx</th><th>SERIES</th><th rowspan="2">CFM 56</th>
    <th rowspan="2">GE CF6</th><th rowspan="2">Genx</th><th>SERIES</th><th>SERIES</th>
    <th>SERIES</th><th>SERIES</th><th>SERIES</th><th rowspan="2">CFM 56</th>
    <th rowspan="2">V2500</th><th rowspan="2">CFM 56</th><th rowspan="2">MAX</th>
    <th rowspan="2">GENX</th><th rowspan="2">T700</th><th>SERIES</th><th>SERIES</th>
    <th>SERIES</th><th>SERIES</th>
</tr>
<tr>    
    <th>V2500</th><th>V2500</th><th>CFM 56</th><th>V2500</th><th>CFM 56</th>
    <th>LEAP</th><th>LEAP</th><th>V2500</th><th>CFM 56</th><th>V2500</th>
    <th>CFM 56</th><th>V2500</th><th>CFM 56</th>
</tr>
                        `);
                                       } }
                        for(let k=0;k<lengt;k++) 
                        {
                            if(v4==1)
                            {
                                res.write('<tr>');
                                if(resu[k].sl_no)
                                {
                                res.write('<td>');
                                res.write(resu[k].sl_no.toString());
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].name)
                                {
                                res.write('<td style="position:sticky; left:0; z-index:1; background-color:white;">');
                                res.write(resu[k].name);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].cat)
                                {
                                res.write('<td>');
                                res.write(resu[k].cat);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].tiger_v2500=='X')
                                {
                                res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].tiger_v2500);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].srilankan_v2500=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].srilankan_v2500);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].srilankan_cfm56=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].srilankan_cfm56);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].srilankan_cfmleap=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].srilankan_cfmleap);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].srilankan_t700=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].srilankan_t700);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].etihad_v2500=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].etihad_v2500);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].etihad_t700=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].etihad_t700);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].etihad_genx=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].etihad_genx);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].arabia_cfm56=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].arabia_cfm56);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].arabia_cfmleap=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].arabia_cfmleap);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].qatar_v2500=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].qatar_v2500);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].qatar_cfm56=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].qatar_cfm56);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].qatar_gecf6=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].qatar_gecf6);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].qatar_genx=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].qatar_genx);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].qatar_trentxwb=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].qatar_trentxwb);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].kuwait_cfm56=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].kuwait_cfm56);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].kuwait_leap=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].kuwait_leap);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].kuwait_t700=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].kuwait_t700);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].kuwait_neo_t7000=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].kuwait_neo_t7000);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].kuwait_300er=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].kuwait_300er);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].jazeera_cfm56=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].jazeera_cfm56);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].jazeera_leap=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].jazeera_leap);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].thai_v2500=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].thai_v2500);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].thai_cfm56=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].thai_cfm56);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].gulf_cfm56=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].gulf_cfm56);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].gulf_v2500=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].gulf_v2500);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].gulf_neo=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].gulf_neo);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].oman_cfm56=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].oman_cfm56);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].oman_max=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].oman_max);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }   
                                if(resu[k].oman_genx=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].oman_genx);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }   
                                if(resu[k].oman_t700=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].oman_t700);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }  
                                if(resu[k].dubai_ng=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].dubai_ng);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }   
                                if(resu[k].maldives_cfm56=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].maldives_cfm56);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }   
                                if(resu[k].india_v2500=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].india_v2500);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }   
                                if(resu[k].india_cfm56=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].india_cfm56);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].india_cfm567b=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].india_cfm567b);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].easa_v2500=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].easa_v2500);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(resu[k].easa_cfm56=='X')
                                {
                                    res.write('<td style="background-color: #00cc00;">');
                                res.write(resu[k].easa_cfm56);
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                            res.write('</tr>');
                            }
                        }
                                        
                                        res.write("</table></div>");
                                        res.end();
                                        
                                    });
                                };
                                jen2();
                            });
                        };
                    };
                };
            };
            jes();
            
        }
        
        
    });
    
});
app.post('/search_technician',function(req,res){
    fs.readFile("TECHNICIAN.html", function (err, pgResp){
        if (err) {
            res.writeHead(404);
            res.write('Contents you are looking are Not Found');
        } else {
            res.write(pgResp);
            
            console.log(req.body.jen);
            var jes = () => {
                connection.query(`SELECT COUNT(*) AS C FROM new_schema.technician_continuation_trainings WHERE LOWER(name) LIKE LOWER('%${req.body.jen}%') OR LOWER(desgn) LIKE LOWER('%${req.body.jen}%')`,function(error,resu){
                    if (error) throw error;
                    var lengt = resu[0].C;
                    console.log(lengt);
                    var jen = () => {
                        connection.query(`SELECT * FROM new_schema.technician_continuation_trainings WHERE LOWER(name) LIKE LOWER('%${req.body.jen}%') OR LOWER(desgn) LIKE LOWER('%${req.body.jen}%')`, function (error, result) {
                            if(lengt>0)
                            {
                                if(v5==1)
                                {
                            res.write("<div class='table-responsive container'>");
                            res.write("<table class='table table-striped table-hover table-bordered'>");
                            res.write("<tr><td>SR NO </td><td>Name</td><td>Desgn</td><td>Staff No</td><td>HF</td><td>Remaining days</td><td>EWIS</td><td>Remaining days</td><td>SMS</td><td>Remaining days</td><td>IM proc. moe & regln</td><td>Remaining days</td><td>store proc & esds</td><td>Remaining days</td><td>DGR</td><td>Remaining days</td><td>REMARKS</td></tr>");
                            }
                        }
                            for(let i=0;i<lengt;i++) 
                            {
                                if(v5==1)
                                {
                                res.write('<tr>');
                            if(result[i].sr_no)
                            {
                            res.write('<td>');
                            res.write(result[i].sr_no.toString());
                            console.log(result[i].sr_no.toString());
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].name)
                            {
                            res.write('<td>');
                            res.write(result[i].name);
                            console.log(result[i].name);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].desgn)
                            {
                            res.write('<td>');
                            res.write(result[i].desgn);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].staff_no)
                            {
                            res.write('<td>');
                            res.write(result[i].staff_no);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }if(result[i].fts)
                            {
                            
                                res.write('<td>');
                                res.write(result[i].fts);
                                res.write('</td>');
                                var color=getColor(result[i].fts);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>');
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[i].hf)
                            {
                            
                                res.write('<td>');
                                res.write(result[i].hf);
                                res.write('</td>');
                                var color=getColor(result[i].hf);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>');
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[i].ewis)
                            {
                            
                                res.write('<td>');
                                res.write(result[i].ewis);
                                res.write('</td>');
                                var color=getColor(result[i].ewis);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>');
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[i].sms)
                            {
                            
                                res.write('<td>');
                                res.write(result[i].sms);
                                res.write('</td>');
                                var color=getColor(result[i].sms);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>');
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[i].lm_procedure_moe_and_regln)
                            {
                            
                                res.write('<td>');
                                res.write(result[i].lm_procedure_moe_and_regln);
                                res.write('</td>');
                                var color=getColor(result[i].lm_procedure_moe_and_regln);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>');
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[i].store_procedure_and_esds)
                            {
                            
                                res.write('<td>');
                                res.write(result[i].store_procedure_and_esds);
                                res.write('</td>');
                                var color=getColor(result[i].store_procedure_and_esds);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>');
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[i].dgr)
                            {
                            
                                res.write('<td>');
                                res.write(result[i].dgr);
                                res.write('</td>');
                                var color=getColor(result[i].dgr);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>');
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[i].remark)
                            {
                            res.write('<td>');
                            res.write(result[i].remark);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            res.write('</tr>');
                        }
                            }
                            res.write("</table></div>");
                            res.end();
                          });
                          
                          
                            
                        };
                    jen();
                    
                });
            };
            jes();
            
        }
        
        
    });
    
});
app.post('/search_gse',function(req,res){
    fs.readFile("GSE.html", function (err, pgResp){
        if (err) {
            res.writeHead(404);
            res.write('Contents you are looking are Not Found');
        } else {
            res.write(pgResp);
            var keer = () => {
                connection.query(`SELECT COUNT(*) AS C FROM new_schema.gse WHERE LOWER(eqpt_name) LIKE LOWER('%${req.body.jen}%')`,function(error,resu){
                    if (error) throw error;
                    var lengt = resu[0].C;
                    console.log(lengt);
                    var jen = () => {
                        connection.query(`SELECT * FROM new_schema.gse WHERE LOWER(eqpt_name) LIKE LOWER('%${req.body.jen}%')`, function (error, result) {
                            if(lengt>0)
                            {
                                if(v14==1)
                                {
                            res.write("<h2 style='background-color: #007bff; color:white; text-align: center';>GROUND SUPPORT EQPT MAINTENANCE</h2>");
                            res.write("<div class='table-responsive container'>");
                            res.write("<table class='table table-striped table-hover table-bordered'>");
                            res.write(`<tr><td>SR NO </td>
            <td>eqpt_name</td>
            <td>EQPT_id_no</td>
            <td>type_of_check</td>
            <td>LAST CHECK DONE DATE</td>
            <td>NEXT CHECK DUE DATE</td>
            <td>Remaining Days</td>
            </tr>
            `);
                            } }
                            for(let i=0;i<lengt;i++) 
                            {
                                if(v14==1)
                                {
                                res.write('<tr>');
                                if(result[i].sl_no)
                                {
                                res.write('<td>');
                                res.write(result[i].sl_no.toString());
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(result[i].eqpt_name)
                                {
                                res.write('<td>');
                                res.write(result[i].eqpt_name.toString());
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(result[i].eqpt_id_no)
                                {
                                res.write('<td>');
                                res.write(result[i].eqpt_id_no.toString());
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(result[i].type_of_check)
                                {
                                res.write('<td>');
                                res.write(result[i].type_of_check.toString());
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(result[i].last_check)
                                {
                                res.write('<td>');
                                res.write(result[i].last_check.toString());
                                res.write('</td>');
                                }
                                else
                                {
                                    
                                    res.write('<td></td>');
                                }
                                if(result[i].next_check)
                                {
                                    res.write('<td>');
                                    res.write(result[i].next_check);
                                    res.write('</td>');
                                    var color=getColor(result[i].next_check);
                                    res.write('<td style="background-color: ' + color + ';">');
                                    res.write(days_difference.toString());
                                    res.write('</td>');
                                }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            res.write('</tr>');
                        }
                            }
                            res.write("</table></div>");
                            res.end();
                          });
                          
                          
                            
                        };
                    jen();
                    
                });
            };
            keer();
            
        }
        
        
    });
    
});
app.post('/search_tools',function(req,res){
    fs.readFile("TOOLS.html", function (err, pgResp){
        if (err) {
            res.writeHead(404);
            res.write('Contents you are looking are Not Found');
        } else {
            res.write(pgResp);
            
            console.log(req.body.jen);
            var jes = () => {
                connection.query(`SELECT COUNT(*) AS C FROM new_schema.tools_and_equipment_calibration WHERE LOWER(nomenclature) LIKE LOWER('%${req.body.jen}%')`,function(error,resu){
                    if (error) throw error;
                    var lengt = resu[0].C;
                    console.log(lengt);
                    var jen = () => {
                        connection.query(`SELECT * FROM new_schema.tools_and_equipment_calibration WHERE LOWER(nomenclature) LIKE LOWER('%${req.body.jen}%')`, function (error, result) {
                            if(lengt>0)
                            {
                                if(v12==1)
                                {
                            res.write("<h2 style='background-color: #007bff; color:white; text-align: center';>Tools And Equipment Calibration</h2>");
                            res.write("<div class='table-responsive container'>");
                            res.write("<table class='table table-striped table-hover table-bordered'>");
                            res.write("<tr><td>SR NO </td><td>Nomenclature</td><td>range</td><td>part_no</td><td>ser no</td><td>ciasl id no</td><td>calibration date</td><td>calibration due date</td><td>Remaining Days</td><td>calibration done by orgn</td><td>REMARKS</td></tr>");
                            } }
                            for(let i=0;i<lengt;i++) 
                        {
                            if(v12==1)
                            {
                        res.write('<tr>');
                            if(result[i].sr_no)
                            {
                            res.write('<td>');
                            res.write(result[i].sr_no.toString());
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].nomenclature)
                            {
                            res.write('<td>');
                            res.write(result[i].nomenclature);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].rang)
                            {
                            res.write('<td>');
                            res.write(result[i].rang);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].part_no)
                            {
                            res.write('<td>');
                            res.write(result[i].part_no);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].ser_no)
                            {
                            res.write('<td>');
                            res.write(result[i].ser_no);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].ciasl_id_no)
                            {
                            res.write('<td>');
                            res.write(result[i].ciasl_id_no);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].caliberation_date)
                            {
                            res.write('<td>');
                            res.write(result[i].caliberation_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].caliberation_due_date)
                            {
                            
                                res.write('<td>');
                                res.write(result[i].caliberation_due_date);
                                res.write('</td>');
                                var color=getColor(result[i].caliberation_due_date);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>');
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            if(result[i].caliberation_done_by_orgn)
                            {
                            res.write('<td>');
                            res.write(result[i].caliberation_done_by_orgn);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].remarks)
                            {
                            res.write('<td>');
                            res.write(result[i].remarks);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                        res.write('</tr>');
                            }
                        }
                            res.write("</table></div>");
                            res.end();
                          });
                          
                          
                            
                        };
                    if(lengt>0)
                    {
                    jen();
                    }
                });
            };
            jes();
            
        }
        
        
    });
    
});
app.post('/search_storage',function(req,res){
    fs.readFile("STORAGE.html", function (err, pgResp){
        if (err) {
            res.writeHead(404);
            res.write('Contents you are looking are Not Found');
        } else {
            res.write(pgResp);
            var keer = () => {
                connection.query(`SELECT COUNT(*) AS C FROM new_schema.storage_life_monitoring WHERE LOWER(nomenclature) LIKE LOWER('%${req.body.jen}%')`,function(error,resu){
                    if (error) throw error;
                    var lengt = resu[0].C;
                    console.log(lengt);
                    var jen = () => {
                        connection.query(`SELECT * FROM new_schema.storage_life_monitoring WHERE LOWER(nomenclature) LIKE LOWER('%${req.body.jen}%')`, function (error, result) {
                            if(lengt>0)
                            {
                                if(v17==1)
                                {
                            res.write("<h2 style='background-color: #007bff; color:white; text-align: center';>STORAGE LIFE MONITORING</h2>");
                            res.write("<div class='table-responsive container'>");
                            res.write("<table class='table table-striped table-hover table-bordered'>");
                            res.write(`<tr><th>SL NO</th>
            <th>Nomenclature</th>
            <th>Part No</th>
            <th>Batch No</th>
            <th>Storage Life Expiry</th>
            <th>Remaining Days</th>
            </tr>
            `);
                            } }
                            for(let i=0;i<lengt;i++) 
                            {
                                if(v17==1)
                                {
                                res.write('<tr>');
                                if(result[i].sl_no)
                            {
                            res.write('<td>');
                            res.write(result[i].sl_no.toString());
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].nomenclature)
                            {
                            res.write('<td>');
                            res.write(result[i].nomenclature.toString());
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].part_no)
                            {
                            res.write('<td>');
                            res.write(result[i].part_no.toString());
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].batch_no)
                            {
                            res.write('<td>');
                            res.write(result[i].batch_no.toString());
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            
                            if(result[i].storage_life)
                            {
                                res.write('<td>');
                                res.write(result[i].storage_life);
                                res.write('</td>');
                                var color=getColor(result[i].storage_life);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>');
                                }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            res.write('</tr>');
                        }
                            }
                            res.write("</table></div>");
                            res.end();
                          });
                          
                          
                            
                        };
                    jen();
                    
                });
            };
            keer();
            
        }
        
        
    });
    
});
app.post('/search_quality',function(req,res){
    fs.readFile("QUALITY.html", function (err, pgResp){
        if (err) {
            res.writeHead(404);
            res.write('Contents you are looking are Not Found');
        } else {
            res.write(pgResp);
            var keer = () => {
                connection.query(`SELECT COUNT(*) AS C FROM new_schema.regulators_amo_approvals WHERE LOWER(regulator) LIKE LOWER('%${req.body.jen}%')`,function(error,resu){
                    if (error) throw error;
                    var lengt = resu[0].C;
                    console.log(lengt);
                    var jen = () => {
                        connection.query(`SELECT * FROM new_schema.regulators_amo_approvals WHERE LOWER(regulator) LIKE LOWER('%${req.body.jen}%')`, function (error, result) {
                            if(lengt>0)
                            {
                                if(v15==1)
                                {
                                res.write("<h2 style='background-color: #007bff; color:white; text-align: center';>REGULATOR APPROVAL TABLE</h2>");
                            res.write("<div class='table-responsive container'>");
                            res.write("<table class='table table-striped table-hover table-bordered'>");
                            res.write(`
             <tr>
      <th rowspan="2">Sl. No</th>
      <th rowspan="2">Regulator</th>
      <th rowspan="2">AMO Approval No</th>
      <th rowspan="2">Initial Approval Date</th>
      <th rowspan="2">Approval Validity Date</th>
      <th rowspan="2">Remaining Days</th>
      <th colspan="4">Scope of Approval</th>
      <th rowspan="2">Operators Under the Regulator</th>
      <th rowspan="2">Certifying Staff B1</th>
      <th rowspan="2">Certifying Staff B2</th>
    </tr>
    <tr>
        <th>A1</th>
        <th>A2</th>
        <th>B1</th>
        <th>B2</th>
      </tr>
    <tr>
            `);
                            } }
                            for(let i=0;i<lengt;i++) 
                            { if(v15==1)
                                {
                                res.write('<tr>');
                            if(result[i].sl_no)
                            {
                            res.write('<td>');
                            res.write(result[i].sl_no.toString());
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].regulator)
                            {
                            res.write('<td>');
                            res.write(result[i].regulator);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].amo_approval_no)
                            {
                            res.write('<td>');
                            res.write(result[i].amo_approval_no);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].initial_approval_date)
                            {
                            res.write('<td>');
                            res.write(result[i].initial_approval_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].approval_validity_date)
                            {
                                res.write('<td>');
                                res.write(result[i].approval_validity_date);
                                res.write('</td>');
                                var color=getColor(result[i].approval_validity_date);
                                res.write('<td style="background-color: ' + color + ';">');
                                res.write(days_difference.toString());
                                res.write('</td>');
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            
                            
                            if(result[i].scope_of_approval_a1)
                            {
                            res.write('<td>');
                            res.write(result[i].scope_of_approval_a1);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].scope_of_approval_a2)
                            {
                            res.write('<td>');
                            res.write(result[i].scope_of_approval_a2);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].scope_of_approval_a3)
                            {
                            res.write('<td>');
                            res.write(result[i].scope_of_approval_a3);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].scope_of_approval_a4)
                            {
                            res.write('<td>');
                            res.write(result[i].scope_of_approval_a4);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].operators_under_regulator)
                            {
                            res.write('<td>');
                            res.write(result[i].operators_under_regulator);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].staff_b1)
                            {
                            res.write('<td>');
                            res.write(result[i].staff_b1);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].staff_b2)
                            {
                            res.write('<td>');
                            res.write(result[i].staff_b2);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                        res.write('</tr>');
                                }
                            }
                            res.write("</table></div>");
                            keerthi();
                          });
                          
                        };
                    jen();
                    
                });
            };
            keer();
        }
        var keerthi = () => {
            connection.query(`SELECT COUNT(*) AS C FROM new_schema.operators WHERE LOWER(operator) LIKE LOWER('%${req.body.jen}%')`,function(error,resu){
                if (error) throw error;
                var lengt = resu[0].C;
                console.log(lengt);
                var jen = () => {
                    connection.query(`SELECT * FROM new_schema.operators WHERE LOWER(operator) LIKE LOWER('%${req.body.jen}%')`, function (error, result) {
                        if(lengt>0)
                        {   if(v16==1)
                            {
                            res.write("<h2 style='background-color: #007bff; color:white; text-align: center';>OPERATORS</h2>");
                        res.write("<div class='table-responsive container'>");
                        res.write("<table class='table table-striped table-hover table-bordered'>");
                        res.write(`
            <tr>
            <th>SL_NO</th>
            <th>OPERATOR</th>
            <th>OPERATOR CODE</th>
            <th>INITIAL AGREEMENT DATE</th>
            <th>AGREEMENT VALIDITY DATE</th>
            <th>Remaining Days</th>
            </tr>
            `);
                        } }
                        for(let i=0;i<lengt;i++) 
                    {
                        if(v16==1)
                        {
                        res.write('<tr>');
                            if(result[i].sl_no)
                            {
                            res.write('<td>');
                            res.write(result[i].sl_no.toString());
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].operator)
                            {
                            res.write('<td>');
                            res.write(result[i].operator);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].op_code)
                            {
                            res.write('<td>');
                            res.write(result[i].op_code);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].ini_agree_date)
                            {
                            res.write('<td>');
                            res.write(result[i].ini_agree_date);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].agree_validity_date)
                            {
                            res.write('<td>');
                            res.write(result[i].agree_validity_date);
                            res.write('</td>');
                            var color=getColor(result[i].agree_validity_date);
                            res.write('<td style="background-color: ' + color + ';">');
                            res.write(days_difference.toString());
                            res.write('</td>');
                            }
                            else
                            {
                                res.write('<td></td>');
                                res.write('<td></td>');
                            }
                            
                            
                            
                        res.write('</tr>');
                        }
                    }
                        res.write("</table></div>");
                        res.end();
                      });
                      
                      
                        
                    };
                jen();
                
            });
        }
        
        
    });
});
app.post('/search_permission',function(req,res){
    fs.readFile("PERMISSION.html", function (err, pgResp){
        if (err) {
            res.writeHead(404);
            res.write('Contents you are looking are Not Found');
        } else {
            res.write(pgResp);
            var keer = () => {
                connection.query(`SELECT COUNT(*) AS C FROM new_schema.permissions WHERE LOWER(user_fullname) LIKE LOWER('%${req.body.jen}%')`,function(error,resu){
                    if (error) throw error;
                    var lengt = resu[0].C;
                    console.log(lengt);
                    var jen = () => {
                        connection.query(`SELECT * FROM new_schema.permissions WHERE LOWER(user_fullname) LIKE LOWER('%${req.body.jen}%')`, function (error, result) {
                            if(lengt>0)
                            {
                            res.write("<h2 style='background-color: #007bff; color:white; text-align: center';>PERMISSIONS</h2>");
                            res.write("<div class='table-responsive container'>");
                            res.write("<table class='table table-striped table-hover table-bordered'>");
                            res.write(`<tr><th>USER ID</th>
                            <th style="position:sticky; left:0; z-index:1; background-color:white;">USER FULLNAME</th>
                            <th>AME LICENSE</th>
            <th>AME CONTINUATION</th>
            <th>AME AUTHORISATION</th>
            <th>AUTHORISATION COVERAGE</th>
            <th>TECHNICIANS</th>
            <th>REGULAR AUDIT</th>
            <th>AUDIT BY AIRLINE</th>
            <th>QUALITY AUDIT QUALITY</th>
            <th>QUALITY AUDIT LINE</th>
            <th>AUDIT EXTERNAL CIASL</th>
            <th>INTERNAL QUALITY</th>
            <th>TOOLS</th>
            <th>ALL STAFF</th>
            <th>GROUND SUPPORT</th>
            <th>REGULATOR APPROVAL</th>
            <th>OPERATORS</th>
            <th>STORAGE LIFE</th>
            </tr>
            `);
                            }
                            for(let i=0;i<lengt;i++) 
                            {
                                
                                res.write('<tr>');
                               if(result[i].user_id)
                            {
                            res.write('<td>');
                            res.write(result[i].user_id.toString());
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].user_fullname)
                            {
                            res.write('<td style="position:sticky; left:0; z-index:1; background-color:white;">');
                            res.write(result[i].user_fullname);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].AME_LICENSE)
                            {
                            res.write('<td>');
                            res.write(result[i].AME_LICENSE);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].AME_CONTINUATION)
                            {
                            res.write('<td>');
                            res.write(result[i].AME_CONTINUATION);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }if(result[i].AME_AUTHORISATION)
                            {
                            res.write('<td>');
                            res.write(result[i].AME_AUTHORISATION);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }if(result[i].AUTHORISATION_COVERAGE)
                            {
                            res.write('<td>');
                            res.write(result[i].AUTHORISATION_COVERAGE);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }if(result[i].TECHNICIANS)
                            {
                            res.write('<td>');
                            res.write(result[i].TECHNICIANS);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }if(result[i].REGULAR_AUDIT)
                            {
                            res.write('<td>');
                            res.write(result[i].REGULAR_AUDIT);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }if(result[i].AUDIT_BY_AIRLINE)
                            {
                            res.write('<td>');
                            res.write(result[i].AUDIT_BY_AIRLINE);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }if(result[i].QUALITY_AUDIT_QUALITY)
                            {
                            res.write('<td>');
                            res.write(result[i].QUALITY_AUDIT_QUALITY);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }if(result[i].QUALITY_AUDIT_LINE)
                            {
                            res.write('<td>');
                            res.write(result[i].QUALITY_AUDIT_LINE);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }if(result[i].AUDIT_EXTERNAL_CIASL)
                            {
                            res.write('<td>');
                            res.write(result[i].AUDIT_EXTERNAL_CIASL);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }if(result[i].INTERNAL_QUALITY)
                            {
                            res.write('<td>');
                            res.write(result[i].INTERNAL_QUALITY);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].TOOLS)
                            {
                            res.write('<td>');
                            res.write(result[i].TOOLS);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].ALL_STAFF)
                            {
                            res.write('<td>');
                            res.write(result[i].ALL_STAFF);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }if(result[i].GROUND_SUPPORT)
                            {
                            res.write('<td>');
                            res.write(result[i].GROUND_SUPPORT);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].REGULATOR_APPROVAL)
                            {
                            res.write('<td>');
                            res.write(result[i].REGULATOR_APPROVAL);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].OPERATORS)
                            {
                            res.write('<td>');
                            res.write(result[i].OPERATORS);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            if(result[i].STORAGE_LIFE)
                            {
                            res.write('<td>');
                            res.write(result[i].STORAGE_LIFE);
                            res.write('</td>');
                            }
                            else
                            {
                                
                                res.write('<td></td>');
                            }
                            res.write('</tr>');
                            }
                            res.write("</table></div>");
                            res.end();
                          });
                          
                          
                            
                        };
                    jen();
                    
                });
            };
            keer();
            
        }
        
        
    });
    
});



app.post('/amelicense',function(req,res){
    /*
    var sql1 = "INSERT INTO new_schema.amelicense (sr_no,name,license_cat,dgca_lic_no,dgca_lic_validity,easa_lic_no,easa_lic_validity,A320_series_V2500,A320_series_CFM_56,A320_series_LEAP_1A,A320_series_p_and_w,A330_T700,A330_NEO_T70000,A330_GE_CF6,A350_TRENT_XWB,B737_NG_CFM56_7B,B737_MAX_LEAP_1B,B777_GE_90,B787_GEnX,remarks) VALUES ?";
    var values1 = [[Number(req.body.SR_NO),req.body.NAME,req.body.LIC_CAT,req.body.DGCA_LIC_NO,req.body.DGCA_LIC_VALIDITY,req.body.EASA_LIC_NO,req.body.EASA_LIC_VALIDITY,req.body.A320_series_V2500,req.body.A320_series_CFM_56,req.body.A320_series_LEAP_1A,req.body.A320_series_p_and_w,req.body.A330_T700,req.body.A330_NEO_T70000,req.body.A330_GE_CF6,req.body.A350_TRENT_XWB,req.body.B737_NG_CFM56_7B,req.body.B737_MAX_LEAP_1B,req.body.B777_GE_90,req.body.B787_GEnX,req.body.REMARKS]];
    connection.query(sql1,[values1],function(err,result){
        if (err) throw err;
       length_of_rows_amelicense++;
        return res.redirect('/ENGINEER.html');
        
    });
    */
   if(req.body.SR_NO>0){
    var query = 'SELECT * FROM new_schema.amelicense WHERE sr_no = ?';
    var valueToCheck = req.body.SR_NO;
    
    // Execute the SELECT query
    connection.query(query, [valueToCheck], (error, results) => {
      if (error) {
        console.error('Error executing query: ' + error.stack);
      }
      if (results.length > 0) {
        console.log('Row exists in the database.');
    
        if(req.body.NAME)
        {connection.query('UPDATE new_schema.amelicense SET name = ? WHERE sr_no = ?', [req.body.NAME, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.LIC_CAT)
        {connection.query('UPDATE new_schema.amelicense SET license_cat = ? WHERE sr_no = ?', [req.body.LIC_CAT, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.DGCA_LIC_NO)
        {connection.query('UPDATE new_schema.amelicense SET dgca_lic_no = ? WHERE sr_no = ?', [req.body.DGCA_LIC_NO, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.DGCA_LIC_VALIDITY)
        {
            var inputDate = req.body.DGCA_LIC_VALIDITY;
            console.log(inputDate);
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
            console.log(days_difference_5);

            if(days_difference_5<2)
            {
                count_amelicense_red++;
            }
            else if(days_difference_5<15)
            {
                count_amelicense_orange++;
            }
            else if(days_difference_5<30)
            {
                count_amelicense++;
            }

            connection.query('UPDATE new_schema.amelicense SET dgca_lic_validity = ? WHERE sr_no = ?', [req.body.DGCA_LIC_VALIDITY, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.EASA_LIC_NO)
        {connection.query('UPDATE new_schema.amelicense SET easa_lic_no = ? WHERE sr_no = ?', [req.body.EASA_LIC_NO, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.EASA_LIC_VALIDITY)
        {
            var inputDate = req.body.EASA_LIC_VALIDITY;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);


            if(days_difference_5<2)
            {
                count_amelicense_red++;
            }
            else if(days_difference_5<15)
            {
                count_amelicense_orange++;
            }
            else if(days_difference_5<30)
            {
                count_amelicense++;
            }
            connection.query('UPDATE new_schema.amelicense SET easa_lic_validity = ? WHERE sr_no = ?', [req.body.EASA_LIC_VALIDITY, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.A320_series_V2500)
        {connection.query('UPDATE new_schema.amelicense SET A320_series_V2500 = ? WHERE sr_no = ?', [req.body.A320_series_V2500, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.A320_series_CFM_56)
        {connection.query('UPDATE new_schema.amelicense SET A320_series_CFM_56 = ? WHERE sr_no = ?', [req.body.A320_series_CFM_56, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.A320_series_LEAP_1A)
        {connection.query('UPDATE new_schema.amelicense SET A320_series_LEAP_1A = ? WHERE sr_no = ?', [req.body.A320_series_LEAP_1A, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.A320_series_p_and_w)
        {connection.query('UPDATE new_schema.amelicense SET A320_series_p_and_w = ? WHERE sr_no = ?', [req.body.A320_series_p_and_w, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.A330_T700)
        {connection.query('UPDATE new_schema.amelicense SET A330_T700 = ? WHERE sr_no = ?', [req.body.A330_T700, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.A330_GE_CF6)
        {connection.query('UPDATE new_schema.amelicense SET A330_GE_CF6 = ? WHERE sr_no = ?', [req.body.A330_GE_CF6, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.A330_NEO_T7000)
        {connection.query('UPDATE new_schema.amelicense SET A330_NEO_T7000 = ? WHERE sr_no = ?', [req.body.A330_NEO_T7000, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.A350_TRENT_XWB)
        {connection.query('UPDATE new_schema.amelicense SET A350_TRENT_XWB = ? WHERE sr_no = ?', [req.body.A350_TRENT_XWB, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.B737_NG_CFM56_7B)
        {connection.query('UPDATE new_schema.amelicense SET B737_NG_CFM56_7B = ? WHERE sr_no = ?', [req.body.B737_NG_CFM56_7B, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.B737_MAX_LEAP_1B)
        {connection.query('UPDATE new_schema.amelicense SET B737_MAX_LEAP_1B = ? WHERE sr_no = ?', [req.body.B737_MAX_LEAP_1B, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.B777_GE_90)
        {connection.query('UPDATE new_schema.amelicense SET B777_GE_90 = ? WHERE sr_no = ?', [req.body.B777_GE_90, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.B787_GEnX)
        {connection.query('UPDATE new_schema.amelicense SET B787_GEnX = ? WHERE sr_no = ?', [req.body.B787_GEnX, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.remarks)
        {connection.query('UPDATE new_schema.amelicense SET remarks = ? WHERE sr_no = ?', [req.body.remarks, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}

        return res.redirect('/ENGINEER.html');
    } else {
    var sql = "INSERT INTO new_schema.amelicense (sr_no,name,license_cat,dgca_lic_no,dgca_lic_validity,easa_lic_no,easa_lic_validity,A320_series_V2500,A320_series_CFM_56,A320_series_LEAP_1A,A320_series_p_and_w,A330_T700,A330_GE_CF6,A330_NEO_T7000,A350_TRENT_XWB,B737_NG_CFM56_7B,B737_MAX_LEAP_1B,B777_GE_90,B787_GEnX,remarks) VALUES ?" +
                  "ON DUPLICATE KEY UPDATE " +
                  "name=VALUES(name), " +
                 "license_cat=VALUES(license_cat), " +
                  "dgca_lic_no=VALUES(dgca_lic_no), " +
                  "dgca_lic_validity=VALUES(dgca_lic_validity), " +
                  "easa_lic_no=VALUES(easa_lic_no),"+
			"easa_lic_validity=VALUES(easa_lic_validity),"+
			"A320_series_V2500=VALUES(A320_series_V2500),"+
			"A320_series_CFM_56=VALUES(A320_series_CFM_56),"+
			"A320_series_LEAP_1A=VALUES(A320_series_LEAP_1A),"+
			"A320_series_p_and_w=VALUES(A320_series_p_and_w),"+
			"A330_T700=VALUES(A330_T700),"+
            "A330_GE_CF6=VALUES(A330_GE_CF6),"+
			"A330_NEO_T7000=VALUES(A330_NEO_T7000),"+
			"A350_TRENT_XWB=VALUES(A350_TRENT_XWB),"+
			"B737_NG_CFM56_7B=VALUES(B737_NG_CFM56_7B),"+
			"B737_MAX_LEAP_1B=VALUES(B737_MAX_LEAP_1B),"+
			"B777_GE_90=VALUES(B777_GE_90),"+
			"B787_GEnX=VALUES(B787_GEnX),"+
			"remarks=VALUES(remarks)";
        var values = [[Number(req.body.SR_NO),req.body.NAME,req.body.LIC_CAT,req.body.DGCA_LIC_NO,req.body.DGCA_LIC_VALIDITY,req.body.EASA_LIC_NO,req.body.EASA_LIC_VALIDITY,req.body.A320_series_V2500,req.body.A320_series_CFM_56,req.body.A320_series_LEAP_1A,req.body.A320_series_p_and_w,req.body.A330_T700,req.body.A330_GE_CF6,req.body.A330_NEO_T7000,req.body.A350_TRENT_XWB,req.body.B737_NG_CFM56_7B,req.body.B737_MAX_LEAP_1B,req.body.B777_GE_90,req.body.B787_GEnX,req.body.remarks]];
        connection.query(sql,[values],function(err,result){
            if (err) throw err;
            if (result.affectedRows == 1) {
                // If a new row was inserted
                length_of_rows_amelicense++;
            }
        
            console.log(req.body.DGCA_LIC_VALIDITY);
            var inputDate = req.body.DGCA_LIC_VALIDITY;
            console.log(inputDate);
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
            console.log(days_difference_5);

            if(days_difference_5<2)
            {
                count_amelicense_red++;
            }
            else if(days_difference_5<15)
            {
                count_amelicense_orange++;
            }
            else if(days_difference_5<30)
            {
                count_amelicense++;
            }
            

            var inputDate = req.body.EASA_LIC_VALIDITY;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);


            if(days_difference_5<2)
            {
                count_amelicense_red++;
            }
            else if(days_difference_5<15)
            {
                count_amelicense_orange++;
            }
            else if(days_difference_5<30)
            {
                count_amelicense++;
            }
            return res.redirect('/ENGINEER.html');
        });
    }
});
   }
   else{
   return res.redirect('/ENGINEER.html');}
});
app.post('/ame_continuation_trainings',function(req,res){
    if(req.body.SR_NO>0){
    var query = 'SELECT * FROM new_schema.ame_continuation_trainings WHERE sr_no = ?';
    var valueToCheck = req.body.SR_NO;
    
    // Execute the SELECT query
    connection.query(query, [valueToCheck], (error, results) => {
      if (error) {
        console.error('Error executing query: ' + error.stack);
      }
      if (results.length > 0) {
        console.log('Row exists in the database.');
    
        if(req.body.NAME)
        {connection.query('UPDATE new_schema.ame_continuation_trainings SET name = ? WHERE sr_no = ?', [req.body.NAME, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.STAFF_NO)
        {connection.query('UPDATE new_schema.ame_continuation_trainings SET staff_no = ? WHERE sr_no = ?', [req.body.STAFF_NO, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.A320_V2500)
        {
            var inputDate = req.body.A320_V2500;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
            var inputDateTime = new Date(yyyy, mm - 1, dd); 
            var oneDayMs = 24 * 60 * 60 * 1000;
            var  currentDate = new Date();
            var d1 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
            if(d1<2){count_ame_continuation_trainings_red++;}
            else if(d1<15){count_ame_continuation_trainings_orange++;}
            else if(d1<30){count_ame_continuation_trainings++;}

            connection.query('UPDATE new_schema.ame_continuation_trainings SET A320_V2500 = ? WHERE sr_no = ?', [req.body.A320_V2500, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.A320_CFM_LEAP_1A)
        {
            var inputDate = req.body.A320_CFM_LEAP_1A;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
            var inputDateTime = new Date(yyyy, mm - 1, dd); 
            var oneDayMs = 24 * 60 * 60 * 1000;
            var  currentDate = new Date();
            var d2 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
            if(d2<2){count_ame_continuation_trainings_red++;}
            else if(d2<15){count_ame_continuation_trainings_orange++;}
            else if(d2<30){count_ame_continuation_trainings++;}

            connection.query('UPDATE new_schema.ame_continuation_trainings SET A320_CFM_LEAP_1A = ? WHERE sr_no = ?', [req.body.A320_CFM_LEAP_1A, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.A330_RR_T700)
        {
            var inputDate = req.body.A330_RR_T700;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d3 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(d3<2){count_ame_continuation_trainings_red++;}
        else if(d3<15){count_ame_continuation_trainings_orange++;}
        else if(d3<30){count_ame_continuation_trainings++;}

            connection.query('UPDATE new_schema.ame_continuation_trainings SET A330_RR_T700 = ? WHERE sr_no = ?', [req.body.A330_RR_T700, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.A330_GE_CF6)
        {
            var inputDate = req.body.A330_GE_CF6;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
            var inputDateTime = new Date(yyyy, mm - 1, dd); 
            var oneDayMs = 24 * 60 * 60 * 1000;
            var  currentDate = new Date();
            var d4 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
            if(d4<2){count_ame_continuation_trainings_red++;}
            else if(d4<15){count_ame_continuation_trainings_orange++;}
            else if(d4<30){count_ame_continuation_trainings++;}
            connection.query('UPDATE new_schema.ame_continuation_trainings SET A330_GE_CF6 = ? WHERE sr_no = ?', [req.body.A330_GE_CF6, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.A330_NEO_RR_T7000)
        {
            var inputDate = req.body.A330_NEO_RR_T7000;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
            var inputDateTime = new Date(yyyy, mm - 1, dd); 
            var oneDayMs = 24 * 60 * 60 * 1000;
            var  currentDate = new Date();
            var d5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
            if(d5<2){count_ame_continuation_trainings_red++;}
            else if(d5<15){count_ame_continuation_trainings_orange++;}
            else if(d5<30){count_ame_continuation_trainings++;}
            connection.query('UPDATE new_schema.ame_continuation_trainings SET A330_NEO_RR_T7000 = ? WHERE sr_no = ?', [req.body.A330_NEO_RR_T7000, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.A330_P_AND_W)
        {
            var inputDate = req.body.A330_P_AND_W;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
            var inputDateTime = new Date(yyyy, mm - 1, dd); 
            var oneDayMs = 24 * 60 * 60 * 1000;
            var  currentDate = new Date();
            var d6 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
            if(d6<2){count_ame_continuation_trainings_red++;}
            else if(d6<15){count_ame_continuation_trainings_orange++;}
            else if(d6<30){count_ame_continuation_trainings++;}
            connection.query('UPDATE new_schema.ame_continuation_trainings SET A330_P_AND_W = ? WHERE sr_no = ?', [req.body.A330_P_AND_W, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.A350_RR_T_XWB)
        {
            var inputDate = req.body.A350_RR_T_XWB;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d7 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(d7<2){count_ame_continuation_trainings_red++;}
        else if(d7<15){count_ame_continuation_trainings_orange++;}
        else if(d7<30){count_ame_continuation_trainings++;}
            connection.query('UPDATE new_schema.ame_continuation_trainings SET A350_RR_T_XWB = ? WHERE sr_no = ?', [req.body.A350_RR_T_XWB, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.B737_CFM56)
        {
            var inputDate = req.body.B737_CFM56;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
            var inputDateTime = new Date(yyyy, mm - 1, dd); 
            var oneDayMs = 24 * 60 * 60 * 1000;
            var  currentDate = new Date();
            var d8 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
            if(d8<2){count_ame_continuation_trainings_red++;}
            else if(d8<15){count_ame_continuation_trainings_orange++;}
            else if(d8<30){count_ame_continuation_trainings++;}
            connection.query('UPDATE new_schema.ame_continuation_trainings SET B737_CFM56 = ? WHERE sr_no = ?', [req.body.B737_CFM56, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.B737_MAX_CFM_LEAP1B)
        {
            var inputDate = req.body.B737_MAX_CFM_LEAP1B;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d9 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(d9<2){count_ame_continuation_trainings_red++;}
        else if(d9<15){count_ame_continuation_trainings_orange++;}
        else if(d9<30){count_ame_continuation_trainings++;}
            connection.query('UPDATE new_schema.ame_continuation_trainings SET B737_MAX_CFM_LEAP1B = ? WHERE sr_no = ?', [req.body.B737_MAX_CFM_LEAP1B, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.B777_GE90)
        {
            var inputDate = req.body.B777_GE90;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d10 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(d10<2){count_ame_continuation_trainings_red++;}
        else if(d10<15){count_ame_continuation_trainings_orange++;}
        else if(d10<30){count_ame_continuation_trainings++;}
            connection.query('UPDATE new_schema.ame_continuation_trainings SET B777_GE90 = ? WHERE sr_no = ?', [req.body.B777_GE90, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.B787_GENX)
        {
            var inputDate = req.body.B787_GENX;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d11 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(d11<2){count_ame_continuation_trainings_red++;}
        else if(d11<15){count_ame_continuation_trainings_orange++;}
        else if(d11<30){count_ame_continuation_trainings++;}
            connection.query('UPDATE new_schema.ame_continuation_trainings SET B787_GENX = ? WHERE sr_no = ?', [req.body.B787_GENX, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.ADDNL_REFR)
        {
            var inputDate = req.body.ADDNL_REFR;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d12 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(d12<2){count_ame_continuation_trainings_red++;}
        else if(d12<15){count_ame_continuation_trainings_orange++;}
        else if(d12<30){count_ame_continuation_trainings++;}
            connection.query('UPDATE new_schema.ame_continuation_trainings SET ADDNL_REFR = ? WHERE sr_no = ?', [req.body.ADDNL_REFR, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.HF)
        {
            var inputDate = req.body.HF;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d13 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(d13<2){count_ame_continuation_trainings_red++;}
        else if(d13<15){count_ame_continuation_trainings_orange++;}
        else if(d13<30){count_ame_continuation_trainings++;}
            connection.query('UPDATE new_schema.ame_continuation_trainings SET HF = ? WHERE sr_no = ?', [req.body.HF, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.FTS)
        {
            var inputDate = req.body.FTS;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d14 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(d14<2){count_ame_continuation_trainings_red++;}
        else if(d14<15){count_ame_continuation_trainings_orange++;}
        else if(d14<30){count_ame_continuation_trainings++;}
            connection.query('UPDATE new_schema.ame_continuation_trainings SET FTS = ? WHERE sr_no = ?', [req.body.FTS, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.EWIS)
        {
            var inputDate = req.body.EWIS;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d15 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(d15<2){count_ame_continuation_trainings_red++;}
        else if(d15<15){count_ame_continuation_trainings_orange++;}
        else if(d15<30){count_ame_continuation_trainings++;}
            connection.query('UPDATE new_schema.ame_continuation_trainings SET EWIS = ? WHERE sr_no = ?', [req.body.EWIS, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.SMS)
        {
            var inputDate = req.body.SMS;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d16 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(d16<2){count_ame_continuation_trainings_red++;}
        else if(d16<15){count_ame_continuation_trainings_orange++;}
        else if(d16<30){count_ame_continuation_trainings++;}
            connection.query('UPDATE new_schema.ame_continuation_trainings SET SMS = ? WHERE sr_no = ?', [req.body.SMS, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.REGULATIONS)
        {
            var inputDate = req.body.REGULATIONS;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d17 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(d17<2){count_ame_continuation_trainings_red++;}
        else if(d17<15){count_ame_continuation_trainings_orange++;}
        else if(d17<30){count_ame_continuation_trainings++;}
            connection.query('UPDATE new_schema.ame_continuation_trainings SET REGULATIONS = ? WHERE sr_no = ?', [req.body.REGULATIONS, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.GCAA)
        {
            var inputDate = req.body.GCAA;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d18 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(d18<2){count_ame_continuation_trainings_red++;}
        else if(d18<15){count_ame_continuation_trainings_orange++;}
        else if(d18<30){count_ame_continuation_trainings++;}
            connection.query('UPDATE new_schema.ame_continuation_trainings SET GCAA = ? WHERE sr_no = ?', [req.body.GCAA, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.ETOPS)
        {
            var inputDate = req.body.ETOPS;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d19 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(d19<2){count_ame_continuation_trainings_red++;}
        else if(d19<15){count_ame_continuation_trainings_orange++;}
        else if(d19<30){count_ame_continuation_trainings++;}
            connection.query('UPDATE new_schema.ame_continuation_trainings SET ETOPS = ? WHERE sr_no = ?', [req.body.ETOPS, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.RVSM)
        {
            var inputDate = req.body.RVSM;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d20 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(d20<2){count_ame_continuation_trainings_red++;}
        else if(d20<15){count_ame_continuation_trainings_orange++;}
        else if(d20<30){count_ame_continuation_trainings++;}
            connection.query('UPDATE new_schema.ame_continuation_trainings SET RVSM = ? WHERE sr_no = ?', [req.body.RVSM, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.OPER_PROC)
        {
            var inputDate = req.body.OPER_PROC;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d21 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(d21<2){count_ame_continuation_trainings_red++;}
        else if(d21<15){count_ame_continuation_trainings_orange++;}
        else if(d21<30){count_ame_continuation_trainings++;}
            connection.query('UPDATE new_schema.ame_continuation_trainings SET operator_proc = ? WHERE sr_no = ?', [req.body.OPER_PROC, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.REMARK)
        {connection.query('UPDATE new_schema.ame_continuation_trainings SET REMARK = ? WHERE sr_no = ?', [req.body.REMARK, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}

        return res.redirect('/ENGINEER.html');

    } else {


    var sql = "INSERT INTO new_schema.ame_continuation_trainings (sr_no,name,staff_no,A320_V2500,A320_CFM_LEAP_1A,A330_RR_T700,A330_GE_CF6,A330_NEO_RR_T7000,A330_P_AND_W,A350_RR_T_XWB,B737_CFM56,B737_MAX_CFM_LEAP1B,B777_GE90,B787_GENX,ADDNL_REFR,HF,FTS,EWIS,SMS,REGULATIONS,GCAA,ETOPS,RVSM,operator_proc,REMARK) VALUES ?" +
                  "ON DUPLICATE KEY UPDATE " +
                  "name=VALUES(name), " +
                 	"staff_no=VALUES(staff_no), " +
			"A320_V2500=VALUES(A320_V2500), " +
			"A320_CFM_LEAP_1A=VALUES(A320_CFM_LEAP_1A), " +
			"A330_RR_T700=VALUES(A330_RR_T700), " +
			
			"A330_GE_CF6=VALUES(A330_GE_CF6), " +
            "A330_NEO_RR_T7000=VALUES(A330_NEO_RR_T7000), " +
			"A330_P_AND_W=VALUES(A330_P_AND_W), " +
			"A350_RR_T_XWB=VALUES(A350_RR_T_XWB), " +
			"B737_CFM56=VALUES(B737_CFM56), " +
			"B737_MAX_CFM_LEAP1B=VALUES(B737_MAX_CFM_LEAP1B), " +
                 	"B777_GE90=VALUES(B777_GE90), " +
			"B787_GENX=VALUES(B787_GENX), " +
			"ADDNL_REFR=VALUES(ADDNL_REFR), " +
			"HF=VALUES(HF), " +
			"FTS=VALUES(FTS), " +
			"EWIS=VALUES(EWIS), " +
			"SMS=VALUES(SMS), " +
            "REGULATIONS=VALUES(REGULATIONS), " +
			"GCAA=VALUES(GCAA), " +
            "ETOPS=VALUES(ETOPS), " +
            "RVSM=VALUES(RVSM), " +
            "operator_proc=VALUES(operator_proc), " +
			"REMARK=VALUES(REMARK)";
        var values = [[Number(req.body.SR_NO),req.body.NAME,req.body.STAFF_NO,req.body.A320_V2500,req.body.A320_CFM_LEAP_1A,req.body.A330_RR_T700,req.body.A330_GE_CF6,req.body.A330_NEO_RR_T7000,req.body.A330_P_AND_W,req.body.A350_RR_T_XWB,req.body.B737_CFM56,req.body.B737_MAX_CFM_LEAP1B,req.body.B777_GE90,req.body.B787_GENX,req.body.ADDNL_REFR,req.body.HF,req.body.FTS,req.body.EWIS,req.body.SMS,req.body.REGULATIONS,req.body.GCAA,req.body.ETOPS,req.body.RVSM,req.body.OPER_PROC,req.body.REMARK]];
        connection.query(sql,[values],function(err,result){
            if (err) throw err;
            if (result.affectedRows == 1) {
                // If a new row was inserted
                length_of_rows_amecont++;
            }

        var inputDate = req.body.A320_V2500;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d1 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

  

            var inputDate = req.body.A320_CFM_LEAP_1A;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d2 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);



            var inputDate = req.body.A330_RR_T700;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d3 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);


            var inputDate = req.body.A330_GE_CF6;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d4 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);


            var inputDate = req.body.A330_NEO_RR_T7000;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);



            var inputDate = req.body.A330_P_AND_W;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d6 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);


            var inputDate = req.body.A350_RR_T_XWB;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d7 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

        var inputDate = req.body.B737_CFM56;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d8 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);


            var inputDate = req.body.B737_MAX_CFM_LEAP1B;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d9 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);


            var inputDate = req.body.B777_GE90;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d10 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);


            var inputDate = req.body.B787_GENX;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d11 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);


            var inputDate = req.body.ADDNL_REFR;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d12 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);


            var inputDate = req.body.HF;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d13 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

            var inputDate = req.body.FTS;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d14 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);



            var inputDate = req.body.EWIS;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d15 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);


            var inputDate = req.body.SMS;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d16 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

            var inputDate = req.body.REGULATIONS;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d17 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);


            var inputDate = req.body.OPER_PROC;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d21 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);



            var inputDate = req.body.GCAA;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d18 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);


            var inputDate = req.body.ETOPS;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d19 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

            var inputDate = req.body.RVSM;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d20 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

            if(d1<2){count_ame_continuation_trainings_red++;}
            else if(d1<15){count_ame_continuation_trainings_orange++;}
            else if(d1<30){count_ame_continuation_trainings++;}

            if(d2<2){count_ame_continuation_trainings_red++;}
            else if(d2<15){count_ame_continuation_trainings_orange++;}
            else if(d2<30){count_ame_continuation_trainings++;}

            if(d3<2){count_ame_continuation_trainings_red++;}
            else if(d3<15){count_ame_continuation_trainings_orange++;}
            else if(d3<30){count_ame_continuation_trainings++;}

            if(d4<2){count_ame_continuation_trainings_red++;}
            else if(d4<15){count_ame_continuation_trainings_orange++;}
            else if(d4<30){count_ame_continuation_trainings++;}

            if(d5<2){count_ame_continuation_trainings_red++;}
            else if(d5<15){count_ame_continuation_trainings_orange++;}
            else if(d5<30){count_ame_continuation_trainings++;}

            if(d6<2){count_ame_continuation_trainings_red++;}
            else if(d6<15){count_ame_continuation_trainings_orange++;}
            else if(d6<30){count_ame_continuation_trainings++;}

            if(d7<2){count_ame_continuation_trainings_red++;}
            else if(d7<15){count_ame_continuation_trainings_orange++;}
            else if(d7<30){count_ame_continuation_trainings++;}

            if(d8<2){count_ame_continuation_trainings_red++;}
            else if(d8<15){count_ame_continuation_trainings_orange++;}
            else if(d8<30){count_ame_continuation_trainings++;}

            if(d9<2){count_ame_continuation_trainings_red++;}
            else if(d9<15){count_ame_continuation_trainings_orange++;}
            else if(d9<30){count_ame_continuation_trainings++;}

            if(d10<2){count_ame_continuation_trainings_red++;}
            else if(d10<15){count_ame_continuation_trainings_orange++;}
            else if(d10<30){count_ame_continuation_trainings++;}

            if(d11<2){count_ame_continuation_trainings_red++;}
            else if(d11<15){count_ame_continuation_trainings_orange++;}
            else if(d11<30){count_ame_continuation_trainings++;}

            if(d12<2){count_ame_continuation_trainings_red++;}
            else if(d12<15){count_ame_continuation_trainings_orange++;}
            else if(d12<30){count_ame_continuation_trainings++;}

            if(d13<2){count_ame_continuation_trainings_red++;}
            else if(d13<15){count_ame_continuation_trainings_orange++;}
            else if(d13<30){count_ame_continuation_trainings++;}

            if(d14<2){count_ame_continuation_trainings_red++;}
            else if(d14<15){count_ame_continuation_trainings_orange++;}
            else if(d14<30){count_ame_continuation_trainings++;}

            if(d15<2){count_ame_continuation_trainings_red++;}
            else if(d15<15){count_ame_continuation_trainings_orange++;}
            else if(d15<30){count_ame_continuation_trainings++;}

            if(d16<2){count_ame_continuation_trainings_red++;}
            else if(d16<15){count_ame_continuation_trainings_orange++;}
            else if(d16<30){count_ame_continuation_trainings++;}

            if(d17<2){count_ame_continuation_trainings_red++;}
            else if(d17<15){count_ame_continuation_trainings_orange++;}
            else if(d17<30){count_ame_continuation_trainings++;}

            if(d18<2){count_ame_continuation_trainings_red++;}
            else if(d18<15){count_ame_continuation_trainings_orange++;}
            else if(d18<30){count_ame_continuation_trainings++;}

            if(d19<2){count_ame_continuation_trainings_red++;}
            else if(d19<15){count_ame_continuation_trainings_orange++;}
            else if(d19<30){count_ame_continuation_trainings++;}

            if(d20<2){count_ame_continuation_trainings_red++;}
            else if(d20<15){count_ame_continuation_trainings_orange++;}
            else if(d20<30){count_ame_continuation_trainings++;}

            if(d21<2){count_ame_continuation_trainings_red++;}
            else if(d21<15){count_ame_continuation_trainings_orange++;}
            else if(d21<30){count_ame_continuation_trainings++;}

            return res.redirect('/ENGINEER.html');
        });
    }
});
}
else{
return res.redirect('/ENGINEER.html');}
});
app.post('/ame_authorisations',function(req,res){
    if(req.body.SR_NO>0){
    var query = 'SELECT * FROM new_schema.ame_authorisations WHERE sr_no = ?';
    var valueToCheck = req.body.SR_NO;
    
    // Execute the SELECT query
    connection.query(query, [valueToCheck], (error, results) => {
      if (error) {
        console.error('Error executing query: ' + error.stack);
      }
      if (results.length > 0) {
        console.log('Row exists in the database.');
    
        if(req.body.NAME)
        {connection.query('UPDATE new_schema.ame_authorisations SET name = ? WHERE sr_no = ?', [req.body.NAME, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.STAFF_NO)
        {connection.query('UPDATE new_schema.ame_authorisations SET staff_no = ? WHERE sr_no = ?', [req.body.STAFF_NO, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.ciasl_authn_no)
        {connection.query('UPDATE new_schema.ame_authorisations SET ciasl_authn_no = ? WHERE sr_no = ?', [req.body.ciasl_authn_no, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.ciasl_authn_validity)
        {
            var inputDate = req.body.ciasl_authn_validity;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d1 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(d1<2)
            {count_ame_authorisations_red++;}
            else if(d1<15)
            {count_ame_authorisations_orange++;}
            else if(d1<30)
            {count_ame_authorisations++;}

            connection.query('UPDATE new_schema.ame_authorisations SET ciasl_authn_validity = ? WHERE sr_no = ?', [req.body.ciasl_authn_validity, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.FLY_DXB)
        {
            var inputDate = req.body.FLY_DXB;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
            var inputDateTime = new Date(yyyy, mm - 1, dd); 
            var oneDayMs = 24 * 60 * 60 * 1000;
            var  currentDate = new Date();
            var d2 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
            if(d2<2)
            {count_ame_authorisations_red++;}
            else if(d2<15)
            {count_ame_authorisations_orange++;}
            else if(d2<30)
            {count_ame_authorisations++;}
            connection.query('UPDATE new_schema.ame_authorisations SET fly_dxb = ? WHERE sr_no = ?', [req.body.FLY_DXB, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.island_authn_validity)
        {
            var inputDate = req.body.island_authn_validity;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
            var inputDateTime = new Date(yyyy, mm - 1, dd); 
            var oneDayMs = 24 * 60 * 60 * 1000;
            var  currentDate = new Date();
            var d3 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
            if(d3<2)
            {count_ame_authorisations_red++;}
            else if(d3<15)
            {count_ame_authorisations_orange++;}
            else if(d3<30)
            {count_ame_authorisations++;}
            connection.query('UPDATE new_schema.ame_authorisations SET island_authn_validity = ? WHERE sr_no = ?', [req.body.island_authn_validity, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.oman_air)
        {connection.query('UPDATE new_schema.ame_authorisations SET oman_air = ? WHERE sr_no = ?', [req.body.oman_air, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.qatar)
        {connection.query('UPDATE new_schema.ame_authorisations SET qatar = ? WHERE sr_no = ?', [req.body.qatar, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.sri_lanka)
        {connection.query('UPDATE new_schema.ame_authorisations SET sri_lanka = ? WHERE sr_no = ?', [req.body.sri_lanka, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.kuwait)
        {connection.query('UPDATE new_schema.ame_authorisations SET kuwait = ? WHERE sr_no = ?', [req.body.kuwait, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.jazeera)
        {connection.query('UPDATE new_schema.ame_authorisations SET jazeera = ? WHERE sr_no = ?', [req.body.jazeera, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.air_arabia)
        {connection.query('UPDATE new_schema.ame_authorisations SET air_arabia = ? WHERE sr_no = ?', [req.body.air_arabia, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.ethihad)
        {connection.query('UPDATE new_schema.ame_authorisations SET ethihad = ? WHERE sr_no = ?', [req.body.ethihad, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.gulfair)
        {connection.query('UPDATE new_schema.ame_authorisations SET gulfair = ? WHERE sr_no = ?', [req.body.gulfair, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.island)
        {connection.query('UPDATE new_schema.ame_authorisations SET island = ? WHERE sr_no = ?', [req.body.island, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.airasia_thai)
        {connection.query('UPDATE new_schema.ame_authorisations SET airasia_thai = ? WHERE sr_no = ?', [req.body.airasia_thai, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.scoot_tiger)
        {connection.query('UPDATE new_schema.ame_authorisations SET scoot_tiger = ? WHERE sr_no = ?', [req.body.scoot_tiger, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.FLY__dxb2)
        {connection.query('UPDATE new_schema.ame_authorisations SET fly__dxb = ? WHERE sr_no = ?', [req.body.FLY__dxb2, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.REMARKS)
        {connection.query('UPDATE new_schema.ame_authorisations SET remark = ? WHERE sr_no = ?', [req.body.REMARKS, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}

        return res.redirect('/ENGINEER.html');
    } else {

    var sql = "INSERT INTO new_schema.ame_authorisations (sr_no,name,staff_no,ciasl_authn_no,ciasl_authn_validity,fly_dxb,island_authn_validity,oman_air,qatar,sri_lanka,kuwait,jazeera,air_arabia,ethihad,gulfair,island,airasia_thai,scoot_tiger,fly__dxb,remark) VALUES ?" +
                  "ON DUPLICATE KEY UPDATE " +
                  "name=VALUES(name), " +
                 	"staff_no=VALUES(staff_no), " +
			"ciasl_authn_no=VALUES(ciasl_authn_no), " +
			"ciasl_authn_validity=VALUES(ciasl_authn_validity), " +
			"fly_dxb=VALUES(fly_dxb), " +
			"island_authn_validity=VALUES(island_authn_validity), " +
			"oman_air=VALUES(oman_air), " +
			"qatar=VALUES(qatar), " +
			"sri_lanka=VALUES(sri_lanka), " +
			"kuwait=VALUES(kuwait), " +
			"jazeera=VALUES(jazeera), " +
			"air_arabia=VALUES(air_arabia), " +
			"ethihad=VALUES(ethihad), " +
			"gulfair=VALUES(gulfair), " +
			"island=VALUES(island), " +
			"airasia_thai=VALUES(airasia_thai), " +
			"scoot_tiger=VALUES(scoot_tiger), " +
			"fly__dxb=VALUES(fly__dxb), " +
			"remark=VALUES(remark)";
        var values = [[Number(req.body.SR_NO),req.body.NAME,req.body.STAFF_NO,req.body.ciasl_authn_no,req.body.ciasl_authn_validity,req.body.FLY_DXB,req.body.island_authn_validity,req.body.oman_air,req.body.qatar,req.body.sri_lanka,req.body.kuwait,req.body.jazeera,req.body.air_arabia,req.body.ethihad,req.body.gulfair,req.body.island,req.body.airasia_thai,req.body.scoot_tiger,req.body.FLY__dxb2,req.body.REMARKS]];
        connection.query(sql,[values],function(err,result){
            if (err) throw err;
            if (result.affectedRows == 1) {
                // If a new row was inserted
                length_of_rows_ameauth++;
            }


            var inputDate = req.body.ciasl_authn_validity;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d1 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

            var inputDate = req.body.FLY_DXB;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
            var inputDateTime = new Date(yyyy, mm - 1, dd); 
            var oneDayMs = 24 * 60 * 60 * 1000;
            var  currentDate = new Date();
            var d2 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);


            var inputDate = req.body.island_authn_validity;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
            var inputDateTime = new Date(yyyy, mm - 1, dd); 
            var oneDayMs = 24 * 60 * 60 * 1000;
            var  currentDate = new Date();
            var d3 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);


            if(d1<2)
            {count_ame_authorisations_red++;}
            else if(d1<15)
            {count_ame_authorisations_orange++;}
            else if(d1<30)
            {count_ame_authorisations++;}
            if(d2<2)
            {count_ame_authorisations_red++;}
            else if(d2<15)
            {count_ame_authorisations_orange++;}
            else if(d2<30)
            {count_ame_authorisations++;}
            if(d3<2)
            {count_ame_authorisations_red++;}
            else if(d3<15)
            {count_ame_authorisations_orange++;}
            else if(d3<30)
            {count_ame_authorisations++;}
            return res.redirect('/ENGINEER.html');
        });
    }
});
}
else{
return res.redirect('/ENGINEER.html');}
});
app.post('/technician_continuation_trainings',function(req,res){
    if(req.body.SR_NO>0){
    var query = 'SELECT * FROM new_schema.technician_continuation_trainings WHERE sr_no = ?';
    var valueToCheck = req.body.SR_NO;
    
    // Execute the SELECT query
    connection.query(query, [valueToCheck], (error, results) => {
      if (error) {
        console.error('Error executing query: ' + error.stack);
      }
      if (results.length > 0) {
        console.log('Row exists in the database.');
    
        if(req.body.NAME)
        {connection.query('UPDATE new_schema.technician_continuation_trainings SET name = ? WHERE sr_no = ?', [req.body.NAME, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.DESGN)
        {connection.query('UPDATE new_schema.technician_continuation_trainings SET desgn = ? WHERE sr_no = ?', [req.body.DESGN, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.STAFF_NO)
        {connection.query('UPDATE new_schema.technician_continuation_trainings SET staff_no = ? WHERE sr_no = ?', [req.body.STAFF_NO, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.HF)
        {
            var inputDate = req.body.HF;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d1 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(d1<2){count_technician_red++;}
            else if(d1<15){count_technician_orange++;}
            else if(d1<30){count_technician++;}
        
        connection.query('UPDATE new_schema.technician_continuation_trainings SET hf = ? WHERE sr_no = ?', [req.body.HF, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.FTS)
        {
            var inputDate = req.body.FTS;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
            var inputDateTime = new Date(yyyy, mm - 1, dd); 
            var oneDayMs = 24 * 60 * 60 * 1000;
            var  currentDate = new Date();
            var d2 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
    
            if(d2<2){count_technician_red++;}
            else if(d2<15){count_technician_orange++;}
            else if(d2<30){count_technician++;}
            connection.query('UPDATE new_schema.technician_continuation_trainings SET fts = ? WHERE sr_no = ?', [req.body.FTS, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.EWIS)
        {
            var inputDate = req.body.EWIS;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
            var inputDateTime = new Date(yyyy, mm - 1, dd); 
            var oneDayMs = 24 * 60 * 60 * 1000;
            var  currentDate = new Date();
            var d3 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
            if(d3<2){count_technician_red++;}
            else if(d3<15){count_technician_orange++;}
            else if(d3<30){count_technician++;}
            connection.query('UPDATE new_schema.technician_continuation_trainings SET ewis = ? WHERE sr_no = ?', [req.body.EWIS, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.SMS)
        {
            var inputDate = req.body.SMS;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
            var inputDateTime = new Date(yyyy, mm - 1, dd); 
            var oneDayMs = 24 * 60 * 60 * 1000;
            var  currentDate = new Date();
            var d4 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
            if(d4<2){count_technician_red++;}
            else if(d4<15){count_technician_orange++;}
            else if(d4<30){count_technician++;}
            connection.query('UPDATE new_schema.technician_continuation_trainings SET sms = ? WHERE sr_no = ?', [req.body.SMS, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.IMPROC)
        {
            var inputDate = req.body.IMPROC;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
            var inputDateTime = new Date(yyyy, mm - 1, dd); 
            var oneDayMs = 24 * 60 * 60 * 1000;
            var  currentDate = new Date();
            var d5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
            if(d5<2){count_technician_red++;}
            else if(d5<15){count_technician_orange++;}
            else if(d5<30){count_technician++;}
            connection.query('UPDATE new_schema.technician_continuation_trainings SET lm_procedure_moe_and_regln = ? WHERE sr_no = ?', [req.body.IMPROC, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.STPROC)
        {
            var inputDate = req.body.STPROC;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
            var inputDateTime = new Date(yyyy, mm - 1, dd); 
            var oneDayMs = 24 * 60 * 60 * 1000;
            var  currentDate = new Date();
            var d6 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
            if(d6<2){count_technician_red++;}
            else if(d6<15){count_technician_orange++;}
            else if(d6<30){count_technician++;}
            connection.query('UPDATE new_schema.technician_continuation_trainings SET store_procedure_and_esds = ? WHERE sr_no = ?', [req.body.STPROC, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.DGR)
        {
            var inputDate = req.body.DGR;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d7 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(d7<2){count_technician_red++;}
        else if(d7<15){count_technician_orange++;}
        else if(d7<30){count_technician++;}
            connection.query('UPDATE new_schema.technician_continuation_trainings SET dgr = ? WHERE sr_no = ?', [req.body.DGR, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.REMARKS)
        {connection.query('UPDATE new_schema.technician_continuation_trainings SET remark = ? WHERE sr_no = ?', [req.body.REMARKS, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        
        return res.redirect('/TECHNICIAN.html');
    } else {

    var sql = "INSERT INTO new_schema.technician_continuation_trainings (sr_no,name,desgn,staff_no,hf,fts,ewis,sms,lm_procedure_moe_and_regln,store_procedure_and_esds,dgr,remark) VALUES ?" +
    "ON DUPLICATE KEY UPDATE " +
    "name=VALUES(name), " +
       "desgn=VALUES(desgn), " +
"staff_no=VALUES(staff_no), " +
"hf=VALUES(hf), " +
"fts=VALUES(fts), " +
"ewis=VALUES(ewis), " +
       "sms=VALUES(sms), " +
"lm_procedure_moe_and_regln=VALUES(lm_procedure_moe_and_regln), " +
"store_procedure_and_esds=VALUES(store_procedure_and_esds), " +
"dgr=VALUES(dgr), " +
"remark=VALUES(remark)";
var values = [[Number(req.body.SR_NO),req.body.NAME,req.body.DESGN,req.body.STAFF_NO,req.body.HF,req.body.FTS,req.body.EWIS,req.body.SMS,req.body.IMPROC,req.body.STPROC,req.body.DGR,req.body.REMARKS]];
connection.query(sql,[values],function(err,result){
if (err) throw err;
if (result.affectedRows == 1) {
  // If a new row was inserted
  length_of_rows_technician++;
}
     
            var inputDate = req.body.HF;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d1 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

            var inputDate = req.body.FTS;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d2 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

  

            var inputDate = req.body.EWIS;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d3 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

    
            var inputDate = req.body.SMS;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d4 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);



            var inputDate = req.body.IMPROC;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

            var inputDate = req.body.STPROC;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d6 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);



            var inputDate = req.body.DGR;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d7 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

            if(d1<2){count_technician_red++;}
            else if(d1<15){count_technician_orange++;}
            else if(d1<30){count_technician++;}

            if(d2<2){count_technician_red++;}
            else if(d2<15){count_technician_orange++;}
            else if(d2<30){count_technician++;}

            if(d3<2){count_technician_red++;}
            else if(d3<15){count_technician_orange++;}
            else if(d3<30){count_technician++;}

            if(d4<2){count_technician_red++;}
            else if(d4<15){count_technician_orange++;}
            else if(d4<30){count_technician++;}

            if(d5<2){count_technician_red++;}
            else if(d5<15){count_technician_orange++;}
            else if(d5<30){count_technician++;}

            if(d6<2){count_technician_red++;}
            else if(d6<15){count_technician_orange++;}
            else if(d6<30){count_technician++;}

            if(d7<2){count_technician_red++;}
            else if(d7<15){count_technician_orange++;}
            else if(d7<30){count_technician++;}
return res.redirect('/TECHNICIAN.html');
});
}
});
}
else{
return res.redirect('/TECHNICIAN.html');}
});
 app.post('/authorisation_coverage',function(req,res){
    if(req.body.SR_NO>0){
    var query = 'SELECT * FROM new_schema.authorisation_coverage WHERE sl_no = ?';
    var valueToCheck = req.body.SR_NO;
    
    // Execute the SELECT query
    connection.query(query, [valueToCheck], (error, results) => {
      if (error) {
        console.error('Error executing query: ' + error.stack);
      }
      if (results.length > 0) {
        console.log('Row exists in the database.');
    
        if(req.body.NAME)
        {connection.query('UPDATE new_schema.authorisation_coverage SET name = ? WHERE sl_no = ?', [req.body.NAME, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.CAT)
        {connection.query('UPDATE new_schema.authorisation_coverage SET cat = ? WHERE sl_no = ?', [req.body.CAT, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.tiger_v2500)
        {connection.query('UPDATE new_schema.authorisation_coverage SET tiger_v2500 = ? WHERE sl_no = ?', [req.body.tiger_v2500.toUpperCase(), req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.srilankan_v2500)
        {connection.query('UPDATE new_schema.authorisation_coverage SET srilankan_v2500 = ? WHERE sl_no = ?', [req.body.srilankan_v2500.toUpperCase(), req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.srilankan_cfm56)
        {connection.query('UPDATE new_schema.authorisation_coverage SET srilankan_cfm56 = ? WHERE sl_no = ?', [req.body.srilankan_cfm56.toUpperCase(), req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.srilankan_cfmleap)
        {connection.query('UPDATE new_schema.authorisation_coverage SET srilankan_cfmleap = ? WHERE sl_no = ?', [req.body.srilankan_cfmleap.toUpperCase(), req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.srilankan_t700)
        {connection.query('UPDATE new_schema.authorisation_coverage SET srilankan_t700 = ? WHERE sl_no = ?', [req.body.srilankan_t700.toUpperCase(), req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.etihad_v2500)
        {connection.query('UPDATE new_schema.authorisation_coverage SET etihad_v2500 = ? WHERE sl_no = ?', [req.body.etihad_v2500.toUpperCase(), req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.etihad_t700)
        {connection.query('UPDATE new_schema.authorisation_coverage SET etihad_t700 = ? WHERE sl_no = ?', [req.body.etihad_t700.toUpperCase(), req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.etihad_genx)
        {connection.query('UPDATE new_schema.authorisation_coverage SET etihad_genx = ? WHERE sl_no = ?', [req.body.etihad_genx.toUpperCase(), req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.arabia_cfm56)
        {connection.query('UPDATE new_schema.authorisation_coverage SET arabia_cfm56 = ? WHERE sl_no = ?', [req.body.arabia_cfm56.toUpperCase(), req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.arabia_cfmleap)
        {connection.query('UPDATE new_schema.authorisation_coverage SET arabia_cfmleap = ? WHERE sl_no = ?', [req.body.arabia_cfmleap.toUpperCase(), req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.qatar_v2500)
        {connection.query('UPDATE new_schema.authorisation_coverage SET qatar_v2500 = ? WHERE sl_no = ?', [req.body.qatar_v2500.toUpperCase(), req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.qatar_cfm56)
        {connection.query('UPDATE new_schema.authorisation_coverage SET qatar_cfm56 = ? WHERE sl_no = ?', [req.body.qatar_cfm56.toUpperCase(), req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.qatar_gecf6)
        {connection.query('UPDATE new_schema.authorisation_coverage SET qatar_gecf6 = ? WHERE sl_no = ?', [req.body.qatar_gecf6.toUpperCase(), req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.qatar_genx)
        {connection.query('UPDATE new_schema.authorisation_coverage SET qatar_genx = ? WHERE sl_no = ?', [req.body.qatar_genx.toUpperCase(), req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.qatar_trentxwb)
        {connection.query('UPDATE new_schema.authorisation_coverage SET qatar_trentxwb = ? WHERE sl_no = ?', [req.body.qatar_trentxwb.toUpperCase(), req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.kuwait_cfm56)
        {connection.query('UPDATE new_schema.authorisation_coverage SET kuwait_cfm56 = ? WHERE sl_no = ?', [req.body.kuwait_cfm56.toUpperCase(), req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.kuwait_leap)
        {connection.query('UPDATE new_schema.authorisation_coverage SET kuwait_leap = ? WHERE sl_no = ?', [req.body.kuwait_leap.toUpperCase(), req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.kuwait_t700)
        {connection.query('UPDATE new_schema.authorisation_coverage SET kuwait_t700 = ? WHERE sl_no = ?', [req.body.kuwait_t700.toUpperCase(), req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.kuwait_neo_t7000)
        {connection.query('UPDATE new_schema.authorisation_coverage SET kuwait_neo_t7000 = ? WHERE sl_no = ?', [req.body.kuwait_neo_t7000.toUpperCase(), req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.kuwait_300er)
        {connection.query('UPDATE new_schema.authorisation_coverage SET kuwait_300er = ? WHERE sl_no = ?', [req.body.kuwait_300er.toUpperCase(), req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.jazeera_cfm56)
        {connection.query('UPDATE new_schema.authorisation_coverage SET jazeera_cfm56 = ? WHERE sl_no = ?', [req.body.jazeera_cfm56.toUpperCase(), req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.jazeera_leap)
        {connection.query('UPDATE new_schema.authorisation_coverage SET jazeera_leap = ? WHERE sl_no = ?', [req.body.jazeera_leap.toUpperCase(), req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.thai_v2500)
        {connection.query('UPDATE new_schema.authorisation_coverage SET thai_v2500 = ? WHERE sl_no = ?', [req.body.thai_v2500.toUpperCase(), req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.thai_cfm56)
        {connection.query('UPDATE new_schema.authorisation_coverage SET thai_cfm56 = ? WHERE sl_no = ?', [req.body.thai_cfm56.toUpperCase(), req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.gulf_cfm56)
        {connection.query('UPDATE new_schema.authorisation_coverage SET gulf_cfm56 = ? WHERE sl_no = ?', [req.body.gulf_cfm56.toUpperCase(), req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.gulf_v2500)
        {connection.query('UPDATE new_schema.authorisation_coverage SET gulf_v2500 = ? WHERE sl_no = ?', [req.body.gulf_v2500.toUpperCase(), req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.gulf_neo)
        {connection.query('UPDATE new_schema.authorisation_coverage SET gulf_neo = ? WHERE sl_no = ?', [req.body.gulf_neo.toUpperCase(), req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.oman_cfm56)
        {connection.query('UPDATE new_schema.authorisation_coverage SET oman_cfm56 = ? WHERE sl_no = ?', [req.body.oman_cfm56.toUpperCase(), req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.oman_max)
        {connection.query('UPDATE new_schema.authorisation_coverage SET oman_max = ? WHERE sl_no = ?', [req.body.oman_max.toUpperCase(), req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.oman_genx)
        {connection.query('UPDATE new_schema.authorisation_coverage SET oman_genx = ? WHERE sl_no = ?', [req.body.oman_genx.toUpperCase(), req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.oman_t700)
        {connection.query('UPDATE new_schema.authorisation_coverage SET oman_t700 = ? WHERE sl_no = ?', [req.body.oman_t700.toUpperCase(), req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.dubai_ng)
        {connection.query('UPDATE new_schema.authorisation_coverage SET dubai_ng = ? WHERE sl_no = ?', [req.body.dubai_ng.toUpperCase(), req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.maldives_cfm56)
        {connection.query('UPDATE new_schema.authorisation_coverage SET maldives_cfm56 = ? WHERE sl_no = ?', [req.body.maldives_cfm56.toUpperCase(), req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.india_v2500)
        {connection.query('UPDATE new_schema.authorisation_coverage SET india_v2500 = ? WHERE sl_no = ?', [req.body.india_v2500.toUpperCase(), req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.india_cfm56)
        {connection.query('UPDATE new_schema.authorisation_coverage SET india_cfm56 = ? WHERE sl_no = ?', [req.body.india_cfm56.toUpperCase(), req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.india_cfm567b)
        {connection.query('UPDATE new_schema.authorisation_coverage SET india_cfm567b = ? WHERE sl_no = ?', [req.body.india_cfm567b.toUpperCase(), req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.easa_v2500)
        {connection.query('UPDATE new_schema.authorisation_coverage SET easa_v2500 = ? WHERE sl_no = ?', [req.body.easa_v2500.toUpperCase(), req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.easa_cfm56)
        {connection.query('UPDATE new_schema.authorisation_coverage SET easa_cfm56 = ? WHERE sl_no = ?', [req.body.easa_cfm56.toUpperCase(), req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        return res.redirect('/ENGINEER.html');
    } else {

    var sql = "INSERT INTO new_schema.authorisation_coverage (sl_no,name,cat,tiger_v2500,srilankan_v2500,srilankan_cfm56,srilankan_cfmleap,srilankan_t700,etihad_v2500,etihad_t700,etihad_genx,arabia_cfm56,arabia_cfmleap,qatar_v2500,qatar_cfm56,qatar_gecf6,qatar_genx,qatar_trentxwb,kuwait_cfm56,kuwait_leap,kuwait_t700,kuwait_neo_t7000,kuwait_300er,jazeera_cfm56,jazeera_leap,thai_v2500,thai_cfm56,gulf_cfm56,gulf_v2500,gulf_neo,oman_cfm56,oman_max,oman_genx,oman_t700,dubai_ng,maldives_cfm56,india_v2500,india_cfm56,india_cfm567b,easa_v2500,easa_cfm56) VALUES ?" +
                  "ON DUPLICATE KEY UPDATE " +
			"name=VALUES(name), " +
                  "cat=VALUES(cat), " +
                  "tiger_v2500=VALUES(tiger_v2500), " +
                  "srilankan_v2500=VALUES(srilankan_v2500), " +
                  "srilankan_cfm56=VALUES(srilankan_cfm56), " +
			"srilankan_cfmleap=VALUES(srilankan_cfmleap), " +
			"srilankan_t700=VALUES(srilankan_t700), " +
			"etihad_v2500=VALUES(etihad_v2500), " +
			"etihad_t700=VALUES(etihad_t700), " +
			"etihad_genx=VALUES(etihad_genx), " +
            "arabia_cfm56=VALUES(arabia_cfm56), " +
                  "arabia_cfmleap=VALUES(arabia_cfmleap), " +
                  "qatar_v2500=VALUES(qatar_v2500), " +
                  "qatar_cfm56=VALUES(qatar_cfm56), " +
                  "qatar_gecf6=VALUES(qatar_gecf6), " +
			"qatar_genx=VALUES(qatar_genx), " +
			"qatar_trentxwb=VALUES(qatar_trentxwb), " +
			"kuwait_cfm56=VALUES(kuwait_cfm56), " +
			"kuwait_leap=VALUES(kuwait_leap), " +
			"kuwait_t700=VALUES(kuwait_t700), " +
            "kuwait_neo_t7000=VALUES(kuwait_neo_t7000), " +
                  "kuwait_300er=VALUES(kuwait_300er), " +
                  "jazeera_cfm56=VALUES(jazeera_cfm56), " +
                  "jazeera_leap=VALUES(jazeera_leap), " +
                  "thai_v2500=VALUES(thai_v2500), " +
			"thai_cfm56=VALUES(thai_cfm56), " +
			"gulf_cfm56=VALUES(gulf_cfm56), " +
			"gulf_v2500=VALUES(gulf_v2500), " +
			"gulf_neo=VALUES(gulf_neo), " +
			"oman_cfm56=VALUES(oman_cfm56), " +
            "oman_max=VALUES(oman_max), " +
                  "oman_genx=VALUES(oman_genx), " +
                  "oman_t700=VALUES(oman_t700), " +
                  "dubai_ng=VALUES(dubai_ng), " +
                  "maldives_cfm56=VALUES(maldives_cfm56), " +
			"india_v2500=VALUES(india_v2500), " +
			"india_cfm56=VALUES(india_cfm56), " +
			"india_cfm567b=VALUES(india_cfm567b), " +
			"easa_v2500=VALUES(easa_v2500), " +
                  "easa_cfm56=VALUES(easa_cfm56)";
        var values = [[Number(req.body.SR_NO),
            req.body.NAME,
            req.body.CAT,
            req.body.tiger_v2500.toUpperCase(),
            req.body.srilankan_v2500.toUpperCase(),
            req.body.srilankan_cfm56.toUpperCase(),
            req.body.srilankan_cfmleap.toUpperCase(),
            req.body.srilankan_t700.toUpperCase(),
            req.body.etihad_v2500.toUpperCase(),
            req.body.etihad_t700.toUpperCase(),
            req.body.etihad_genx.toUpperCase(),
            req.body.arabia_cfm56.toUpperCase(),
            req.body.arabia_cfmleap.toUpperCase(),
            req.body.qatar_v2500.toUpperCase(),
            req.body.qatar_cfm56.toUpperCase(),
            req.body.qatar_gecf6.toUpperCase(),
            req.body.qatar_genx.toUpperCase(),
            req.body.qatar_trentxwb.toUpperCase(),
            req.body.kuwait_cfm56.toUpperCase(),
            req.body.kuwait_leap.toUpperCase(),
            req.body.kuwait_t700.toUpperCase(),
            req.body.kuwait_neo_t7000.toUpperCase(),
            req.body.kuwait_300er.toUpperCase(),
            req.body.jazeera_cfm56.toUpperCase(),
            req.body.jazeera_leap.toUpperCase(),
            req.body.thai_v2500.toUpperCase(),
            req.body.thai_cfm56.toUpperCase(),
            req.body.gulf_cfm56.toUpperCase(),
            req.body.gulf_v2500.toUpperCase(),
            req.body.gulf_neo.toUpperCase(),
            req.body.oman_cfm56.toUpperCase(),
            req.body.oman_max.toUpperCase(),
            req.body.oman_genx.toUpperCase(),
            req.body.oman_t700.toUpperCase(),
            req.body.dubai_ng.toUpperCase(),
            req.body.maldives_cfm56.toUpperCase(),
            req.body.india_v2500.toUpperCase(),
            req.body.india_cfm56.toUpperCase(),
            req.body.india_cfm567b.toUpperCase(),
            req.body.easa_v2500.toUpperCase(),
            req.body.easa_cfm56.toUpperCase()
        ]];
        connection.query(sql,[values],function(err,result){
            if (err) throw err;
            if (result.affectedRows == 1) {
                // If a new row was inserted
                length_of_rows_authorisation_cov++;
            }
            return res.redirect('/ENGINEER.html');
        });
    }
});
}
else{
return res.redirect('/ENGINEER.html');}
});
app.post('/regular_audit',function(req,res){
    if(req.body.SR_NO2>0){
    var query = 'SELECT * FROM new_schema.regular_audit WHERE sr_no = ?';
    var valueToCheck = req.body.SR_NO2;
    
    // Execute the SELECT query
    connection.query(query, [valueToCheck], (error, results) => {
      if (error) {
        console.error('Error executing query: ' + error.stack);
      }
      if (results.length > 0) {
        console.log('Row exists in the database.');
    
        if(req.body.REGULATOR)
        {connection.query('UPDATE new_schema.regular_audit SET regulator = ? WHERE sr_no = ?', [req.body.REGULATOR, req.body.SR_NO2], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.AUD_DATE)
        {connection.query('UPDATE new_schema.regular_audit SET audit_date = ? WHERE sr_no = ?', [req.body.AUD_DATE, req.body.SR_NO2], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.NO_OF_FINDINGS)
        {connection.query('UPDATE new_schema.regular_audit SET no_of_findings = ? WHERE sr_no = ?', [req.body.NO_OF_FINDINGS, req.body.SR_NO2], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.NO_OF_OBSERV)
        {connection.query('UPDATE new_schema.regular_audit SET no_of_observations = ? WHERE sr_no = ?', [req.body.NO_OF_OBSERV, req.body.SR_NO2], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.CAP_DUE_DATE)
        {
            var inputDate = req.body.CAP_DUE_DATE;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);


            if(days_difference_5<2)
            {
                count_regular_audit_red++;
            }
            else if(days_difference_5<15)
            {
                count_regular_audit_orange++;
            }
            else if(days_difference_5<30)
            {
                count_regular_audit++;
            }
            connection.query('UPDATE new_schema.regular_audit SET cap_due_date = ? WHERE sr_no = ?', [req.body.CAP_DUE_DATE, req.body.SR_NO2], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.CAP_SUBMT_DATE)
        {connection.query('UPDATE new_schema.regular_audit SET cap_submitted_date = ? WHERE sr_no = ?', [req.body.CAP_SUBMT_DATE, req.body.SR_NO2], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.CA_submit_due_date)
        {
            var inputDate = req.body.CA_submit_due_date;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
            var inputDateTime = new Date(yyyy, mm - 1, dd); 
            var oneDayMs = 24 * 60 * 60 * 1000;
            var  currentDate = new Date();
            var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
    
                if(days_difference_5<2)
                {
                    count_regular_audit_red++;
                }
                else if(days_difference_5<15)
                {
                    count_regular_audit_orange++;
                }
                else if(days_difference_5<30)
                {
                    count_regular_audit++;
                }
            connection.query('UPDATE new_schema.regular_audit SET ca_submit_due_date = ? WHERE sr_no = ?', [req.body.CA_submit_due_date, req.body.SR_NO2], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.CA_SUBMT_DATE)
        {connection.query('UPDATE new_schema.regular_audit SET ca_submitted_date = ? WHERE sr_no = ?', [req.body.CA_SUBMT_DATE, req.body.SR_NO2], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.Audit_clos)
        {connection.query('UPDATE new_schema.regular_audit SET audit_closure_date = ? WHERE sr_no = ?', [req.body.Audit_clos, req.body.SR_NO2], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.REMARKS)
        {connection.query('UPDATE new_schema.regular_audit SET remark = ? WHERE sr_no = ?', [req.body.REMARKS, req.body.SR_NO2], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        
        return res.redirect('/AUDITOR.html');
    } else {


    var sql = "INSERT INTO new_schema.regular_audit (sr_no,regulator,audit_date,no_of_findings,no_of_observations,cap_due_date,cap_submitted_date,ca_submit_due_date,ca_submitted_date,audit_closure_date,remark) VALUES ?" +
                  "ON DUPLICATE KEY UPDATE " +
                  "regulator=VALUES(regulator), " +
                  "audit_date=VALUES(audit_date), " +
                  "no_of_findings=VALUES(no_of_findings), " +
                  "no_of_observations=VALUES(no_of_observations), " +
			"cap_due_date=VALUES(cap_due_date), " +
			"cap_submitted_date=VALUES(cap_submitted_date), " +
			"ca_submit_due_date=VALUES(ca_submit_due_date), " +
			"ca_submitted_date=VALUES(ca_submitted_date), " +
			"audit_closure_date=VALUES(audit_closure_date), " +
                  "remark=VALUES(remark)";
        var values = [[Number(req.body.SR_NO2),req.body.REGULATOR,req.body.AUD_DATE,req.body.NO_OF_FINDINGS,req.body.NO_OF_OBSERV,req.body.CAP_DUE_DATE,req.body.CAP_SUBMT_DATE,req.body.CA_submit_due_date,req.body.CA_SUBMT_DATE,req.body.Audit_clos,req.body.REMARKS]];
        connection.query(sql,[values],function(err,result){
            if (err) throw err;
            if (result.affectedRows == 1) {
                // If a new row was inserted
                length_of_rows_reg_audit++;
            }
            var inputDate = req.body.CAP_DUE_DATE;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);


            if(days_difference_5<2)
            {
                count_regular_audit_red++;
            }
            else if(days_difference_5<15)
            {
                count_regular_audit_orange++;
            }
            else if(days_difference_5<30)
            {
                count_regular_audit++;
            }

            var inputDate = req.body.CA_submit_due_date;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

            if(days_difference_5<2)
            {
                count_regular_audit_red++;
            }
            else if(days_difference_5<15)
            {
                count_regular_audit_orange++;
            }
            else if(days_difference_5<30)
            {
                count_regular_audit++;
            }
            return res.redirect('/AUDITOR.html');
        });
    }
});
}
else{
return res.redirect('/AUDITOR.html');}
});
app.post('/audit_by_airline_operators',function(req,res){
    if(req.body.SR_NO3>0){
    var query = 'SELECT * FROM new_schema.audit_by_airline_operators WHERE sr_no = ?';
    var valueToCheck = req.body.SR_NO3;
    
    // Execute the SELECT query
    connection.query(query, [valueToCheck], (error, results) => {
      if (error) {
        console.error('Error executing query: ' + error.stack);
      }
      if (results.length > 0) {
        console.log('Row exists in the database.');
    
        if(req.body.OPERATOR)
        {connection.query('UPDATE new_schema.audit_by_airline_operators SET operator = ? WHERE sr_no = ?', [req.body.OPERATOR, req.body.SR_NO3], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.AUDITDATE)
        {connection.query('UPDATE new_schema.audit_by_airline_operators SET audit_date = ? WHERE sr_no = ?', [req.body.AUDITDATE, req.body.SR_NO3], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.NO_OF_FINDINGS)
        {connection.query('UPDATE new_schema.audit_by_airline_operators SET no_of_findings = ? WHERE sr_no = ?', [req.body.NO_OF_FINDINGS, req.body.SR_NO3], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.NO_OF_OBSERV)
        {connection.query('UPDATE new_schema.audit_by_airline_operators SET no_of_observations = ? WHERE sr_no = ?', [req.body.NO_OF_OBSERV, req.body.SR_NO3], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.CAP_DUE_DATE)
        {
            var inputDate = req.body.CAP_DUE_DATE;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);


        if(days_difference_5<2)
        {
            count_audit_by_airline_operators_red++;
        }
        else if(days_difference_5<15)
        {
            count_audit_by_airline_operators_orange++;
        }
        else if(days_difference_5<30)
        {
            count_audit_by_airline_operators++;
        }
            connection.query('UPDATE new_schema.audit_by_airline_operators SET cap_due_date = ? WHERE sr_no = ?', [req.body.CAP_DUE_DATE, req.body.SR_NO3], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.CAP_SUBMT_DATE)
        {connection.query('UPDATE new_schema.audit_by_airline_operators SET cap_submitted_date = ? WHERE sr_no = ?', [req.body.CAP_SUBMT_DATE, req.body.SR_NO3], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.CA_submit_due_date)
        {
            var inputDate = req.body.CA_submit_due_date;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
            var inputDateTime = new Date(yyyy, mm - 1, dd); 
            var oneDayMs = 24 * 60 * 60 * 1000;
            var  currentDate = new Date();
            var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
    
            if(days_difference_5<2)
            {
                count_audit_by_airline_operators_red++;
            }
            else if(days_difference_5<15)
            {
                count_audit_by_airline_operators_orange++;
            }
            else if(days_difference_5<30)
            {
                count_audit_by_airline_operators++;
            }
            connection.query('UPDATE new_schema.audit_by_airline_operators SET cap_submit_due_date = ? WHERE sr_no = ?', [req.body.CA_submit_due_date, req.body.SR_NO3], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.CA_SUBMT_DATE)
        {connection.query('UPDATE new_schema.audit_by_airline_operators SET ca_submitted_date = ? WHERE sr_no = ?', [req.body.CA_SUBMT_DATE, req.body.SR_NO3], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.Audit_clos)
        {connection.query('UPDATE new_schema.audit_by_airline_operators SET audit_closure_date = ? WHERE sr_no = ?', [req.body.Audit_clos, req.body.SR_NO3], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.REMARKS)
        {connection.query('UPDATE new_schema.audit_by_airline_operators SET remark = ? WHERE sr_no = ?', [req.body.REMARKS, req.body.SR_NO3], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        
        return res.redirect('/AUDITOR.html');
    } else {


    var sql = "INSERT INTO new_schema.audit_by_airline_operators (sr_no,operator,audit_date,no_of_findings,no_of_obsrvns,cap_due_date,cap_submitted_date,cap_submit_due_date,ca_submitted_date,audit_closure_date,remark) VALUES ?" +
                  "ON DUPLICATE KEY UPDATE " +
                  "operator=VALUES(operator), " +
                  "audit_date=VALUES(audit_date), " +
                  "no_of_findings=VALUES(no_of_findings), " +
                  "no_of_obsrvns=VALUES(no_of_obsrvns), " +
			"cap_due_date=VALUES(cap_due_date), " +
			"cap_submitted_date=VALUES(cap_submitted_date), " +
			"cap_submit_due_date=VALUES(cap_submit_due_date), " +
			"ca_submitted_date=VALUES(ca_submitted_date), " +
			"audit_closure_date=VALUES(audit_closure_date), " +
                  "remark=VALUES(remark)";
        var values = [[Number(req.body.SR_NO3),req.body.OPERATOR,req.body.AUDITDATE,req.body.NO_OF_FINDINGS,req.body.NO_OF_OBSERV,req.body.CAP_DUE_DATE,req.body.CAP_SUBMT_DATE,req.body.CA_submit_due_date,req.body.CA_SUBMT_DATE,req.body.Audit_clos,req.body.REMARKS]];
        connection.query(sql,[values],function(err,result){
            if (err) throw err;
            if (result.affectedRows == 1) {
                // If a new row was inserted
                length_of_rows_audit_operator++;
            }
            /*
            var nxt = new Date(req.body.CAP_DUE_DATE);
            var total_seconds = Math.abs(today - nxt) / 1000; 
            var days_difference_5 = Math.floor (total_seconds / (60 * 60 * 24)); */
            var inputDate = req.body.CAP_DUE_DATE;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
            if(days_difference_5<2)
            {
                count_audit_by_airline_operators_red++;
            }
            else if(days_difference_5<15)
            {
                count_audit_by_airline_operators_orange++;
            }
            else if(days_difference_5<30)
            {
                count_audit_by_airline_operators++;
            }
            /*
            var nxt = new Date(req.body.CA_submit_due_date);
            var total_seconds = Math.abs(today - nxt) / 1000; 
            var days_difference_5 = Math.floor (total_seconds / (60 * 60 * 24)); */
            var inputDate = req.body.CA_submit_due_date;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
            if(days_difference_5<2)
            {
                count_audit_by_airline_operators_red++;
            }
            else if(days_difference_5<15)
            {
                count_audit_by_airline_operators_orange++;
            }
            else if(days_difference_5<30)
            {
                count_audit_by_airline_operators++;
            }
            return res.redirect('/AUDITOR.html');
        });
    }
});
}
else{
return res.redirect('/AUDITOR.html');}
});
app.post('/quality_audit',function(req,res){
    if(req.body.SR_NO>0){
    var query = 'SELECT * FROM new_schema.quality_audit WHERE sr_no = ?';
    var valueToCheck = req.body.SR_NO4;
    
    // Execute the SELECT query
    connection.query(query, [valueToCheck], (error, results) => {
      if (error) {
        console.error('Error executing query: ' + error.stack);
      }
      if (results.length > 0) {
        console.log('Row exists in the database.');
    
        if(req.body.NAME)
        {connection.query('UPDATE new_schema.quality_audit SET auditor_name = ? WHERE sr_no = ?', [req.body.NAME, req.body.SR_NO4], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.AUDITDATE)
        {connection.query('UPDATE new_schema.quality_audit SET audit_date = ? WHERE sr_no = ?', [req.body.AUDITDATE, req.body.SR_NO4], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.NO_OF_FINDINGS)
        {connection.query('UPDATE new_schema.quality_audit SET no_of_findings = ? WHERE sr_no = ?', [req.body.NO_OF_FINDINGS, req.body.SR_NO4], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.NO_OF_OBSERV)
        {connection.query('UPDATE new_schema.quality_audit SET no_of_observations = ? WHERE sr_no = ?', [req.body.NO_OF_OBSERV, req.body.SR_NO4], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.CAP_DUE_DATE)
        {
            var inputDate = req.body.CAP_DUE_DATE;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);


        if(days_difference_5<2)
            {
                count_quality_audit_quality_division_red++;
            }
            else if(days_difference_5<15)
            {
                count_quality_audit_quality_division_orange++;
            }
            else if(days_difference_5<30)
            {
                count_quality_audit_quality_division++;
            }
            connection.query('UPDATE new_schema.quality_audit SET cap_due_date = ? WHERE sr_no = ?', [req.body.CAP_DUE_DATE, req.body.SR_NO4], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.CAP_SUBMT_DATE)
        {connection.query('UPDATE new_schema.quality_audit SET cap_submitted_date = ? WHERE sr_no = ?', [req.body.CAP_SUBMT_DATE, req.body.SR_NO4], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.CA_submit_due_date)
        {
            var inputDate = req.body.CA_submit_due_date;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
            var inputDateTime = new Date(yyyy, mm - 1, dd); 
            var oneDayMs = 24 * 60 * 60 * 1000;
            var  currentDate = new Date();
            var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
    
            if(days_difference_5<2)
            {
                count_quality_audit_quality_division_red++;
            }
            else if(days_difference_5<15)
            {
                count_quality_audit_quality_division_orange++;
            }
            else if(days_difference_5<30)
            {
                count_quality_audit_quality_division++;
            }
            connection.query('UPDATE new_schema.quality_audit SET ca_submit_due_date = ? WHERE sr_no = ?', [req.body.CA_submit_due_date, req.body.SR_NO4], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.CA_SUBMT_DATE)
        {connection.query('UPDATE new_schema.quality_audit SET ca_submitted_date = ? WHERE sr_no = ?', [req.body.CA_SUBMT_DATE, req.body.SR_NO4], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.Audit_clos)
        {connection.query('UPDATE new_schema.quality_audit SET audit_closure_date = ? WHERE sr_no = ?', [req.body.Audit_clos, req.body.SR_NO4], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.REMARKS)
        {connection.query('UPDATE new_schema.quality_audit SET remark = ? WHERE sr_no = ?', [req.body.REMARKS, req.body.SR_NO4], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        
        return res.redirect('/AUDITOR.html');
    } else {

    var sql = "INSERT INTO new_schema.quality_audit (sr_no,auditor_name,audit_date,no_of_findings,no_of_observations,cap_due_date,cap_submitted_date,ca_submit_due_date,ca_submitted_date,audit_closure_date,remark) VALUES ?" +
                  "ON DUPLICATE KEY UPDATE " +
                  "auditor_name=VALUES(auditor_name), " +
                  "audit_date=VALUES(audit_date), " +
                  "no_of_findings=VALUES(no_of_findings), " +
                  "no_of_observations=VALUES(no_of_observations), " +
			"cap_due_date=VALUES(cap_due_date), " +
			"cap_submitted_date=VALUES(cap_submitted_date), " +
			"ca_submit_due_date=VALUES(ca_submit_due_date), " +
			"ca_submitted_date=VALUES(ca_submitted_date), " +
			"audit_closure_date=VALUES(audit_closure_date), " +
                  "remark=VALUES(remark)";
        var values = [[Number(req.body.SR_NO4),req.body.NAME,req.body.AUDITDATE,req.body.NO_OF_FINDINGS,req.body.NO_OF_OBSERV,req.body.CAP_DUE_DATE,req.body.CAP_SUBMT_DATE,req.body.CA_submit_due_date,req.body.CA_SUBMT_DATE,req.body.Audit_clos,req.body.REMARKS]];
        connection.query(sql,[values],function(err,result){
            if (err) throw err;
            if (result.affectedRows == 1) {
                // If a new row was inserted
                length_of_rows_quality_auditor++;
            }
            /*
            var nxt = new Date(req.body.CA_submit_due_date);
            var total_seconds = Math.abs(today - nxt) / 1000; 
            var days_difference_5 = Math.floor (total_seconds / (60 * 60 * 24)); */
            var inputDate = result[0].CA_submit_due_date;
        var [dd, mm, yyyy] = inputDate.split('/').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
            if(days_difference_5<2)
            {
                count_quality_audit_quality_division_red++;
            }
            else if(days_difference_5<15)
            {
                count_quality_audit_quality_division_orange++;
            }
            else if(days_difference_5<30)
            {
                count_quality_audit_quality_division++;
            }
            /*
            var nxt = new Date(req.body.CAP_DUE_DATE);
            var total_seconds = Math.abs(today - nxt) / 1000; 
            var days_difference_5 = Math.floor (total_seconds / (60 * 60 * 24)); */
            var inputDate = result[0].CAP_DUE_DATE;
        var [dd, mm, yyyy] = inputDate.split('/').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
            if(days_difference_5<2)
            {
                count_quality_audit_quality_division_red++;
            }
            else if(days_difference_5<15)
            {
                count_quality_audit_quality_division_orange++;
            }
            else if(days_difference_5<30)
            {
                count_quality_audit_quality_division++;
            }
            return res.redirect('/AUDITOR.html');
        });
    }
});
}
else{
return res.redirect('/AUDITOR.html');}
});
app.post('/line_maintenance',function(req,res){
    if(req.body.SR_NO5>0){
    var query = 'SELECT * FROM new_schema.line_maintenance WHERE sr_no = ?';
    var valueToCheck = req.body.SR_NO5;
    
    // Execute the SELECT query
    connection.query(query, [valueToCheck], (error, results) => {
      if (error) {
        console.error('Error executing query: ' + error.stack);
      }
      if (results.length > 0) {
        console.log('Row exists in the database.');
    
        if(req.body.NAME)
        {connection.query('UPDATE new_schema.line_maintenance SET auditor_name = ? WHERE sr_no = ?', [req.body.NAME, req.body.SR_NO5], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.AUDITDATE)
        {connection.query('UPDATE new_schema.line_maintenance SET audit_date = ? WHERE sr_no = ?', [req.body.AUDITDATE, req.body.SR_NO5], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.AUDITTYPE)
        {connection.query('UPDATE new_schema.line_maintenance SET audit_type = ? WHERE sr_no = ?', [req.body.AUDITDATE, req.body.SR_NO5], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        
        if(req.body.NO_OF_FINDINGS)
        {connection.query('UPDATE new_schema.line_maintenance SET no_of_findings = ? WHERE sr_no = ?', [req.body.NO_OF_FINDINGS, req.body.SR_NO5], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.NO_OF_OBSERV)
        {connection.query('UPDATE new_schema.line_maintenance SET no_of_observations = ? WHERE sr_no = ?', [req.body.NO_OF_OBSERV, req.body.SR_NO5], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.CAP_DUE_DATE)
        {
            var inputDate = req.body.CAP_DUE_DATE;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

        if(days_difference_5<2)
            {
                count_line_maintenance_red++;
            }
            else if(days_difference_5<15)
            {
                count_line_maintenance_orange++;
            }
            else if(days_difference_5<30)
            {
                count_line_maintenance++;
            }

            connection.query('UPDATE new_schema.line_maintenance SET cap_due_date = ? WHERE sr_no = ?', [req.body.CAP_DUE_DATE, req.body.SR_NO5], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.CAP_SUBMT_DATE)
        {connection.query('UPDATE new_schema.line_maintenance SET cap_submitted_date = ? WHERE sr_no = ?', [req.body.CAP_SUBMT_DATE, req.body.SR_NO5], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.CA_submit_due_date)
        {
            var inputDate = req.body.CA_submit_due_date;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
            var inputDateTime = new Date(yyyy, mm - 1, dd); 
            var oneDayMs = 24 * 60 * 60 * 1000;
            var  currentDate = new Date();
            var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
    
            if(days_difference_5<2)
            {
                count_line_maintenance_red++;
            }
            else if(days_difference_5<15)
            {
                count_line_maintenance_orange++;
            }
            else if(days_difference_5<30)
            {
                count_line_maintenance++;
            }
            connection.query('UPDATE new_schema.line_maintenance SET ca_submit_due_date = ? WHERE sr_no = ?', [req.body.CA_submit_due_date, req.body.SR_NO5], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.CA_SUBMT_DATE)
        {connection.query('UPDATE new_schema.line_maintenance SET ca_submitted_date = ? WHERE sr_no = ?', [req.body.CA_SUBMT_DATE, req.body.SR_NO5], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.Audit_clos)
        {connection.query('UPDATE new_schema.line_maintenance SET audit_closure_date = ? WHERE sr_no = ?', [req.body.Audit_clos, req.body.SR_NO5], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.REMARKS)
        {connection.query('UPDATE new_schema.line_maintenance SET remark = ? WHERE sr_no = ?', [req.body.REMARKS, req.body.SR_NO5], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        
        return res.redirect('/AUDITOR.html');
    } else {

    var sql = "INSERT INTO new_schema.line_maintenance (sr_no,auditor_name,audit_date,audit_type,no_of_findings,no_of_observations,cap_due_date,cap_submitted_date,ca_submit_due_date,ca_submitted_date,audit_closure_date,remark) VALUES ?" +
                  "ON DUPLICATE KEY UPDATE " +
                  "auditor_name=VALUES(auditor_name), " +
                  "audit_date=VALUES(audit_date), " +
			"audit_type=VALUES(audit_type), " +
                  "no_of_findings=VALUES(no_of_findings), " +
                  "no_of_observations=VALUES(no_of_observations), " +
			"cap_due_date=VALUES(cap_due_date), " +
			"cap_submitted_date=VALUES(cap_submitted_date), " +
			"ca_submit_due_date=VALUES(ca_submit_due_date), " +
			"ca_submitted_date=VALUES(ca_submitted_date), " +
			"audit_closure_date=VALUES(audit_closure_date), " +
                  "remark=VALUES(remark)";
        var values = [[Number(req.body.SR_NO5),req.body.NAME,req.body.AUDITDATE,req.body.AUDITTYPE,req.body.NO_OF_FINDINGS,req.body.NO_OF_OBSERV,req.body.CAP_DUE_DATE,req.body.CAP_SUBMT_DATE,req.body.CA_submit_due_date,req.body.CA_SUBMT_DATE,req.body.Audit_clos,req.body.REMARKS]];
        connection.query(sql,[values],function(err,result){
            if (err) throw err;
            if (result.affectedRows == 1) {
                // If a new row was inserted
                length_of_rows_line_main++;
            }
            /*
            var nxt = new Date(req.body.CA_submit_due_date);
            var total_seconds = Math.abs(today - nxt) / 1000; 
            var days_difference_5 = Math.floor (total_seconds / (60 * 60 * 24)); */
            var inputDate = req.body.CA_submit_due_date;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
            if(days_difference_5<2)
            {
                count_line_maintenance_red++;
            }
            else if(days_difference_5<15)
            {
                count_line_maintenance_orange++;
            }
            else if(days_difference_5<30)
            {
                count_line_maintenance++;
            }
            /*
            var nxt = new Date(req.body.CAP_DUE_DATE);
            var total_seconds = Math.abs(today - nxt) / 1000; 
            var days_difference_5 = Math.floor (total_seconds / (60 * 60 * 24)); */
            var inputDate = req.body.CAP_DUE_DATE;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
            if(days_difference_5<2)
            {
                count_line_maintenance_red++;
            }
            else if(days_difference_5<15)
            {
                count_line_maintenance_orange++;
            }
            else if(days_difference_5<30)
            {
                count_line_maintenance++;
            }
            return res.redirect('/AUDITOR.html');
        });
    }
});
}
else{
return res.redirect('/AUDITOR.html');}    
});
app.post('/internal_quality_auditors',function(req,res){
    if(req.body.SR_NO>0){
    var query = 'SELECT * FROM new_schema.internal_quality_auditors WHERE sr_no = ?';
    var valueToCheck = req.body.SR_NO;
    
    // Execute the SELECT query
    connection.query(query, [valueToCheck], (error, results) => {
      if (error) {
        console.error('Error executing query: ' + error.stack);
      }
      if (results.length > 0) {
        console.log('Row exists in the database.');
    
        if(req.body.NAME)
        {connection.query('UPDATE new_schema.internal_quality_auditors SET name = ? WHERE sr_no = ?', [req.body.NAME, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.AUTH_NO)
        {connection.query('UPDATE new_schema.internal_quality_auditors SET auth_no = ? WHERE sr_no = ?', [req.body.AUTH_NO, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.AUTH_VALID_DATE)
        {
            var inputDate = req.body.AUTH_VALID_DATE;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_1 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(d_1<2){count_internal_quality_auditors_red++;}
        else if(d_1<15){count_internal_quality_auditors_orange++;}
        else if(d_1<30){count_internal_quality_auditors++;}
            connection.query('UPDATE new_schema.internal_quality_auditors SET auth_validity_date = ? WHERE sr_no = ?', [req.body.AUTH_VALID_DATE, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.AUDITOR_INT_DATE)
        {connection.query('UPDATE new_schema.internal_quality_auditors SET auditor_date_initial = ? WHERE sr_no = ?', [req.body.AUDITOR_INT_DATE, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.REG_DONE_DATE)
        {connection.query('UPDATE new_schema.internal_quality_auditors SET regulations_done_date = ? WHERE sr_no = ?', [req.body.REG_DONE_DATE, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.REG_DUE_DATE)
        {
            var inputDate = req.body.REG_DUE_DATE;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_2 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(d_2<2){count_internal_quality_auditors_red++;}
        else if(d_2<15){count_internal_quality_auditors_orange++;}
        else if(d_2<30){count_internal_quality_auditors++;}
            connection.query('UPDATE new_schema.internal_quality_auditors SET regulations_due_date = ? WHERE sr_no = ?', [req.body.REG_DUE_DATE, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.HF_DONE_DATE)
        {connection.query('UPDATE new_schema.internal_quality_auditors SET hf_done_date = ? WHERE sr_no = ?', [req.body.HF_DONE_DATE, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.HF_DUE_DATE)
        {
            var inputDate = req.body.HF_DUE_DATE;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_3 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(d_3<2){count_internal_quality_auditors_red++;}
        else if(d_3<15){count_internal_quality_auditors_orange++;}
        else if(d_3<30){count_internal_quality_auditors++;}
            connection.query('UPDATE new_schema.internal_quality_auditors SET hf_due_date = ? WHERE sr_no = ?', [req.body.HF_DUE_DATE, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.FTS_DONE_DATE)
        {connection.query('UPDATE new_schema.internal_quality_auditors SET fts_done_date = ? WHERE sr_no = ?', [req.body.FTS_DONE_DATE, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.FTS_DUE_DATE)
        {
            var inputDate = req.body.FTS_DUE_DATE;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_4 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(d_4<2){count_internal_quality_auditors_red++;}
        else if(d_4<15){count_internal_quality_auditors_orange++;}
        else if(d_4<30){count_internal_quality_auditors++;}
            connection.query('UPDATE new_schema.internal_quality_auditors SET fts_due_date = ? WHERE sr_no = ?', [req.body.FTS_DUE_DATE, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.EWIS_DONE_DATE)
        {connection.query('UPDATE new_schema.internal_quality_auditors SET ewis_done_date = ? WHERE sr_no = ?', [req.body.EWIS_DONE_DATE, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.EWIS_DUE_DATE)
        {
            var inputDate = req.body.EWIS_DUE_DATE;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(d_5<2){count_internal_quality_auditors_red++;}
        else if(d_5<15){count_internal_quality_auditors_orange++;}
        else if(d_5<30){count_internal_quality_auditors++;}
            connection.query('UPDATE new_schema.internal_quality_auditors SET ewis_due_date = ? WHERE sr_no = ?', [req.body.EWIS_DUE_DATE, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.SMS_DONE_DATE)
        {connection.query('UPDATE new_schema.internal_quality_auditors SET sms_done_date = ? WHERE sr_no = ?', [req.body.SMS_DONE_DATE, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.SMS_DUE_DATE)
        {
            var inputDate = req.body.SMS_DUE_DATE;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_6 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(d_6<2){count_internal_quality_auditors_red++;}
        else if(d_6<15){count_internal_quality_auditors_orange++;}
        else if(d_6<30){count_internal_quality_auditors++;}
            connection.query('UPDATE new_schema.internal_quality_auditors SET sms_due_date = ? WHERE sr_no = ?', [req.body.SMS_DUE_DATE, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.REMARKS)
        {connection.query('UPDATE new_schema.internal_quality_auditors SET remark = ? WHERE sr_no = ?', [req.body.REMARKS, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        
        return res.redirect('/AUDITOR.html');
    } else {

    var sql = "INSERT INTO new_schema.internal_quality_auditors (sr_no,name,auth_no,auth_validity_date,auditor_date_initial,regulations_done_date,regulations_due_date,hf_done_date,hf_due_date,fts_done_date,fts_due_date,ewis_done_date,ewis_due_date,sms_done_date,sms_due_date,remark) VALUES ?" +
                  "ON DUPLICATE KEY UPDATE " +
			"name=VALUES(name), " +
                  "auth_no=VALUES(auth_no), " +
			"auth_validity_date=VALUES(auth_validity_date), " +
			"auditor_date_initial=VALUES(auditor_date_initial), " +
			"regulations_done_date=VALUES(regulations_done_date), " +
			"regulations_due_date=VALUES(regulations_due_date), " +
			"hf_done_date=VALUES(hf_done_date), " +
			"hf_due_date=VALUES(hf_due_date), " +
			"fts_done_date=VALUES(fts_done_date), " +
			"fts_due_date=VALUES(fts_due_date), " +
			"ewis_done_date=VALUES(ewis_done_date), " +
			"ewis_due_date=VALUES(ewis_due_date), " +
			"sms_done_date=VALUES(sms_done_date), " +
			"sms_due_date=VALUES(sms_due_date), " +
                  "remark=VALUES(remark)";
        var values = [[Number(req.body.SR_NO),req.body.NAME,req.body.AUTH_NO,req.body.AUTH_VALID_DATE,req.body.AUDITOR_INT_DATE,req.body.REG_DONE_DATE,req.body.REG_DUE_DATE,req.body.HF_DONE_DATE,req.body.HF_DUE_DATE,req.body.FTS_DONE_DATE,req.body.FTS_DUE_DATE,req.body.EWIS_DONE_DATE,req.body.EWIS_DUE_DATE,req.body.SMS_DONE_DATE,req.body.SMS_DUE_DATE,req.body.REMARKS]];
        connection.query(sql,[values],function(err,result){
            if (err) throw err;
            if (result.affectedRows == 1) {
                // If a new row was inserted
                length_of_rows_internal++;
            }
            /*
            var nxt = new Date(req.body.AUTH_VALID_DATE);
            var total_seconds = Math.abs(today - nxt) / 1000; 
            var d_1 = Math.floor (total_seconds / (60 * 60 * 24)); */
            var inputDate = req.body.AUTH_VALID_DATE;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_1 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);



            var inputDate = req.body.REG_DUE_DATE;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_2 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);


            var inputDate = req.body.HF_DUE_DATE;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_3 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);


            var inputDate = req.body.FTS_DUE_DATE;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_4 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);


            var inputDate = req.body.EWIS_DUE_DATE;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

            var inputDate = req.body.SMS_DUE_DATE;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_6 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

            if(d_1<2){count_internal_quality_auditors_red++;}
            else if(d_1<15){count_internal_quality_auditors_orange++;}
            else if(d_1<30){count_internal_quality_auditors++;}

            if(d_2<2){count_internal_quality_auditors_red++;}
            else if(d_2<15){count_internal_quality_auditors_orange++;}
            else if(d_2<30){count_internal_quality_auditors++;}

            if(d_3<2){count_internal_quality_auditors_red++;}
            else if(d_3<15){count_internal_quality_auditors_orange++;}
            else if(d_3<30){count_internal_quality_auditors++;}

            if(d_4<2){count_internal_quality_auditors_red++;}
            else if(d_4<15){count_internal_quality_auditors_orange++;}
            else if(d_4<30){count_internal_quality_auditors++;}

            if(d_5<2){count_internal_quality_auditors_red++;}
            else if(d_5<15){count_internal_quality_auditors_orange++;}
            else if(d_5<30){count_internal_quality_auditors++;}

            if(d_6<2){count_internal_quality_auditors_red++;}
            else if(d_6<15){count_internal_quality_auditors_orange++;}
            else if(d_6<30){count_internal_quality_auditors++;}
            return res.redirect('/AUDITOR.html');
        });
    }
});
}
else{
return res.redirect('/AUDITOR.html');}
});
app.post('/audit_of_external',function(req,res){
    if(req.body.SR_NO5>0){
    var query = 'SELECT * FROM new_schema.audit_of_external WHERE sr_no = ?';
    var valueToCheck = req.body.SR_NO5;
    
    // Execute the SELECT query
    connection.query(query, [valueToCheck], (error, results) => {
      if (error) {
        console.error('Error executing query: ' + error.stack);
      }
      if (results.length > 0) {
        console.log('Row exists in the database.');
    
        if(req.body.ORGZN)
        {connection.query('UPDATE new_schema.audit_of_external SET auditee_orgzn = ? WHERE sr_no = ?', [req.body.ORGZN, req.body.SR_NO5], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.NAME)
        {connection.query('UPDATE new_schema.audit_of_external SET auditor_name = ? WHERE sr_no = ?', [req.body.NAME, req.body.SR_NO5], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.AUDITDATE)
        {connection.query('UPDATE new_schema.audit_of_external SET audit_date = ? WHERE sr_no = ?', [req.body.AUDITDATE, req.body.SR_NO5], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.NO_OF_FINDINGS)
        {connection.query('UPDATE new_schema.audit_of_external SET no_of_findings = ? WHERE sr_no = ?', [req.body.NO_OF_FINDINGS, req.body.SR_NO5], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.NO_OF_OBSERV)
        {connection.query('UPDATE new_schema.audit_of_external SET no_of_observations = ? WHERE sr_no = ?', [req.body.NO_OF_OBSERV, req.body.SR_NO5], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.CAP_received)
        {connection.query('UPDATE new_schema.audit_of_external SET cap_received_date = ? WHERE sr_no = ?', [req.body.CAP_received, req.body.SR_NO5], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.CAP_approved)
        {connection.query('UPDATE new_schema.audit_of_external SET cap_approved_date = ? WHERE sr_no = ?', [req.body.CAP_approved, req.body.SR_NO5], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.CA_received)
        {connection.query('UPDATE new_schema.audit_of_external SET ca_received_date = ? WHERE sr_no = ?', [req.body.CA_received, req.body.SR_NO5], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.CA_approved)
        {connection.query('UPDATE new_schema.audit_of_external SET ca_approved_date = ? WHERE sr_no = ?', [req.body.CA_approved, req.body.SR_NO5], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.Audit_clos)
        {connection.query('UPDATE new_schema.audit_of_external SET audit_closed_date = ? WHERE sr_no = ?', [req.body.Audit_clos, req.body.SR_NO5], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.REMARKS)
        {connection.query('UPDATE new_schema.audit_of_external SET remark = ? WHERE sr_no = ?', [req.body.REMARKS, req.body.SR_NO5], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        
        return res.redirect('/AUDITOR.html');
    } else {

    var sql = "INSERT INTO new_schema.audit_of_external (sr_no,auditee_orgzn,auditor_name,audit_date,no_of_findings,no_of_observations,cap_received_date,cap_approved_date,ca_received_date,ca_approved_date,audit_closed_date,remark) VALUES ?" +
                  "ON DUPLICATE KEY UPDATE " +
			"auditee_orgzn=VALUES(auditee_orgzn), " +
                  "auditor_name=VALUES(auditor_name), " +
                  "audit_date=VALUES(audit_date), " +
                  "no_of_findings=VALUES(no_of_findings), " +
                  "no_of_observations=VALUES(no_of_observations), " +
			"cap_received_date=VALUES(cap_received_date), " +
			"cap_approved_date=VALUES(cap_approved_date), " +
			"ca_received_date=VALUES(ca_received_date), " +
			"ca_approved_date=VALUES(ca_approved_date), " +
			"audit_closed_date=VALUES(audit_closed_date), " +
                  "remark=VALUES(remark)";
        var values = [[Number(req.body.SR_NO5),req.body.ORGZN,req.body.NAME,req.body.AUDITDATE,req.body.NO_OF_FINDINGS,req.body.NO_OF_OBSERV,req.body.CAP_received,req.body.CAP_approved,req.body.CA_received,req.body.CA_approved,req.body.Audit_clos,req.body.REMARKS]];
        connection.query(sql,[values],function(err,result){
            if (err) throw err;
            if (result.affectedRows == 1) {
                // If a new row was inserted
                length_of_rows_audit_of_external++;
            }
            return res.redirect('/AUDITOR.html');
        });
    }
});
}
else{
return res.redirect('/AUDITOR.html');}
});
app.post('/tools_and_equipment_calibration',function(req,res){ 
    if(req.body.SR_NO1>0){
    var query = 'SELECT * FROM new_schema.tools_and_equipment_calibration WHERE sr_no = ?';
var valueToCheck = req.body.SR_NO1;

// Execute the SELECT query
connection.query(query, [valueToCheck], (error, results) => {
  if (error) {
    console.error('Error executing query: ' + error.stack);
  }
  if (results.length > 0) {
    console.log('Row exists in the database.');

    if(req.body.NOMENCLATURE)
    {connection.query('UPDATE new_schema.tools_and_equipment_calibration SET nomenclature = ? WHERE sr_no = ?', [req.body.NOMENCLATURE, req.body.SR_NO1], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.RANG)
    {connection.query('UPDATE new_schema.tools_and_equipment_calibration SET rang = ? WHERE sr_no = ?', [req.body.RANG, req.body.SR_NO1], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.PART_NO)
    {connection.query('UPDATE new_schema.tools_and_equipment_calibration SET part_no = ? WHERE sr_no = ?', [req.body.PART_NO, req.body.SR_NO1], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.SER_NO)
    {connection.query('UPDATE new_schema.tools_and_equipment_calibration SET ser_no = ? WHERE sr_no = ?', [req.body.SER_NO, req.body.SR_NO1], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.CIASL_ID_NO)
    {connection.query('UPDATE new_schema.tools_and_equipment_calibration SET ciasl_id_no = ? WHERE sr_no = ?', [req.body.CIASL_ID_NO, req.body.SR_NO1], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.CALIBERATION_DATE)
    {connection.query('UPDATE new_schema.tools_and_equipment_calibration SET caliberation_date = ? WHERE sr_no = ?', [req.body.CALIBERATION_DATE, req.body.SR_NO1], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.CALIBERATION_DUE_DATE)
    {connection.query('UPDATE new_schema.tools_and_equipment_calibration SET caliberation_due_date = ? WHERE sr_no = ?', [req.body.CALIBERATION_DUE_DATE, req.body.SR_NO1], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});
    var inputDate = req.body.CALIBERATION_DUE_DATE;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
    var inputDateTime = new Date(yyyy, mm - 1, dd); 
    var oneDayMs = 24 * 60 * 60 * 1000;
    var  currentDate = new Date();
    var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(days_difference_5<2)
        {
            count_tools_red++;
        }
        else if(days_difference_5<15)
        {
            count_tools_orange++;
        }
        else if(days_difference_5<30)
        {
            count_tools++;
        }
}
    if(req.body.CALIBERATION_DONE_BY_ORGN)
    {connection.query('UPDATE new_schema.tools_and_equipment_calibration SET caliberation_done_by_orgn = ? WHERE sr_no = ?', [req.body.CALIBERATION_DONE_BY_ORGN, req.body.SR_NO1], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.REMARKS)
    {connection.query('UPDATE new_schema.tools_and_equipment_calibration SET remarks = ? WHERE sr_no = ?', [req.body.REMARKS, req.body.SR_NO1], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    return res.redirect('/TOOLS.html');
} else {

    console.log('Row does not exist in the database.');
    var sql = "INSERT INTO new_schema.tools_and_equipment_calibration (sr_no,nomenclature,rang,part_no,ser_no,ciasl_id_no,caliberation_date,caliberation_due_date,caliberation_done_by_orgn,remarks) VALUES ?" +
                  "ON DUPLICATE KEY UPDATE " +
                 	"nomenclature=VALUES(nomenclature), " +
			"rang=VALUES(rang), " +
			"part_no=VALUES(part_no), " +
			"ser_no=VALUES(ser_no), " +
			"ciasl_id_no=VALUES(ciasl_id_no), " +
			"caliberation_date=VALUES(caliberation_date), " +
			"caliberation_due_date=VALUES(caliberation_due_date), " +
			"caliberation_done_by_orgn=VALUES(caliberation_done_by_orgn), " +
			"remarks=VALUES(remarks)";
        var values = [[Number(req.body.SR_NO1),req.body.NOMENCLATURE,req.body.RANG,req.body.PART_NO,req.body.SER_NO,req.body.CIASL_ID_NO,req.body.CALIBERATION_DATE,req.body.CALIBERATION_DUE_DATE,req.body.CALIBERATION_DONE_BY_ORGN,req.body.REMARKS]];
        connection.query(sql,[values],function(err,result){
            if (err) throw err;
            if (result.affectedRows == 1) {
                // If a new row was inserted
                length_of_rows_tools++;
            }
            var inputDate = req.body.CALIBERATION_DUE_DATE;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
            if(days_difference_5<2)
            {
                count_tools_red++;
            }
            else if(days_difference_5<15)
            {
                count_tools_orange++;
            }
            else if(days_difference_5<30)
            {
                count_tools++;
            }
            return res.redirect('/TOOLS.html');
        });
  }
});
}
else{
return res.redirect('/TOOLS.html');}
});
app.post('/all_staff_data',function(req,res){
    if(req.body.SR_NO>0){
    var query = 'SELECT * FROM new_schema.all_staff_data WHERE sr_no = ?';
var valueToCheck = req.body.SR_NO;

// Execute the SELECT query
connection.query(query, [valueToCheck], (error, results) => {
  if (error) {
    console.error('Error executing query: ' + error.stack);
  }
  if (results.length > 0) {
    console.log('Row exists in the database.');

    if(req.body.NAME)
    {connection.query('UPDATE new_schema.all_staff_data SET name = ? WHERE sr_no = ?', [req.body.NAME, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.DESG)
    {connection.query('UPDATE new_schema.all_staff_data SET desgn = ? WHERE sr_no = ?', [req.body.DESG, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.JOINING_DATE)
    {connection.query('UPDATE new_schema.all_staff_data SET joining_date = ? WHERE sr_no = ?', [req.body.JOINING_DATE, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.CONTRACT_STARTING_DATE)
    {connection.query('UPDATE new_schema.all_staff_data SET current_contract_starting_date = ? WHERE sr_no = ?', [req.body.CONTRACT_STARTING_DATE, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    
    if(req.body.CONTRACT_VALIDITY_DATE)
    {
        var inputDate = req.body.CONTRACT_VALIDITY_DATE;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d1 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(d1<2){count_all_staff_data_red++;}
        else if(d1<15){count_all_staff_data_orange++;}
        else if(d1<30){count_all_staff_data++;}
        connection.query('UPDATE new_schema.all_staff_data SET contract_validity_date = ? WHERE sr_no = ?', [req.body.CONTRACT_VALIDITY_DATE, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        if(req.body.AVS)
        {connection.query('UPDATE new_schema.all_staff_data SET avsec = ? WHERE sr_no = ?', [req.body.AVS, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        
        if(req.body.AVSEC)
    {
        var inputDate = req.body.AVSEC;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d2 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(d2<2){count_all_staff_data_red++;}
        else if(d2<15){count_all_staff_data_orange++;}
        else if(d2<30){count_all_staff_data++;}
        connection.query('UPDATE new_schema.all_staff_data SET avsec_training_due_date = ? WHERE sr_no = ?', [req.body.AVSEC, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    
    if(req.body.AEP)
    {
        var inputDate = req.body.AEP;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d3 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(d3<2){count_all_staff_data_red++;}
        else if(d3<15){count_all_staff_data_orange++;}
        else if(d3<30){count_all_staff_data++;}
        connection.query('UPDATE new_schema.all_staff_data SET aep_validity = ? WHERE sr_no = ?', [req.body.AEP, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.ADP)
    {
        var inputDate = req.body.ADP;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d4 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(d4<2){count_all_staff_data_red++;}
        else if(d4<15){count_all_staff_data_orange++;}
        else if(d4<30){count_all_staff_data++;}
        connection.query('UPDATE new_schema.all_staff_data SET adp_validity = ? WHERE sr_no = ?', [req.body.ADP, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.REMARKS)
    {connection.query('UPDATE new_schema.all_staff_data SET remarks = ? WHERE sr_no = ?', [req.body.REMARKS, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.STAFF_NO)
    {connection.query('UPDATE new_schema.all_staff_data SET staff_no = ? WHERE sr_no = ?', [req.body.STAFF_NO, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.PCC)
    {
        var inputDate = req.body.PCC;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d1 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(d1<2){count_all_staff_data_red++;}
        else if(d1<15){count_all_staff_data_orange++;}
        else if(d1<30){count_all_staff_data++;}
        connection.query('UPDATE new_schema.all_staff_data SET pcc = ? WHERE sr_no = ?', [req.body.PCC, req.body.SR_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
        
    return res.redirect('/ADMIN.html');
} else {


    var sql = "INSERT INTO new_schema.all_staff_data (sr_no,name,desgn,joining_date,current_contract_starting_date,contract_validity_date,avsec,avsec_training_due_date,aep_validity,adp_validity,pcc,remarks,staff_no) VALUES ?" +
                  "ON DUPLICATE KEY UPDATE " +
			"name=VALUES(name), " +
			"desgn=VALUES(desgn), " +
			"joining_date=VALUES(joining_date), " +
            "current_contract_starting_date=VALUES(current_contract_starting_date), " +
			"contract_validity_date=VALUES(contract_validity_date), " +
            "avsec=VALUES(avsec), " +
			"avsec_training_due_date=VALUES(avsec_training_due_date), " +
			"aep_validity=VALUES(aep_validity), " +
			"adp_validity=VALUES(adp_validity), " +
            "pcc=VALUES(pcc), " +
			"remarks=VALUES(remarks), " +
			"staff_no=VALUES(staff_no)";
        var values = [[Number(req.body.SR_NO),req.body.NAME,req.body.DESG,req.body.JOINING_DATE,req.body.CONTRACT_STARTING_DATE,req.body.CONTRACT_VALIDITY_DATE,req.body.AVS,req.body.AVSEC,req.body.AEP,req.body.ADP,req.body.PCC,req.body.REMARKS,req.body.STAFF_NO]];
        connection.query(sql,[values],function(err,result){
            if (err) throw err;
            if (result.affectedRows == 1) {
                // If a new row was inserted
                length_of_rows++;
            }

            var inputDate = req.body.CONTRACT_VALIDITY_DATE;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d1 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

            var inputDate = req.body.AVSEC;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d2 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);


            var inputDate = req.body.AEP;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d3 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);


            var inputDate = req.body.ADP;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d4 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

            if(d1<2){count_all_staff_data_red++;}
            else if(d1<15){count_all_staff_data_orange++;}
            else if(d1<30){count_all_staff_data++;}

            if(d2<2){count_all_staff_data_red++;}
            else if(d2<15){count_all_staff_data_orange++;}
            else if(d2<30){count_all_staff_data++;}

            if(d3<2){count_all_staff_data_red++;}
            else if(d3<15){count_all_staff_data_orange++;}
            else if(d3<30){count_all_staff_data++;}

            if(d4<2){count_all_staff_data_red++;}
            else if(d4<15){count_all_staff_data_orange++;}
            else if(d4<30){count_all_staff_data++;}

            var inputDate = req.body.PCC;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d1 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
        if(d1<2){count_all_staff_data_red++;}
        else if(d1<15){count_all_staff_data_orange++;}
        else if(d1<30){count_all_staff_data++;}
            return res.redirect('/ADMIN.html');
        });
    }
});
}
else{
return res.redirect('/ADMIN.html');}
});
app.post('/GSE',function(req,res){
    /*
    var sql = "INSERT INTO new_schema.gse (sl_no,eqpt_name,eqpt_id_no,type_of_check,last_check,next_check) VALUES ?";
    var values = [[Number(req.body.SL_NO),req.body.EQPT_NAME,req.body.EQPT_ID_NO,req.body.TYPE_OF_CHECK,req.body.LAST_CHECK,req.body.NEXT_CHECK]];
    connection.query(sql,[values],function(err,result){
        if (err) throw err;
        length_of_rows_gse++;
        return res.redirect('/GSE.html');
    });
    */
    if(req.body.SL_NO>0){
    var query = 'SELECT * FROM new_schema.gse WHERE sl_no = ?';
var valueToCheck = req.body.SL_NO;

// Execute the SELECT query
connection.query(query, [valueToCheck], (error, results) => {
  if (error) {
    console.error('Error executing query: ' + error.stack);
  }
  if (results.length > 0) {
    console.log('Row exists in the database.');

    if(req.body.EQPT_NAME)
    {connection.query('UPDATE new_schema.gse SET eqpt_name = ? WHERE sl_no = ?', [req.body.EQPT_NAME, req.body.SL_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.EQPT_ID_NO)
    {connection.query('UPDATE new_schema.gse SET eqpt_id_no = ? WHERE sl_no = ?', [req.body.EQPT_ID_NO, req.body.SL_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.TYPE_OF_CHECK)
    {connection.query('UPDATE new_schema.gse SET type_of_check = ? WHERE sl_no = ?', [req.body.TYPE_OF_CHECK, req.body.SL_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.LAST_CHECK)
    {connection.query('UPDATE new_schema.gse SET last_check = ? WHERE sl_no = ?', [req.body.LAST_CHECK, req.body.SL_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.NEXT_CHECK)
    {
        var inputDate = req.body.NEXT_CHECK;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
                    var inputDateTime = new Date(yyyy, mm - 1, dd); 
                    var oneDayMs = 24 * 60 * 60 * 1000;
                    var  currentDate = new Date();
                    var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
                    if(days_difference_5<2)
                    {
                        count_gse_red++;
                    }
                    else if(days_difference_5<15)
                    {
                        count_gse_orange++;
                    }
                    else if(days_difference_5<30)
                    {
                        count_gse++;
                    }
        connection.query('UPDATE new_schema.gse SET next_check = ? WHERE sl_no = ?', [req.body.NEXT_CHECK, req.body.SL_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    
    return res.redirect('/GSE.html');
} else {


        var sql = "INSERT INTO new_schema.gse (sl_no,eqpt_name,eqpt_id_no,type_of_check,last_check,next_check) VALUES ? " +
                  "ON DUPLICATE KEY UPDATE " +
                  "eqpt_name=VALUES(eqpt_name), " +
                  "eqpt_id_no=VALUES(eqpt_id_no), " +
                  "type_of_check=VALUES(type_of_check), " +
                  "last_check=VALUES(last_check), " +
                  "next_check=VALUES(next_check)";
        var values = [[Number(req.body.SL_NO),req.body.EQPT_NAME,req.body.EQPT_ID_NO,req.body.TYPE_OF_CHECK,req.body.LAST_CHECK,req.body.NEXT_CHECK]];
        connection.query(sql,[values],function(err,result){
            if (err) throw err;
            if (result.affectedRows == 1) {
                // If a new row was inserted
                length_of_rows_gse++;
            }
                    var inputDate = req.body.NEXT_CHECK;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
                    var inputDateTime = new Date(yyyy, mm - 1, dd); 
                    var oneDayMs = 24 * 60 * 60 * 1000;
                    var  currentDate = new Date();
                    var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
                    if(days_difference_5<2)
                    {
                        count_gse_red++;
                    }
                    else if(days_difference_5<15)
                    {
                        count_gse_orange++;
                    }
                    else if(days_difference_5<30)
                    {
                        count_gse++;
                    }
            return res.redirect('/GSE.html');
        });
    }
});
}
else{
return res.redirect('/GSE.html');}
});
app.post('/regulator_approval',function(req,res){
    if(req.body.SL_NO1>0){
    var query = 'SELECT * FROM new_schema.regulators_amo_approvals WHERE sl_no = ?';
var valueToCheck = req.body.SL_NO1;

// Execute the SELECT query
connection.query(query, [valueToCheck], (error, results) => {
  if (error) {
    console.error('Error executing query: ' + error.stack);
  }
  if (results.length > 0) {
    console.log('Row exists in the database.');

    if(req.body.REGULATOR)
    {connection.query('UPDATE new_schema.regulators_amo_approvals SET regulator = ? WHERE sl_no = ?', [req.body.REGULATOR, req.body.SL_NO1], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.AMO_APPROV_NO)
    {connection.query('UPDATE new_schema.regulators_amo_approvals SET amo_approval_no = ? WHERE sl_no = ?', [req.body.AMO_APPROV_NO, req.body.SL_NO1], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.INI_APPROV_DATE)
    {connection.query('UPDATE new_schema.regulators_amo_approvals SET initial_approval_date = ? WHERE sl_no = ?', [req.body.INI_APPROV_DATE, req.body.SL_NO1], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.APPROV_VALID_DATE)
    {connection.query('UPDATE new_schema.regulators_amo_approvals SET approval_validity_date = ? WHERE sl_no = ?', [req.body.APPROV_VALID_DATE, req.body.SL_NO1], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.A1)
    {connection.query('UPDATE new_schema.regulators_amo_approvals SET scope_of_approval_a1 = ? WHERE sl_no = ?', [req.body.A1, req.body.SL_NO1], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.A2)
    {connection.query('UPDATE new_schema.regulators_amo_approvals SET scope_of_approval_a2 = ? WHERE sl_no = ?', [req.body.A2, req.body.SL_NO1], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.A3)
    {connection.query('UPDATE new_schema.regulators_amo_approvals SET scope_of_approval_a3 = ? WHERE sl_no = ?', [req.body.A3, req.body.SL_NO1], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.A4)
    {connection.query('UPDATE new_schema.regulators_amo_approvals SET scope_of_approval_a4 = ? WHERE sl_no = ?', [req.body.A4, req.body.SL_NO1], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.operators_under_reg)
    {connection.query('UPDATE new_schema.regulators_amo_approvals SET operators_under_regulator = ? WHERE sl_no = ?', [req.body.operators_under_reg, req.body.SL_NO1], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.B1)
    {connection.query('UPDATE new_schema.regulators_amo_approvals SET staff_b1 = ? WHERE sl_no = ?', [req.body.B1, req.body.SL_NO1], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.B2)
    {connection.query('UPDATE new_schema.regulators_amo_approvals SET staff_b2 = ? WHERE sl_no = ?', [req.body.B2, req.body.SL_NO1], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    
    return res.redirect('/QUALITY.html');
} else {


    var sql = "INSERT INTO new_schema.regulators_amo_approvals (sl_no,regulator,amo_approval_no,initial_approval_date,approval_validity_date,scope_of_approval_a1,scope_of_approval_a2,scope_of_approval_a3,scope_of_approval_a4,operators_under_regulator,staff_b1,staff_b2) VALUES ?" +
                  "ON DUPLICATE KEY UPDATE " +
                  "regulator=VALUES(regulator), " +
                  "amo_approval_no=VALUES(amo_approval_no), " +
                  "initial_approval_date=VALUES(initial_approval_date), " +
                  "approval_validity_date=VALUES(approval_validity_date), " +
			"scope_of_approval_a1=VALUES(scope_of_approval_a1), " +
			"scope_of_approval_a2=VALUES(scope_of_approval_a2), " +
			"scope_of_approval_a3=VALUES(scope_of_approval_a3), " +
			"scope_of_approval_a4=VALUES(scope_of_approval_a4), " +
			"operators_under_regulator=VALUES(operators_under_regulator), " +
            "staff_b1=VALUES(staff_b1), " +
                  "staff_b2=VALUES(staff_b2)";
        var values = [[Number(req.body.SL_NO1),req.body.REGULATOR,req.body.AMO_APPROV_NO,req.body.INI_APPROV_DATE,req.body.APPROV_VALID_DATE,req.body.A1,req.body.A2,req.body.A3,req.body.A4,req.body.operators_under_reg,req.body.B1,req.body.B2]];
        connection.query(sql,[values],function(err,result){
            if (err) throw err;
            if (result.affectedRows == 1) {
                // If a new row was inserted
                length_of_rows_raa++;
            }
            /*
            var nxt = new Date(req.body.APPROV_VALID_DATE);
                    var total_seconds = Math.abs(today - nxt) / 1000; 
                    var days_difference_5 = Math.floor (total_seconds / (60 * 60 * 24)); */
                    var inputDate = req.body.APPROV_VALID_DATE;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
                    if(days_difference_5<2)
                    {
                        count_regulators_amo_approvals_red++;
                    }
                    else if(days_difference_5<15)
                    {
                        count_regulators_amo_approvals_orange++;
                    }
                    else if(days_difference_5<30)
                    {
                        count_regulators_amo_approvals++;
                    }
            return res.redirect('/QUALITY.html');
        });
}
});
}
else{
return res.redirect('/QUALITY.html');}
});
app.post('/insert_operators',function(req,res){
    if(req.body.SL_NO2>0){
    var query = 'SELECT * FROM new_schema.operators WHERE sl_no = ?';
    var valueToCheck = req.body.SL_NO2;

// Execute the SELECT query
connection.query(query, [valueToCheck], (error, results) => {
  if (error) {
    console.error('Error executing query: ' + error.stack);
  }
  if (results.length > 0) {
    console.log('Row exists in the database.');

    if(req.body.OPERATOR)
    {connection.query('UPDATE new_schema.operators SET operator = ? WHERE sl_no = ?', [req.body.OPERATOR, req.body.SL_NO2], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.OP_code)
    {connection.query('UPDATE new_schema.operators SET op_code = ? WHERE sl_no = ?', [req.body.OP_code, req.body.SL_NO2], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.INI_AGREEE_DATE)
    {connection.query('UPDATE new_schema.operators SET ini_agree_date = ? WHERE sl_no = ?', [req.body.INI_AGREEE_DATE, req.body.SL_NO2], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.AGREE_VALID_DATE)
    {
        var inputDate = req.body.AGREE_VALID_DATE;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
            if(days_difference_5<2)
            {
                count_operators_red++;
            }
            else if(days_difference_5<15)
            {
                count_operators_orange++;
            }
            else if(days_difference_5<30)
            {
                count_operators_red++;
            }
        connection.query('UPDATE new_schema.operators SET agree_validity_date = ? WHERE sl_no = ?', [req.body.AGREE_VALID_DATE, req.body.SL_NO2], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    
    return res.redirect('/QUALITY.html');
} else {

    var sql = "INSERT INTO new_schema.operators (sl_no,operator,op_code,ini_agree_date,agree_validity_date) VALUES ?" +
                  "ON DUPLICATE KEY UPDATE " +
                  "operator=VALUES(operator), " +
                  "op_code=VALUES(op_code), " +
                  "ini_agree_date=VALUES(ini_agree_date), " +
                  "agree_validity_date=VALUES(agree_validity_date)";
        var values = [[Number(req.body.SL_NO2),req.body.OPERATOR,req.body.OP_code,req.body.INI_AGREEE_DATE,req.body.AGREE_VALID_DATE]];
        connection.query(sql,[values],function(err,result){
            if (err) throw err;
            if (result.affectedRows == 1) {
                // If a new row was inserted
                length_of_rows_operator++;
            }
            /*
            var nxt = new Date(req.body.AGREE_VALID_DATE);
            var total_seconds = Math.abs(today - nxt) / 1000; 
            var days_difference_5 = Math.floor (total_seconds / (60 * 60 * 24)); */
            var inputDate = req.body.AGREE_VALID_DATE;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
            if(days_difference_5<2)
            {
                count_operators_red++;
            }
            else if(days_difference_5<15)
            {
                count_operators_orange++;
            }
            else if(days_difference_5<30)
            {
                count_operators_red++;
            }
            return res.redirect('/QUALITY.html');
        });
    }
});
}
else{
return res.redirect('/QUALITY.html');}   
});
app.post('/STORAGE',function(req,res){
    if(req.body.SL_NO>0){
    var query = 'SELECT * FROM new_schema.storage_life_monitoring WHERE sl_no = ?';
var valueToCheck = req.body.SL_NO;

// Execute the SELECT query
connection.query(query, [valueToCheck], (error, results) => {
  if (error) {
    console.error('Error executing query: ' + error.stack);
  }
  if (results.length > 0) {
    console.log('Row exists in the database.');

    if(req.body.NOMENCLATURE)
    {connection.query('UPDATE new_schema.storage_life_monitoring SET nomenclature = ? WHERE sl_no = ?', [req.body.NOMENCLATURE, req.body.SL_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.PART_NO)
    {connection.query('UPDATE new_schema.storage_life_monitoring SET part_no = ? WHERE sl_no = ?', [req.body.PART_NO, req.body.SL_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.BATCH_NO)
    {connection.query('UPDATE new_schema.storage_life_monitoring SET batch_no = ? WHERE sl_no = ?', [req.body.BATCH_NO, req.body.SL_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.STORAGE_LIFE_EXPIRY)
    {connection.query('UPDATE new_schema.storage_life_monitoring SET storage_life = ? WHERE sl_no = ?', [req.body.STORAGE_LIFE_EXPIRY, req.body.SL_NO], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    
    return res.redirect('/STORAGE.html');
} else {
        var sql = "INSERT INTO new_schema.storage_life_monitoring (sl_no,nomenclature,part_no,batch_no,storage_life) VALUES ? " +
                  "ON DUPLICATE KEY UPDATE " +
                  "nomenclature=VALUES(nomenclature), " +
                  "part_no=VALUES(part_no), " +
                  "batch_no=VALUES(batch_no), " +
                  "storage_life=VALUES(storage_life)";
        var values = [[Number(req.body.SL_NO),req.body.NOMENCLATURE,req.body.PART_NO,req.body.BATCH_NO,req.body.STORAGE_LIFE_EXPIRY]];
        connection.query(sql,[values],function(err,result){
            if (err) throw err;
            if (result.affectedRows == 1) {
                // If a new row was inserted
                length_of_rows_storage++;
            }

                    var inputDate = req.body.STORAGE_LIFE_EXPIRY;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
                    var inputDateTime = new Date(yyyy, mm - 1, dd); 
                    var oneDayMs = 24 * 60 * 60 * 1000;
                    var  currentDate = new Date();
                    var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
                    if(days_difference_5<2)
                    {
                        count_storage_red++;
                    }
                    else if(days_difference_5<15)
                    {
                        count_storage_orange++;
                    }
                    else if(days_difference_5<30)
                    {
                        count_storage++;
                    }
            return res.redirect('/STORAGE.html');
        });
    }
});
}
else{
return res.redirect('/STORAGE.html');}
});
app.post('/PERMISSION',function(req,res){
    if(req.body.USER_ID>0)
    {
    var query = 'SELECT * FROM new_schema.permissions WHERE user_id = ?';
var valueToCheck = req.body.USER_ID;

// Execute the SELECT query
connection.query(query, [valueToCheck], (error, results) => {
  if (error) {
    console.error('Error executing query: ' + error.stack);
  }
  if (results.length > 0) {
    console.log('Row exists in the database.');

    if(req.body.USER_FULLNAME)
    {connection.query('UPDATE new_schema.permissions SET user_fullname = ? WHERE user_id = ?', [req.body.USER_FULLNAME, req.body.USER_ID], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.AME_LICENSE)
    {connection.query('UPDATE new_schema.permissions SET AME_LICENSE = ? WHERE user_id = ?', [req.body.AME_LICENSE.toUpperCase(), req.body.USER_ID], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.AME_CONTINUATION)
    {connection.query('UPDATE new_schema.permissions SET AME_CONTINUATION = ? WHERE user_id = ?', [req.body.AME_CONTINUATION.toUpperCase(), req.body.USER_ID], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.AME_AUTHORISATION)
    {connection.query('UPDATE new_schema.permissions SET AME_AUTHORISATION = ? WHERE user_id = ?', [req.body.AME_AUTHORISATION.toUpperCase(), req.body.USER_ID], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.AUTHORISATION_COVERAGE)
    {connection.query('UPDATE new_schema.permissions SET AUTHORISATION_COVERAGE = ? WHERE user_id = ?', [req.body.AUTHORISATION_COVERAGE.toUpperCase(), req.body.USER_ID], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.TECHNICIANS)
    {connection.query('UPDATE new_schema.permissions SET TECHNICIANS = ? WHERE user_id = ?', [req.body.TECHNICIANS.toUpperCase(), req.body.USER_ID], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.REGULAR_AUDIT)
    {connection.query('UPDATE new_schema.permissions SET REGULAR_AUDIT = ? WHERE user_id = ?', [req.body.REGULAR_AUDIT.toUpperCase(), req.body.USER_ID], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.AUDIT_BY_AIRLINE)
    {connection.query('UPDATE new_schema.permissions SET AUDIT_BY_AIRLINE = ? WHERE user_id = ?', [req.body.AUDIT_BY_AIRLINE.toUpperCase(), req.body.USER_ID], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.QUALITY_AUDIT_QUALITY)
    {connection.query('UPDATE new_schema.permissions SET QUALITY_AUDIT_QUALITY = ? WHERE user_id = ?', [req.body.QUALITY_AUDIT_QUALITY.toUpperCase(), req.body.USER_ID], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.QUALITY_AUDIT_LINE)
    {connection.query('UPDATE new_schema.permissions SET QUALITY_AUDIT_LINE = ? WHERE user_id = ?', [req.body.QUALITY_AUDIT_LINE.toUpperCase(), req.body.USER_ID], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.AUDIT_EXTERNAL_CIASL)
    {connection.query('UPDATE new_schema.permissions SET AUDIT_EXTERNAL_CIASL = ? WHERE user_id = ?', [req.body.AUDIT_EXTERNAL_CIASL.toUpperCase(), req.body.USER_ID], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.INTERNAL_QUALITY)
    {connection.query('UPDATE new_schema.permissions SET INTERNAL_QUALITY = ? WHERE user_id = ?', [req.body.INTERNAL_QUALITY.toUpperCase(), req.body.USER_ID], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.TOOLS)
    {connection.query('UPDATE new_schema.permissions SET TOOLS = ? WHERE user_id = ?', [req.body.TOOLS.toUpperCase(), req.body.USER_ID], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.ALL_STAFF)
    {connection.query('UPDATE new_schema.permissions SET ALL_STAFF = ? WHERE user_id = ?', [req.body.ALL_STAFF.toUpperCase(), req.body.USER_ID], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.GROUND_SUPPORT)
    {connection.query('UPDATE new_schema.permissions SET GROUND_SUPPORT = ? WHERE user_id = ?', [req.body.GROUND_SUPPORT.toUpperCase(), req.body.USER_ID], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.REGULATOR_APPROVAL)
    {connection.query('UPDATE new_schema.permissions SET REGULATOR_APPROVAL = ? WHERE user_id = ?', [req.body.REGULATOR_APPROVAL.toUpperCase(), req.body.USER_ID], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.OPERATORS)
    {connection.query('UPDATE new_schema.permissions SET OPERATORS = ? WHERE user_id = ?', [req.body.OPERATORS.toUpperCase(), req.body.USER_ID], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    if(req.body.STORAGE_LIFE)
    {connection.query('UPDATE new_schema.permissions SET STORAGE_LIFE = ? WHERE user_id = ?', [req.body.STORAGE_LIFE.toUpperCase(), req.body.USER_ID], (error, updateResult) => {if (error) {console.error('Error updating row: ' + error.stack);}});}
    
    return res.redirect('/PERMISSION.html');
} else {
        var sql = "INSERT INTO new_schema.permissions (user_id,user_fullname,AME_LICENSE,AME_CONTINUATION,AME_AUTHORISATION,AUTHORISATION_COVERAGE,TECHNICIANS,REGULAR_AUDIT,AUDIT_BY_AIRLINE,QUALITY_AUDIT_QUALITY,QUALITY_AUDIT_LINE,AUDIT_EXTERNAL_CIASL,INTERNAL_QUALITY,TOOLS,ALL_STAFF,GROUND_SUPPORT,REGULATOR_APPROVAL,OPERATORS,STORAGE_LIFE) VALUES ? " +
                  "ON DUPLICATE KEY UPDATE " +
                  "user_fullname=VALUES(user_fullname), " +
                  "AME_LICENSE=VALUES(AME_LICENSE), " +
                  "AME_CONTINUATION=VALUES(AME_CONTINUATION), " +
                  "AME_AUTHORISATION=VALUES(AME_AUTHORISATION), " +
                  "AUTHORISATION_COVERAGE=VALUES(AUTHORISATION_COVERAGE), " +
                  "TECHNICIANS=VALUES(TECHNICIANS), " +
                  "REGULAR_AUDIT=VALUES(REGULAR_AUDIT), " +
                  "AUDIT_BY_AIRLINE=VALUES(AUDIT_BY_AIRLINE), " +
                  "QUALITY_AUDIT_QUALITY=VALUES(QUALITY_AUDIT_QUALITY), " +
                  "QUALITY_AUDIT_LINE=VALUES(QUALITY_AUDIT_LINE), " +
                  "AUDIT_EXTERNAL_CIASL=VALUES(AUDIT_EXTERNAL_CIASL), " +
                  "INTERNAL_QUALITY=VALUES(INTERNAL_QUALITY), " +
                  "TOOLS=VALUES(TOOLS), " +
                  "ALL_STAFF=VALUES(ALL_STAFF), " +
                  "GROUND_SUPPORT=VALUES(GROUND_SUPPORT), " +
                  "REGULATOR_APPROVAL=VALUES(REGULATOR_APPROVAL), " +
                  "OPERATORS=VALUES(OPERATORS), " +
                  "STORAGE_LIFE=VALUES(STORAGE_LIFE)";
        var values = [[Number(req.body.USER_ID),req.body.USER_FULLNAME,req.body.AME_LICENSE.toUpperCase(),req.body.AME_CONTINUATION.toUpperCase(),req.body.AME_AUTHORISATION.toUpperCase(),req.body.AUTHORISATION_COVERAGE.toUpperCase(),req.body.TECHNICIANS.toUpperCase(),req.body.REGULAR_AUDIT.toUpperCase(),req.body.AUDIT_BY_AIRLINE.toUpperCase(),req.body.QUALITY_AUDIT_QUALITY.toUpperCase(),req.body.QUALITY_AUDIT_LINE.toUpperCase(),req.body.AUDIT_EXTERNAL_CIASL.toUpperCase(),req.body.INTERNAL_QUALITY.toUpperCase(),req.body.TOOLS.toUpperCase(),req.body.ALL_STAFF.toUpperCase(),req.body.GROUND_SUPPORT.toUpperCase(),req.body.REGULATOR_APPROVAL.toUpperCase(),req.body.OPERATORS.toUpperCase(),req.body.STORAGE_LIFE.toUpperCase()]];
        connection.query(sql,[values],function(err,result){
            if (err) throw err;
            if (result.affectedRows == 1) {
                // If a new row was inserted
                length_of_rows_permission++;
            }
            return res.redirect('/PERMISSION.html');
        });
    }
});
    }
    else{
        return res.redirect('/PERMISSION.html');
    }
});


app.post('/delete_tech_ame_license',function(req,res){
    
    var id = req.body.button_data.toString();
    connection.query('SELECT dgca_lic_validity as nc FROM new_schema.amelicense WHERE sr_no = ?', // replace with your table name and primary key
    [id],
    function(err, result) {
        if (err) throw err;
        /*
                    var nxt = new Date(result[0].nc);
                    var total_seconds = Math.abs(today - nxt) / 1000; 
                    var days_difference_5 = Math.floor (total_seconds / (60 * 60 * 24)); */
                    var inputDate = result[0].nc;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
                    if(days_difference_5<2)
                    {
                        count_amelicense_red--;
                    }
                    else if(days_difference_5<15)
                    {
                        count_amelicense_orange--;
                    }
                    else if(days_difference_5<30)
                    {
                        count_amelicense--;
                    }
    });
    connection.query(
     'DELETE FROM new_schema.amelicense WHERE sr_no = ?', // replace with your table name and primary key
     [id], // replace with the ID of the row you want to delete
     function(err, result) {
       if (err) throw err;
       console.log('Deleted ' + result.affectedRows + ' row(s)');
       length_of_rows_amelicense--;
     }
   );
  return res.redirect('/ENGINEER.html');
});
app.post('/delete_ame_continuations',function(req,res){
    
    var id = req.body.button_data.toString();
 
    connection.query('SELECT A320_V2500 as a1,A320_CFM_LEAP_1A as a2,A330_RR_T700 as a3,A330_GE_CF6 as a4,A330_NEO_RR_T7000 as a5,A330_P_AND_W as a6,A350_RR_T_XWB as a7,B737_CFM56 as a8,B737_MAX_CFM_LEAP1B as a9,B777_GE90 as a10,B787_GENX as a11,ADDNL_REFR as a12,HF as a13,FTS as a14,EWIS as a15,SMS as a16,REGULATIONS as a17,GCAA as a18,ETOPS as a19,RVSM as a20,operator_proc as a21 FROM new_schema.ame_continuation_trainings WHERE sr_no = ?', // replace with your table name and primary key
    [id],
    function(err, result) {
        if (err) throw err;
        /*
                    var nxt = new Date(result[0].a1);
                    var total_seconds = Math.abs(today - nxt) / 1000; 
                    var d_1 = Math.floor (total_seconds / (60 * 60 * 24)); */
                    var inputDate = result[0].a1;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_1 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

        var inputDate = result[0].a2;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_2 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

        var inputDate = result[0].a3;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_3 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

        var inputDate = result[0].a4;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_4 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

        var inputDate = result[0].a5;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

        var inputDate = result[0].a6;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_6 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

        var inputDate = result[0].a7;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_7 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

        var inputDate = result[0].a8;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_8 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

        var inputDate = result[0].a9;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_9 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

        var inputDate = result[0].a10;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_10 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

        var inputDate = result[0].a11;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_11 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

        var inputDate = result[0].a12;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_12 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

        var inputDate = result[0].a21;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_21 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);


        var inputDate = result[0].a13;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_13 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

        var inputDate = result[0].a14;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_14 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

        var inputDate = result[0].a15;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_15 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

        var inputDate = result[0].a16;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_16 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

        var inputDate = result[0].a17;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_17 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

        var inputDate = result[0].a18;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_18 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

        var inputDate = result[0].a19;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_19 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

        var inputDate = result[0].a20;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_20 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

                    if(d_1<2){count_ame_continuation_trainings_red--;}
                    else if(d_1<15){count_ame_continuation_trainings_orange--;}
                    else if(d_1<30){count_ame_continuation_trainings--;}

                    if(d_2<2){count_ame_continuation_trainings_red--;}
                    else if(d_2<15){count_ame_continuation_trainings_orange--;}
                    else if(d_2<30){count_ame_continuation_trainings--;}

                    if(d_3<2){count_ame_continuation_trainings_red--;}
                    else if(d_3<15){count_ame_continuation_trainings_orange--;}
                    else if(d_3<30){count_ame_continuation_trainings--;}

                    if(d_4<2){count_ame_continuation_trainings_red--;}
                    else if(d_4<15){count_ame_continuation_trainings_orange--;}
                    else if(d_4<30){count_ame_continuation_trainings--;}

                    if(d_5<2){count_ame_continuation_trainings_red--;}
                    else if(d_5<15){count_ame_continuation_trainings_orange--;}
                    else if(d_5<30){count_ame_continuation_trainings--;}

                    if(d_6<2){count_ame_continuation_trainings_red--;}
                    else if(d_6<15){count_ame_continuation_trainings_orange--;}
                    else if(d_6<30){count_ame_continuation_trainings--;}

                    if(d_7<2){count_ame_continuation_trainings_red--;}
                    else if(d_7<15){count_ame_continuation_trainings_orange--;}
                    else if(d_7<30){count_ame_continuation_trainings--;}

                    if(d_8<2){count_ame_continuation_trainings_red--;}
                    else if(d_8<15){count_ame_continuation_trainings_orange--;}
                    else if(d_8<30){count_ame_continuation_trainings--;}

                    if(d_9<2){count_ame_continuation_trainings_red--;}
                    else if(d_9<15){count_ame_continuation_trainings_orange--;}
                    else if(d_9<30){count_ame_continuation_trainings--;}

                    if(d_10<2){count_ame_continuation_trainings_red--;}
                    else if(d_10<15){count_ame_continuation_trainings_orange--;}
                    else if(d_10<30){count_ame_continuation_trainings--;}

                    if(d_11<2){count_ame_continuation_trainings_red--;}
                    else if(d_11<15){count_ame_continuation_trainings_orange--;}
                    else if(d_11<30){count_ame_continuation_trainings--;}

                    if(d_12<2){count_ame_continuation_trainings_red--;}
                    else if(d_12<15){count_ame_continuation_trainings_orange--;}
                    else if(d_12<30){count_ame_continuation_trainings--;}

                    if(d_13<2){count_ame_continuation_trainings_red--;}
                    else if(d_13<15){count_ame_continuation_trainings_orange--;}
                    else if(d_13<30){count_ame_continuation_trainings--;}

                    if(d_14<2){count_ame_continuation_trainings_red--;}
                    else if(d_14<15){count_ame_continuation_trainings_orange--;}
                    else if(d_14<30){count_ame_continuation_trainings--;}

                    if(d_15<2){count_ame_continuation_trainings_red--;}
                    else if(d_15<15){count_ame_continuation_trainings_orange--;}
                    else if(d_15<30){count_ame_continuation_trainings--;}

                    if(d_16<2){count_ame_continuation_trainings_red--;}
                    else if(d_16<15){count_ame_continuation_trainings_orange--;}
                    else if(d_16<30){count_ame_continuation_trainings--;}

                    if(d_17<2){count_ame_continuation_trainings_red--;}
                    else if(d_17<15){count_ame_continuation_trainings_orange--;}
                    else if(d_17<30){count_ame_continuation_trainings--;}

                    if(d_18<2){count_ame_continuation_trainings_red--;}
                    else if(d_18<15){count_ame_continuation_trainings_orange--;}
                    else if(d_18<30){count_ame_continuation_trainings--;}

                    if(d_19<2){count_ame_continuation_trainings_red--;}
                    else if(d_19<15){count_ame_continuation_trainings_orange--;}
                    else if(d_19<30){count_ame_continuation_trainings--;}

                    if(d_20<2){count_ame_continuation_trainings_red--;}
                    else if(d_20<15){count_ame_continuation_trainings_orange--;}
                    else if(d_20<30){count_ame_continuation_trainings--;}

                    if(d_21<2){count_ame_continuation_trainings_red--;}
                    else if(d_21<15){count_ame_continuation_trainings_orange--;}
                    else if(d_21<30){count_ame_continuation_trainings--;}
    });

    connection.query(
     'DELETE FROM new_schema.ame_continuation_trainings WHERE sr_no = ?', // replace with your table name and primary key
     [id], // replace with the ID of the row you want to delete
     function(err, result) {
       if (err) throw err;
       console.log('Deleted ' + result.affectedRows + ' row(s)');
       length_of_rows_amecont--;
     }
   );
  return res.redirect('/ENGINEER.html');
});
app.post('/delete_ame_author',function(req,res){
    
    var id = req.body.button_data.toString();
 
    connection.query('SELECT ciasl_authn_validity as a1,fly_dxb as a2,island_authn_validity as a3 FROM new_schema.ame_authorisations WHERE sr_no = ?', // replace with your table name and primary key
    [id],
    function(err, result) {
        if (err) throw err;
        var inputDate = result[0].a1;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_1 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

        var inputDate = result[0].a2;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_2 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

        var inputDate = result[0].a3;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_3 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);


                    if(d_1<2){count_ame_authorisations_red--;}
                    else if(d_1<15){count_ame_authorisations_orange--;}
                    else if(d_1<30){count_ame_authorisations--;}

                    if(d_2<2){count_ame_authorisations_red--;}
                    else if(d_2<15){count_ame_authorisations_orange--;}
                    else if(d_2<30){count_ame_authorisations--;}

                    if(d_3<2){count_ame_authorisations_red--;}
                    else if(d_3<15){count_ame_authorisations_orange--;}
                    else if(d_3<30){count_ame_authorisations--;}
    });

    connection.query(
     'DELETE FROM new_schema.ame_authorisations WHERE sr_no = ?', // replace with your table name and primary key
     [id], // replace with the ID of the row you want to delete
     function(err, result) {
       if (err) throw err;
       console.log('Deleted ' + result.affectedRows + ' row(s)');
       length_of_rows_ameauth--;
     }
   );
  return res.redirect('/ENGINEER.html');
});
app.post('/delete_tech_row',function(req,res){
    
    var id = req.body.button_data.toString();
 
 
    connection.query('SELECT fts as a1,hf as a2,ewis as a3,sms as a4,lm_procedure_moe_and_regln as a5,store_procedure_and_esds as a6,dgr as a7 FROM new_schema.technician_continuation_trainings WHERE sr_no = ?', // replace with your table name and primary key
     [id],
     function(err, result) {
         if (err) throw err;
                         
         var inputDate = result[0].a1;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
         var inputDateTime = new Date(yyyy, mm - 1, dd); 
         var oneDayMs = 24 * 60 * 60 * 1000;
         var  currentDate = new Date();
         var d_1 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
 
         var inputDate = result[0].a2;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
         var inputDateTime = new Date(yyyy, mm - 1, dd); 
         var oneDayMs = 24 * 60 * 60 * 1000;
         var  currentDate = new Date();
         var d_2 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);


         var inputDate = result[0].a3;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
         var inputDateTime = new Date(yyyy, mm - 1, dd); 
         var oneDayMs = 24 * 60 * 60 * 1000;
         var  currentDate = new Date();
         var d_3 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
 
         var inputDate = result[0].a4;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
         var inputDateTime = new Date(yyyy, mm - 1, dd); 
         var oneDayMs = 24 * 60 * 60 * 1000;
         var  currentDate = new Date();
         var d_4 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
 
         var inputDate = result[0].a7;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
         var inputDateTime = new Date(yyyy, mm - 1, dd); 
         var oneDayMs = 24 * 60 * 60 * 1000;
         var  currentDate = new Date();
         var d_7 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
 
         var inputDate = result[0].a5;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
         var inputDateTime = new Date(yyyy, mm - 1, dd); 
         var oneDayMs = 24 * 60 * 60 * 1000;
         var  currentDate = new Date();
         var d_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
 
         var inputDate = result[0].a6;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
         var inputDateTime = new Date(yyyy, mm - 1, dd); 
         var oneDayMs = 24 * 60 * 60 * 1000;
         var  currentDate = new Date();
         var d_6 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
 
                     if(d_1<2){count_technician_red--;}
                     else if(d_1<15){count_technician_orange--;}
                     else if(d_1<30){count_technician--;}
 
                     if(d_2<2){count_technician_red--;}
                     else if(d_2<15){count_technician_orange--;}
                     else if(d_2<30){count_technician--;}
 
                     if(d_3<2){count_technician_red--;}
                     else if(d_3<15){count_technician_orange--;}
                     else if(d_3<30){count_technician--;}
 
                     if(d_4<2){count_technician_red--;}
                     else if(d_4<15){count_technician_orange--;}
                     else if(d_4<30){count_technician--;}
 
                     if(d_5<2){count_technician_red--;}
                     else if(d_5<15){count_technician_orange--;}
                     else if(d_5<30){count_technician--;}
                     
                     if(d_6<2){count_technician_red--;}
                     else if(d_6<15){count_technician_orange--;}
                     else if(d_6<30){count_technician--;}
 
                     if(d_7<2){count_technician_red--;}
                     else if(d_7<15){count_technician_orange--;}
                     else if(d_7<30){count_technician--;}
     });
 
 
    connection.query(
     'DELETE FROM new_schema.technician_continuation_trainings WHERE sr_no = ?', // replace with your table name and primary key
     [id], // replace with the ID of the row you want to delete
     function(err, result) {
       if (err) throw err;
       console.log('Deleted ' + result.affectedRows + ' row(s)');
       length_of_rows_technician--;
     }
   );
  return res.redirect('/TECHNICIAN.html');
});
app.post('/delete_regular_audit',function(req,res){
    
    var id = req.body.button_data.toString();
 

    connection.query('SELECT cap_due_date as a1,cap_submit_due_date as a2 FROM new_schema.audit_by_airline_operators WHERE sr_no = ?', // replace with your table name and primary key
    [id],
    function(err, result) {
        if (err) throw err;
        var inputDate = result[0].a1;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_1 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

        var inputDate = result[0].a2;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_2 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);


                    if(d_1<2)
                    {count_regular_audit_red--;}
                    else if(d_1<15)
                    {count_regular_audit_orange--;}
                    else if(d_1<30)
                    {count_regular_audit--;}

                    if(d_2<2)
                    {count_regular_audit_red--;}
                    else if(d_2<15)
                    {count_regular_audit_orange--;}
                    else if(d_2<30)
                    {count_regular_audit--;}

    });


    connection.query(
     'DELETE FROM new_schema.regular_audit WHERE sr_no = ?', // replace with your table name and primary key
     [id], // replace with the ID of the row you want to delete
     function(err, result) {
       if (err) throw err;
       console.log('Deleted ' + result.affectedRows + ' row(s)');
       length_of_rows_reg_audit--;
     }
   );
  return res.redirect('/AUDITOR.html');
});
app.post('/delete_audit_by_airline_operators',function(req,res){
    
    var id = req.body.button_data.toString();
 

    connection.query('SELECT cap_due_date as a1,cap_submit_due_date as a2 FROM new_schema.audit_by_airline_operators WHERE sr_no = ?', // replace with your table name and primary key
    [id],
    function(err, result) {
        if (err) throw err;
        var inputDate = result[0].a1;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_1 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

        var inputDate = result[0].a2;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_2 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);


                    if(d_1<2)
                    {count_audit_by_airline_operators_red--;}
                    else if(d_1<15)
                    {count_audit_by_airline_operators_orange--;}
                    else if(d_1<30)
                    {count_audit_by_airline_operators--;}

                    if(d_2<2)
                    {count_audit_by_airline_operators_red--;}
                    else if(d_2<15)
                    {count_audit_by_airline_operators_orange--;}
                    else if(d_2<30)
                    {count_audit_by_airline_operators--;}

    });

    connection.query(
     'DELETE FROM new_schema.audit_by_airline_operators WHERE sr_no = ?', // replace with your table name and primary key
     [id], // replace with the ID of the row you want to delete
     function(err, result) {
       if (err) throw err;
       console.log('Deleted ' + result.affectedRows + ' row(s)');
       length_of_rows_audit_operator--;
     }
   );
  return res.redirect('/AUDITOR.html');
});
app.post('/delete_quality_audit_quality_division',function(req,res){
    
    var id = req.body.button_data.toString();
 

    connection.query('SELECT cap_due_date as a1,ca_submit_due_date as a2 FROM new_schema.quality_audit WHERE sr_no = ?', // replace with your table name and primary key
    [id],
    function(err, result) {
        if (err) throw err;
        var inputDate = result[0].a1;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_1 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

        var inputDate = result[0].a2;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_2 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);


                    if(d_1<2)
                    {count_quality_audit_quality_division_red--;}
                    else if(d_1<15)
                    {count_quality_audit_quality_division_orange--;}
                    else if(d_1<30)
                    {count_quality_audit_quality_division--;}

                    if(d_2<2)
                    {count_quality_audit_quality_division_red--;}
                    else if(d_2<15)
                    {count_quality_audit_quality_division_orange--;}
                    else if(d_2<30)
                    {count_quality_audit_quality_division--;}

    });

    connection.query(
     'DELETE FROM new_schema.quality_audit WHERE sr_no = ?', // replace with your table name and primary key
     [id], // replace with the ID of the row you want to delete
     function(err, result) {
       if (err) throw err;
       console.log('Deleted ' + result.affectedRows + ' row(s)');
       length_of_rows_quality_auditor--;
     }
   );
  return res.redirect('/AUDITOR.html');
});
app.post('/delete_quality_audit_line_maintenance',function(req,res){
    
    var id = req.body.button_data.toString();
 

    connection.query('SELECT cap_due_date as a1,ca_submit_due_date as a2 FROM new_schema.line_maintenance WHERE sr_no = ?', // replace with your table name and primary key
    [id],
    function(err, result) {
        if (err) throw err;
        var inputDate = result[0].a1;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_1 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

        var inputDate = result[0].a2;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_2 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);


                    if(d_1<2)
                    {count_line_maintenance_red--;}
                    else if(d_1<15)
                    {count_line_maintenance_orange--;}
                    else if(d_1<30)
                    {count_line_maintenance--;}

                    if(d_2<2)
                    {count_line_maintenance_red--;}
                    else if(d_2<15)
                    {count_line_maintenance_orange--;}
                    else if(d_2<30)
                    {count_line_maintenance--;}

    });

    connection.query(
     'DELETE FROM new_schema.line_maintenance WHERE sr_no = ?', // replace with your table name and primary key
     [id], // replace with the ID of the row you want to delete
     function(err, result) {
       if (err) throw err;
       console.log('Deleted ' + result.affectedRows + ' row(s)');
       length_of_rows_line_main--;
     }
   );
  return res.redirect('/AUDITOR.html');
});
app.post('/delete_audit_of_external_agencies',function(req,res){
    
    var id = req.body.button_data.toString();
 
    connection.query(
     'DELETE FROM new_schema.audit_of_external WHERE sr_no = ?', // replace with your table name and primary key
     [id], // replace with the ID of the row you want to delete
     function(err, result) {
       if (err) throw err;
       console.log('Deleted ' + result.affectedRows + ' row(s)');
       length_of_rows_audit_of_external--;
     }
   );
  return res.redirect('/AUDITOR.html');
});
app.post('/delete_internal_quality_auditors',function(req,res){
    
    var id = req.body.button_data.toString();
 

    connection.query('SELECT auth_validity_date as a1,regulations_due_date as a2,hf_due_date as a3,fts_due_date as a4,ewis_due_date as a5,sms_due_date as a6 FROM new_schema.internal_quality_auditors WHERE sr_no = ?', // replace with your table name and primary key
    [id],
    function(err, result) {
        if (err) throw err;
        var inputDate = result[0].a1;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_1 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

        var inputDate = result[0].a2;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_2 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

        var inputDate = result[0].a3;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_3 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

        var inputDate = result[0].a4;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_4 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

        var inputDate = result[0].a5;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

        var inputDate = result[0].a6;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_6 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);


                    if(d_1<2)
                    {count_internal_quality_auditors_red--;}
                    else if(d_1<15)
                    {count_internal_quality_auditors_orange--;}
                    else if(d_1<30)
                    {count_internal_quality_auditors--;}

                    if(d_6<2)
                    {count_internal_quality_auditors_red--;}
                    else if(d_6<15)
                    {count_internal_quality_auditors_orange--;}
                    else if(d_6<30)
                    {count_internal_quality_auditors--;}

                    if(d_5<2)
                    {count_internal_quality_auditors_red--;}
                    else if(d_5<15)
                    {count_internal_quality_auditors_orange--;}
                    else if(d_5<30)
                    {count_internal_quality_auditors--;}

                    if(d_4<2)
                    {count_internal_quality_auditors_red--;}
                    else if(d_4<15)
                    {count_internal_quality_auditors_orange--;}
                    else if(d_4<30)
                    {count_internal_quality_auditors--;}

                    if(d_3<2)
                    {count_internal_quality_auditors_red--;}
                    else if(d_3<15)
                    {count_internal_quality_auditors_orange--;}
                    else if(d_3<30)
                    {count_internal_quality_auditors--;}

                    if(d_2<2)
                    {count_internal_quality_auditors_red--;}
                    else if(d_2<15)
                    {count_internal_quality_auditors_orange--;}
                    else if(d_2<30)
                    {count_internal_quality_auditors--;}



    });


    connection.query(
     'DELETE FROM new_schema.internal_quality_auditors WHERE sr_no = ?', // replace with your table name and primary key
     [id], // replace with the ID of the row you want to delete
     function(err, result) {
       if (err) throw err;
       console.log('Deleted ' + result.affectedRows + ' row(s)');
       length_of_rows_internal--;
     }
   );
  return res.redirect('/AUDITOR.html');
});
app.post('/delete_tools',function(req,res){
    
    var id = req.body.button_data.toString();
 
    connection.query(
     'DELETE FROM new_schema.tools_and_equipment_calibration WHERE sr_no = ?', // replace with your table name and primary key
     [id], // replace with the ID of the row you want to delete
     function(err, result) {
       if (err) throw err;
       console.log('Deleted ' + result.affectedRows + ' row(s)');
       length_of_rows_tools--;
     }
   );
  return res.redirect('/TOOLS.html');
});
app.post('/delete_staff_data',function(req,res){
    
    var id = req.body.button_data.toString();
 
    connection.query('SELECT contract_validity_date as a1,avsec_training_due_date as a2,aep_validity as a3,adp_validity as a4,pcc as a5 FROM new_schema.all_staff_data WHERE sr_no = ?', // replace with your table name and primary key
    [id],
    function(err, result) {
        if (err) throw err;
        var inputDate = result[0].a1;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_1 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

        var inputDate = result[0].a2;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_2 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

        var inputDate = result[0].a3;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_3 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

        var inputDate = result[0].a4;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_4 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);


        var inputDate = result[0].a5;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);


                    if(d_1<2){count_all_staff_data_red--;}
                    else if(d_1<15){count_all_staff_data_orange--;}
                    else if(d_1<30){count_all_staff_data--;}

                    if(d_2<2){count_all_staff_data_red--;}
                    else if(d_2<15){count_all_staff_data_orange--;}
                    else if(d_2<30){count_all_staff_data--;}

                    if(d_3<2){count_all_staff_data_red--;}
                    else if(d_3<15){count_all_staff_data_orange--;}
                    else if(d_3<30){count_all_staff_data--;}

                    if(d_4<2){count_all_staff_data_red--;}
                    else if(d_4<15){count_all_staff_data_orange--;}
                    else if(d_4<30){count_all_staff_data--;}

                    if(d_5<2){count_all_staff_data_red--;}
                    else if(d_5<15){count_all_staff_data_orange--;}
                    else if(d_5<30){count_all_staff_data--;}
    });

    connection.query(
     'DELETE FROM new_schema.all_staff_data WHERE sr_no = ?', // replace with your table name and primary key
     [id], // replace with the ID of the row you want to delete
     function(err, result) {
       if (err) throw err;
       console.log('Deleted ' + result.affectedRows + ' row(s)');
       length_of_rows--;
     }
   );
  return res.redirect('/ADMIN.html');
});
app.post('/delete_gse',function(req,res){
    
    var id = req.body.button_data.toString();

    connection.query('SELECT next_check as nc FROM new_schema.gse WHERE sl_no = ?', // replace with your table name and primary key
    [id],
    function(err, result) {
        if (err) throw err;
        var inputDate = result[0].nc;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
                    if(days_difference_5<2)
                    {
                        count_gse_red--;
                    }
                    if(days_difference_5<15)
                    {
                        count_gse_orange--;
                    }
                    if(days_difference_5<30)
                    {
                        count_gse--;
                    }
    });

    connection.query(
     'DELETE FROM new_schema.gse WHERE sl_no = ?', // replace with your table name and primary key
     [id], // replace with the ID of the row you want to delete
     function(err, result) {
       if (err) throw err;
       console.log('Deleted ' + result.affectedRows + ' row(s)');
       length_of_rows_gse--;
     }
   );
  return res.redirect('/GSE.html');
});
app.post('/delete_reg_approv_table',function(req,res){
    
    var id = req.body.button_data.toString();
 

    connection.query('SELECT approval_validity_date as a1 FROM new_schema.regulators_amo_approvals WHERE sl_no = ?', // replace with your table name and primary key
    [id],
    function(err, result) {
        if (err) throw err;
        var inputDate = result[0].a1;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_1 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

                    if(d_1<2){count_regulators_amo_approvals_red--;}
                    else if(d_1<15){count_regulators_amo_approvals_orange--;}
                    else if(d_1<30){count_regulators_amo_approvals--;}
    });

    connection.query(
     'DELETE FROM new_schema.regulators_amo_approvals WHERE sl_no = ?', // replace with your table name and primary key
     [id], // replace with the ID of the row you want to delete
     function(err, result) {
       if (err) throw err;
       console.log('Deleted ' + result.affectedRows + ' row(s)');
       length_of_rows_raa--;
     }
   );
  return res.redirect('/QUALITY.html');
});
app.post('/delete_operators',function(req,res){
    
    var id = req.body.button_data.toString();
 
    connection.query('SELECT agree_validity_date as a1 FROM new_schema.operators WHERE sl_no = ?', // replace with your table name and primary key
    [id],
    function(err, result) {
        if (err) throw err;
        var inputDate = result[0].a1;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var d_1= Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);

                    if(d_1<2){count_operators_red--;}
                    else if(d_1<15){count_operators_orange--;}
                    else if(d_1<30){count_operators--;}
    });

    connection.query(
     'DELETE FROM new_schema.operators WHERE sl_no = ?', // replace with your table name and primary key
     [id], // replace with the ID of the row you want to delete
     function(err, result) {
       if (err) throw err;
       console.log('Deleted ' + result.affectedRows + ' row(s)');
       length_of_rows_operator--;
     }
   );
  return res.redirect('/QUALITY.html');
});
app.post('/delete_storage',function(req,res){
    
    var id = req.body.button_data.toString();

    connection.query('SELECT storage_life as nc FROM new_schema.storage_life_monitoring WHERE sl_no = ?', // replace with your table name and primary key
    [id],
    function(err, result) {
        if (err) throw err;
        var inputDate = result[0].nc;
        var [dd, mm, yyyy] = inputDate.split('-').map(Number);
        var inputDateTime = new Date(yyyy, mm - 1, dd); 
        var oneDayMs = 24 * 60 * 60 * 1000;
        var  currentDate = new Date();
        var days_difference_5 = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
                    if(days_difference_5<2)
                    {
                        count_storage_red--;
                    }
                    else if(days_difference_5<15)
                    {
                        count_storage_orange--;
                    }
                    else if(days_difference_5<30)
                    {
                        count_storage--;
                    }
    });

    connection.query(
     'DELETE FROM new_schema.storage_life_monitoring WHERE sl_no = ?', // replace with your table name and primary key
     [id], // replace with the ID of the row you want to delete
     function(err, result) {
       if (err) throw err;
       console.log('Deleted ' + result.affectedRows + ' row(s)');
       length_of_rows_storage--;
     }
   );
  return res.redirect('/STORAGE.html');
});
app.post('/delete_author_cov',function(req,res){
    
    var id = req.body.button_data.toString();
 
    connection.query(
     'DELETE FROM new_schema.authorisation_coverage WHERE sl_no = ?', // replace with your table name and primary key
     [id], // replace with the ID of the row you want to delete
     function(err, result) {
       if (err) throw err;
       console.log('Deleted ' + result.affectedRows + ' row(s)');
       length_of_rows_authorisation_cov--;
     }
   );
  return res.redirect('/ENGINEER.html');
});
app.post('/delete_permission',function(req,res){
    
    var id = req.body.button_data.toString();
    connection.query(
     'DELETE FROM new_schema.permissions WHERE user_id = ?', // replace with your table name and primary key
     [id], // replace with the ID of the row you want to delete
     function(err, result) {
       if (err) throw err;
       console.log('Deleted ' + result.affectedRows + ' row(s)');
       length_of_rows_permission--;
     }
   );
  return res.redirect('/PERMISSION.html');
});


var days_difference;
function getColor(date) {
    var inputDate = date;
    var [dd, mm, yyyy] = inputDate.split('-').map(Number);
    var inputDateTime = new Date(yyyy, mm - 1, dd); 
    var oneDayMs = 24 * 60 * 60 * 1000;
    var currentDate = new Date();
    days_difference = Math.ceil((inputDateTime.getTime() - currentDate.getTime()) / oneDayMs);
    if(isNaN(days_difference))
    {
        days_difference='-';
    }
    else{
        if(days_difference<0)
        {
            days_difference=0;
        }
        if(days_difference<2)
        {
            return 'FF0000';//red
        }
        else if(days_difference<15)
        {
            return 'FFA500';//orange
        }
        else if(days_difference<30)
        {
            return 'FFFF00';//yellow
        }
        else if(days_difference<80)
        {
            return '00ABF0';//blue
        }
        else{
            return '90EE90';//green
        }
    }    
}
app.post('/download_ame_license', (req, res) => {
    const query = 'SELECT * FROM new_schema.amelicense';
    connection.query(query, (err, result) => {
      if (err) throw err;
  
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Sheet1');
      worksheet.columns = [
        { header: 'Sr_no', key: 'sr_no', width: 10 },
        { header: 'Name', key: 'name', width: 32 },
        { header: 'License_cat', key: 'license_cat', width: 20 },
        { header: 'DGCA_lic_no', key: 'dgca_lic_no', width: 25 },
        { header: 'DGCA_lic_validity', key: 'dgca_lic_validity', width: 25 },
        { header: 'EASA_lic_no', key: 'easa_lic_no', width: 25 },
        { header: 'EASA_lic_validity', key: 'easa_lic_validity', width: 25 },
        { header: 'A320_series_V2500', key: 'A320_series_V2500', width: 25 },
        { header: 'A320_series_CFM_56', key: 'A320_series_CFM_56', width: 25 },
        { header: 'A320_series_LEAP_1A', key: 'A320_series_LEAP_1A', width: 25 },
        { header: 'A320_series_p_and_w', key: 'A320_series_p_and_w', width: 25 },
        { header: 'A330_T700', key: 'A330_T700', width: 25 },
        { header: 'A330_GE_CF6', key: 'A330_GE_CF6', width: 25 },
        { header: 'A330_NEO_T7000', key: 'A330_NEO_T7000', width: 25 },
        { header: 'A350_TRENT_XWB', key: 'A350_TRENT_XWB', width: 25 },
        { header: 'B737_NG_CFM56_7B', key: 'B737_NG_CFM56_7B', width: 25 },
        { header: 'B737_MAX_LEAP_1B', key: 'B737_MAX_LEAP_1B', width: 25 },
        { header: 'B777_GE_90', key: 'B777_GE_90', width: 25 },
        { header: 'B787_GEnX', key: 'B787_GEnX', width: 25 },
        { header: 'Remarks', key: 'remarks', width: 25 },
    ];
    
      
          
        worksheet.addRows(result);
        connection.query(`SELECT COUNT(*) AS C FROM new_schema.amelicense`, function(error, resu) {
            if (error) throw error;
            const leng = resu[0].C;
            console.log(leng);
            var color=0;
            for (let i = 0; i < leng; i++) {
                color = getColor(result[i].dgca_lic_validity);
                worksheet.getCell(`E${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
                color = getColor(result[i].easa_lic_validity);
                worksheet.getCell(`G${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
            }
          workbook.xlsx.writeBuffer().then((data) => {
          res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
          res.setHeader('Content-Disposition', 'attachment; filename=AME License.xlsx');
          res.send(data);
        });
      });
    });
});
app.post('/download_ame_continuation_training', (req, res) => {
    const query = 'SELECT * FROM new_schema.ame_continuation_trainings';
    connection.query(query, (err, result) => {
      if (err) throw err;
  
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Sheet1');
      worksheet.columns = [
        { header: 'Sr_no', key: 'sr_no', width: 10 },
        { header: 'Name', key: 'name', width: 32 },
        { header: 'Staff_no', key: 'staff_no', width: 15 },
        { header: 'A320_V2500', key: 'A320_V2500', width: 15 },
        { header: 'A320_CFM_LEAP_1A', key: 'A320_CFM_LEAP_1A', width: 25 },
        { header: 'A330_RR_T700', key: 'A330_RR_T700', width: 25 },
        { header: 'A330_NEO_RR_T7000', key: 'A330_NEO_RR_T7000', width: 25 },
        { header: 'A330_GE_CF6', key: 'A330_GE_CF6', width: 20 },
        { header: 'A330_P_AND_W', key: 'A330_P_AND_W', width: 20 },
        { header: 'A350_RR_T_XWB', key: 'A350_RR_T_XWB', width: 20 },
        { header: 'B737_CFM56', key: 'B737_CFM56', width: 15 },
        { header: 'B737_MAX_CFM_LEAP1B', key: 'B737_MAX_CFM_LEAP1B', width: 25 },
        { header: 'B777_GE90', key: 'B777_GE90', width: 15 },
        { header: 'B787_GENX', key: 'B787_GENX', width: 15 },
        { header: 'ADDNL_REFR', key: 'ADDNL_REFR', width: 15 },
        { header: 'HF', key: 'HF', width: 15 },
        { header: 'FTS', key: 'FTS', width: 15 },
        { header: 'EWIS', key: 'EWIS', width: 15 },
        { header: 'SMS', key: 'SMS', width: 15 },
        { header: 'REGULATIONS', key: 'REGULATIONS', width: 15 },
        { header: 'GCAA', key: 'GCAA', width: 15 },
        { header: 'ETOPS', key: 'ETOPS', width: 15 },
        { header: 'RVSM', key: 'RVSM', width: 15 },
        { header: 'OPER_PROC', key: 'OPER_PROC', width: 15 },
        { header: 'REMARK', key: 'REMARK', width: 15 },
    ];
    
      
          
        worksheet.addRows(result);
        connection.query(`SELECT COUNT(*) AS C FROM new_schema.ame_continuation_trainings`, function(error, resu) {
            if (error) throw error;
            const leng = resu[0].C;
            console.log(leng);
            var color=0;
            for (let i = 0; i < leng; i++) {
                color = getColor(result[i].A320_V2500);
                worksheet.getCell(`D${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
                color = getColor(result[i].A320_CFM_LEAP_1A);
                worksheet.getCell(`E${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
                color = getColor(result[i].A330_RR_T700);
                worksheet.getCell(`F${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
                color = getColor(result[i].A330_NEO_RR_T7000);
                worksheet.getCell(`G${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
                color = getColor(result[i].A330_GE_CF6);
                worksheet.getCell(`H${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
                color = getColor(result[i].A330_P_AND_W);
                worksheet.getCell(`I${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
                color = getColor(result[i].A350_RR_T_XWB);
                worksheet.getCell(`J${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
                color = getColor(result[i].B737_CFM56);
                worksheet.getCell(`K${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
                color = getColor(result[i].B737_MAX_CFM_LEAP1B);
                worksheet.getCell(`L${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
                color = getColor(result[i].B777_GE90);
                worksheet.getCell(`M${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
                color = getColor(result[i].B787_GENX);
                worksheet.getCell(`N${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
                color = getColor(result[i].ADDNL_REFR);
                worksheet.getCell(`O${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
                color = getColor(result[i].HF);
                worksheet.getCell(`P${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
                color = getColor(result[i].FTS);
                worksheet.getCell(`Q${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
                color = getColor(result[i].EWIS);
                worksheet.getCell(`R${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
                color = getColor(result[i].SMS);
                worksheet.getCell(`S${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
                color = getColor(result[i].REGULATIONS);
                worksheet.getCell(`T${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
            }
          workbook.xlsx.writeBuffer().then((data) => {
          res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
          res.setHeader('Content-Disposition', 'attachment; filename=AME Continuation Trainings.xlsx');
          res.send(data);
        });
      });
    });
});
app.post('/download_ame_authorisations', (req, res) => {
    const query = 'SELECT * FROM new_schema.ame_authorisations';
    connection.query(query, (err, result) => {
      if (err) throw err;
  
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Sheet1');
      worksheet.columns = [
        { header: 'Sr_no', key: 'sr_no', width: 10 },
        { header: 'Name', key: 'name', width: 20 },
        { header: 'Staff_no', key: 'staff_no', width: 15 },
        { header: 'Ciasl_authn_no', key: 'ciasl_authn_no', width: 20 },
        { header: 'Ciasl_authn_validity', key: 'ciasl_authn_validity', width: 20 },
        { header: 'Fly_dxb', key: 'fly_dxb', width: 15 },
        { header: 'Island_authn_validity', key: 'island_authn_validity', width: 20 },
        { header: 'Oman_air', key: 'oman_air', width: 15 },
        { header: 'Qatar', key: 'qatar', width: 15 },
        { header: 'Sri_lanka', key: 'sri_lanka', width: 15 },
        { header: 'Kuwait', key: 'kuwait', width: 15 },
        { header: 'Jazeera', key: 'jazeera', width: 15 },
        { header: 'Air_arabia', key: 'air_arabia', width: 15 },
        { header: 'Ethihad', key: 'ethihad', width: 15 },
        { header: 'Gulfair', key: 'gulfair', width: 15 },
        { header: 'Island', key: 'island', width: 15 },
        { header: 'Airasia_thai', key: 'airasia_thai', width: 20 },
        { header: 'Scoot_tiger', key: 'scoot_tiger', width: 20 },
        { header: 'Fly__dxb', key: 'fly__dxb', width: 15 },
        { header: 'Remark', key: 'remark', width: 15 },
    ];
    
      
          
        worksheet.addRows(result);
        connection.query(`SELECT COUNT(*) AS C FROM new_schema.ame_authorisations`, function(error, resu) {
            if (error) throw error;
            const leng = resu[0].C;
            console.log(leng);
            var color=0;
            for (let i = 0; i < leng; i++) {
                color = getColor(result[i].ciasl_authn_validity);
                worksheet.getCell(`E${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
                color = getColor(result[i].fly_dxb);
                worksheet.getCell(`F${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
                color = getColor(result[i].island_authn_validity);
                worksheet.getCell(`G${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
            }
          workbook.xlsx.writeBuffer().then((data) => {
          res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
          res.setHeader('Content-Disposition', 'attachment; filename=AME Authorisations.xlsx');
          res.send(data);
        });
      });
    });
});
app.post('/download_auth_coverage', (req, res) => {
    const query = 'SELECT * FROM new_schema.authorisation_coverage';
    connection.query(query, (err, result) => {
      if (err) throw err;
  
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Sheet1');
      worksheet.columns = [
            { header: 'sl_no', key: 'sl_no', width: 10 },
            { header: 'name', key: 'name', width: 32 },
            { header: 'cat', key: 'cat', width: 20 },
            { header: 'tiger_v2500', key: 'tiger_v2500', width: 25 },
            { header: 'srilankan_v2500', key: 'srilankan_v2500', width: 25 },
            { header: 'srilankan_cfm56', key: 'srilankan_cfm56', width: 25 },
            { header: 'srilankan_cfmleap', key: 'srilankan_cfmleap', width: 25 },
            { header: 'srilankan_t700', key: 'srilankan_t700', width: 25 },
            { header: 'etihad_v2500', key: 'etihad_v2500', width: 25 },
            { header: 'etihad_t700', key: 'etihad_t700', width: 25 },
            { header: 'etihad_genx', key: 'etihad_genx', width: 25 },
            { header: 'arabia_cfm56', key: 'arabia_cfm56', width: 25 },
            { header: 'arabia_cfmleap', key: 'arabia_cfmleap', width: 25 },
            { header: 'qatar_v2500', key: 'qatar_v2500', width: 25 },
            { header: 'qatar_cfm56', key: 'qatar_cfm56', width: 25 },
            { header: 'qatar_gecf6', key: 'qatar_gecf6', width: 25 },
            { header: 'qatar_genx', key: 'qatar_genx', width: 25 },
            { header: 'qatar_trentxwb', key: 'qatar_trentxwb', width: 25 },
            { header: 'kuwait_cfm56', key: 'kuwait_cfm56', width: 25 },
            { header: 'kuwait_leap', key: 'kuwait_leap', width: 25 },
            { header: 'kuwait_t700', key: 'kuwait_t700', width: 25 },
            { header: 'kuwait_neo_t7000', key: 'kuwait_neo_t7000', width: 25 },
            { header: 'kuwait_300er', key: 'kuwait_300er', width: 25 },
            { header: 'jazeera_cfm56', key: 'jazeera_cfm56', width: 25 },
            { header: 'jazeera_leap', key: 'jazeera_leap', width: 25 },
            { header: 'thai_v2500', key: 'thai_v2500', width: 25 },
            { header: 'thai_cfm56', key: 'thai_cfm56', width: 25 },
            { header: 'gulf_cfm56', key: 'gulf_cfm56', width: 25 },
            { header: 'gulf_v2500', key: 'gulf_v2500', width: 25 },
            { header: 'gulf_neo', key: 'gulf_neo', width: 25 },
            { header: 'oman_cfm56', key: 'oman_cfm56', width:25},
            { header: 'oman_max', key: 'oman_max', width: 25 },
            { header: 'oman_genx', key: 'oman_genx', width: 25 },
            { header: 'oman_t700', key: 'oman_t700', width: 25 },
            { header: 'dubai_ng', key: 'dubai_ng', width: 25 },
            { header: 'maldives_cfm56', key: 'maldives_cfm56', width: 25 },
            { header: 'india_v2500', key: 'india_v2500', width: 25 },
            { header: 'india_cfm56', key: 'india_cfm56', width: 25 },
            { header: 'india_cfm567b', key: 'india_cfm567b', width: 25 },
            { header: 'easa_v2500', key: 'easa_v2500', width: 25 },
            { header: 'easa_cfm56', key: 'easa_cfm56', width:25},
    ];
     worksheet.addRows(result);
        workbook.xlsx.writeBuffer().then((data) => {
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', 'attachment; filename=Authorisation Coverage.xlsx');
        res.send(data);
        });
    });
});
app.post('/download_techician', (req, res) => {
    const query = 'SELECT * FROM new_schema.technician_continuation_trainings';
    connection.query(query, (err, result) => {
      if (err) throw err;
  
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Sheet1');
      worksheet.columns = [
        { header: 'Sr_no', key: 'sr_no', width: 10 },
        { header: 'Name', key: 'name', width: 32 },
        { header: 'Desgn', key: 'desgn', width: 20 },
        { header: 'Staff_no', key: 'staff_no', width: 20 },
        { header: 'HF', key: 'hf', width: 20 },
        { header: 'FTS', key: 'fts', width: 20 },
        { header: 'EWIS', key: 'ewis', width: 20 },
        { header: 'SMS', key: 'sms', width: 20 },
        { header: 'Lm_procedure_moe_and_regln', key: 'lm_procedure_moe_and_regln', width: 40 },
        { header: 'Store_procedure_and_esds', key: 'store_procedure_and_esds', width: 40 },
        { header: 'DGR', key: 'dgr', width: 20 },
        { header: 'Remark', key: 'remark', width: 20 },
];
    
        worksheet.addRows(result);
        connection.query(`SELECT COUNT(*) AS C FROM new_schema.technician_continuation_trainings`, function(error, resu) {
            if (error) throw error;
            const leng = resu[0].C;
            console.log(leng);
            var color=0;
            for (let i = 0; i < leng; i++) {
                color = getColor(result[i].hf);
                worksheet.getCell(`E${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
                color = getColor(result[i].fts);
                worksheet.getCell(`F${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
                color = getColor(result[i].ewis);
                worksheet.getCell(`G${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
                color = getColor(result[i].sms);
                worksheet.getCell(`H${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
                color = getColor(result[i].lm_procedure_moe_and_regln);
                worksheet.getCell(`I${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
                color = getColor(result[i].store_procedure_and_esds);
                worksheet.getCell(`J${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
                color = getColor(result[i].dgr);
                worksheet.getCell(`K${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
            }
          workbook.xlsx.writeBuffer().then((data) => {
          res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
          res.setHeader('Content-Disposition', 'attachment; filename=Technicians.xlsx');
          res.send(data);
        });
      });
    });
});
app.post('/download_regular_audit', (req, res) => {
    const query = 'SELECT * FROM new_schema.regular_audit';
    connection.query(query, (err, result) => {
      if (err) throw err;
  
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Sheet1');
      worksheet.columns = [
        { header: 'Sr_no', key: 'sr_no', width: 10 },
        { header: 'Regulator', key: 'regulator', width: 32 },
        { header: 'Audit_date', key: 'audit_date', width: 15 },
        { header: 'No_of_findings', key: 'no_of_findings', width: 15 },
        { header: 'No_of_observations', key: 'no_of_observations', width: 20 },
        { header: 'Cap_due_date', key: 'cap_due_date', width: 15 },
        { header: 'Cap_submitted_date', key: 'cap_submitted_date', width: 20 },
        { header: 'Ca_submit_due_date', key: 'ca_submit_due_date', width: 20 },
        { header: 'Ca_submitted_date', key: 'ca_submitted_date', width: 20 },
        { header: 'Audit_closure_date', key: 'audit_closure_date', width: 20 },
        { header: 'Remark', key: 'remark', width: 15 },
    ];
        worksheet.addRows(result);
        connection.query(`SELECT COUNT(*) AS C FROM new_schema.regular_audit`, function(error, resu) {
            if (error) throw error;
            const leng = resu[0].C;
            console.log(leng);
            var color=0;
            for (let i = 0; i < leng; i++) {
                color = getColor(result[i].cap_due_date);
                worksheet.getCell(`F${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
                color = getColor(result[i].ca_submit_due_date);
                worksheet.getCell(`H${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
            }
          workbook.xlsx.writeBuffer().then((data) => {
          res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
          res.setHeader('Content-Disposition', 'attachment; filename=Regulator Audit.xlsx');
          res.send(data);
        });
      });
    });
});
app.post('/download_audit_by_airline_operators', (req, res) => {
    const query = 'SELECT * FROM new_schema.audit_by_airline_operators';
    connection.query(query, (err, result) => {
      if (err) throw err;
  
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Sheet1');
      worksheet.columns = [
        { header: 'Sr_no', key: 'sr_no', width: 10 },
        { header: 'Operator', key: 'operator', width: 32 },
        { header: 'Audit_date', key: 'audit_date', width: 15 },
        { header: 'No_of_findings', key: 'no_of_findings', width: 15 },
        { header: 'No_of_obsrvns', key: 'no_of_obsrvns', width: 15 },
        { header: 'Cap_due_date', key: 'cap_due_date', width: 15 },
        { header: 'Cap_submitted_date', key: 'cap_submitted_date', width: 20 },
        { header: 'Cap_submit_due_date', key: 'cap_submit_due_date', width: 20 },
        { header: 'Ca_submitted_date', key: 'ca_submitted_date', width: 20 },
        { header: 'Audit_closure_date', key: 'audit_closure_date', width: 20 },
        { header: 'Remark', key: 'remark', width: 15 },
    ];
    
      
          
        worksheet.addRows(result);
        connection.query(`SELECT COUNT(*) AS C FROM new_schema.audit_by_airline_operators`, function(error, resu) {
            if (error) throw error;
            const leng = resu[0].C;
            console.log(leng);
            var color=0;
            for (let i = 0; i < leng; i++) {
                color = getColor(result[i].cap_due_date);
                worksheet.getCell(`F${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
                color = getColor(result[i].ca_submit_due_date);
                worksheet.getCell(`H${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
            }
          workbook.xlsx.writeBuffer().then((data) => {
          res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
          res.setHeader('Content-Disposition', 'attachment; filename=Audit Airline Operators.xlsx');
          res.send(data);
        });
      });
    });
});
app.post('/download_quality_audit_quality_division', (req, res) => {
    const query = 'SELECT * FROM new_schema.quality_audit';
    connection.query(query, (err, result) => {
      if (err) throw err;
  
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Sheet1');
      worksheet.columns = [
        { header: 'Sr_no', key: 'sr_no', width: 10 },
        { header: 'Auditor_name', key: 'auditor_name', width: 32 },
        { header: 'Audit_date', key: 'audit_date', width: 15 },
        { header: 'No_of_findings', key: 'no_of_findings', width: 15 },
        { header: 'No_of_observations', key: 'no_of_observations', width: 20 },
        { header: 'Cap_due_date', key: 'cap_due_date', width: 15 },
        { header: 'Cap_submitted_date', key: 'cap_submitted_date', width: 20 },
        { header: 'Ca_submit_due_date', key: 'ca_submit_due_date', width: 20 },
        { header: 'Ca_submitted_date', key: 'ca_submitted_date', width: 20 },
        { header: 'Audit_closure_date', key: 'audit_closure_date', width: 20 },
        { header: 'Remark', key: 'remark', width: 10 },
      ]; 
      worksheet.addRows(result);
        connection.query(`SELECT COUNT(*) AS C FROM new_schema.quality_audit`, function(error, resu) {
            if (error) throw error;
            const leng = resu[0].C;
            console.log(leng);
            var color=0;
            for (let i = 0; i < leng; i++) {
                color = getColor(result[i].cap_due_date);
                worksheet.getCell(`F${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
                color = getColor(result[i].ca_submit_due_date);
                worksheet.getCell(`H${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
            }
          workbook.xlsx.writeBuffer().then((data) => {
          res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
          res.setHeader('Content-Disposition', 'attachment; filename=Quality Audit.xlsx');
          res.send(data);
        });
      });
    });
});
app.post('/download_quality_audit_line_maintainance', (req, res) => {
    const query = 'SELECT * FROM new_schema.line_maintenance';
    connection.query(query, (err, result) => {
      if (err) throw err;
  
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Sheet1');
      worksheet.columns = [
        { header: 'Sr_no', key: 'sr_no', width: 10 },
        { header: 'Auditor_name', key: 'auditor_name', width: 25 },
        { header: 'Audit_date', key: 'audit_date', width: 20 },
        { header: 'Audit_type', key: 'audit_type', width: 20 },
        { header: 'No_of_findings', key: 'no_of_findings', width: 20 },
        { header: 'No_of_observations', key: 'no_of_observations', width: 20 },
        { header: 'Cap_due_date', key: 'cap_due_date', width: 20 },
        { header: 'Cap_submitted_date', key: 'cap_submitted_date', width: 20 },
        { header: 'Ca_submit_due_date', key: 'ca_submit_due_date', width: 20 },
        { header: 'Ca_submitted_date', key: 'ca_submitted_date', width: 20 },
        { header: 'Audit_closure_date', key: 'audit_closure_date', width: 20 },
        { header: 'Remark', key: 'remark', width: 15 }
      ];
      
          
        worksheet.addRows(result);
        connection.query(`SELECT COUNT(*) AS C FROM new_schema.line_maintenance`, function(error, resu) {
            if (error) throw error;
            const leng = resu[0].C;
            console.log(leng);
            var color=0;
            for (let i = 0; i < leng; i++) {
                color = getColor(result[i].cap_due_date);
                worksheet.getCell(`G${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
                color = getColor(result[i].ca_submit_due_date);
                worksheet.getCell(`I${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
            }
          workbook.xlsx.writeBuffer().then((data) => {
          res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
          res.setHeader('Content-Disposition', 'attachment; filename=Line Maintenance.xlsx');
          res.send(data);
        });
      });
    });
});
app.post('/download_audit_of_external_agencies', (req, res) => {
    const query = 'SELECT * FROM new_schema.audit_of_external';
    connection.query(query, (err, result) => {
      if (err) throw err;
  
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Sheet1');
        worksheet.columns = [
            { header: 'Sr_no', key: 'sr_no', width: 10 },
            { header: 'Auditee_orgzn', key: 'auditee_orgzn', width: 32 },
            { header: 'Auditor_name', key: 'auditor_name', width: 20 },
            { header: 'Audit_date', key: 'audit_date', width: 15 },
            { header: 'No_of_findings', key: 'no_of_findings', width: 15 },
            { header: 'No_of_observations', key: 'no_of_observations', width: 20 },
            { header: 'Cap_received_date', key: 'cap_received_date', width: 20 },
            { header: 'Cap_approved_date', key: 'cap_approved_date', width: 20 },
            { header: 'Ca_received_date', key: 'ca_received_date', width: 20 },
            { header: 'Ca_approved_date', key: 'ca_approved_date', width: 20 },
            { header: 'Audit_closed_date', key: 'audit_closed_date', width: 20 },
            { header: 'Remark', key: 'remark', width: 10 }
        ];        
        worksheet.addRows(result);
          workbook.xlsx.writeBuffer().then((data) => {
          res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
          res.setHeader('Content-Disposition', 'attachment; filename=External Auditors.xlsx');
          res.send(data);
        });
    });
});
app.post('/download_internal_auditors', (req, res) => {
    const query = 'SELECT * FROM new_schema.internal_quality_auditors';
    connection.query(query, (err, result) => {
      if (err) throw err;
  
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Sheet1');
      worksheet.columns = [
        { header: 'Sr_no', key: 'sr_no', width: 10 },
        { header: 'Name', key: 'name', width: 20 },
        { header: 'Auth_no', key: 'auth_no', width: 15 },
        { header: 'Auth_validity_date', key: 'auth_validity_date', width: 20 },
        { header: 'Auditor_date_initial', key: 'auditor_date_initial', width: 20 },
        { header: 'Regulations_done_date', key: 'regulations_done_date', width: 23 },
        { header: 'Regulations_due_date', key: 'regulations_due_date', width: 20 },
        { header: 'HF_done_date', key: 'hf_done_date', width: 20 },
        { header: 'HF_due_date', key: 'hf_due_date', width: 20 },
        { header: 'FTS_done_date', key: 'fts_done_date', width: 20 },
        { header: 'FTS_due_date', key: 'fts_due_date', width: 20 },
        { header: 'EWIS_done_date', key: 'ewis_done_date', width: 20 },
        { header: 'EWIS_due_date', key: 'ewis_due_date', width: 20 },
        { header: 'SMS_done_date', key: 'sms_done_date', width: 20 },
        { header: 'SMS_due_date', key: 'sms_due_date', width: 20 },
        { header: 'Remark', key: 'remark', width: 20 }
    ];
          
        worksheet.addRows(result);
        connection.query(`SELECT COUNT(*) AS C FROM new_schema.internal_quality_auditors`, function(error, resu) {
            if (error) throw error;
            const leng = resu[0].C;
            console.log(leng);
            var color=0;
            for (let i = 0; i < leng; i++) {
                color = getColor(result[i].auth_validity_date);
                worksheet.getCell(`D${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
                color = getColor(result[i].regulations_due_date);
                worksheet.getCell(`G${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
                color = getColor(result[i].hf_due_date);
                worksheet.getCell(`I${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
                color = getColor(result[i].fts_due_date);
                worksheet.getCell(`K${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
                color = getColor(result[i].ewis_due_date);
                worksheet.getCell(`M${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
                color = getColor(result[i].sms_due_date);
                worksheet.getCell(`O${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
            }
          workbook.xlsx.writeBuffer().then((data) => {
          res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
          res.setHeader('Content-Disposition', 'attachment; filename=Internal Auditors.xlsx');
          res.send(data);
        });
      });
    });
});
app.post('/download_tools', (req, res) => {
    const query = 'SELECT * FROM new_schema.tools_and_equipment_calibration';
    connection.query(query, (err, result) => {
      if (err) throw err;
  
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Sheet1');
      worksheet.columns = [
        { header: 'Sr_no', key: 'sr_no', width: 10 },
        { header: 'Nomenclature', key: 'nomenclature', width: 32 },
        { header: 'Range', key: 'rang', width: 15 },
        { header: 'Part_no', key: 'part_no', width: 15 },
        { header: 'Ser_no', key: 'ser_no', width: 15 },
        { header: 'Ciasl_id_no', key: 'ciasl_id_no', width: 15 },
        { header: 'Calibration_date', key: 'caliberation_date', width: 20 },
        { header: 'Calibration_due_date', key: 'caliberation_due_date', width: 25 },
        { header: 'Calibration_done_by_orgn', key: 'caliberation_done_by_orgn', width: 25 },
        { header: 'Remark', key: 'remark', width: 20 },
      ];     
        worksheet.addRows(result);
        connection.query(`SELECT COUNT(*) AS C FROM new_schema.tools_and_equipment_calibration`, function(error, resu) {
            if (error) throw error;
            const leng = resu[0].C;
            console.log(leng);
            var color=0;
            for (let i = 0; i < leng; i++) {
                color = getColor(result[i].caliberation_due_date);
                worksheet.getCell(`H${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
            }
          workbook.xlsx.writeBuffer().then((data) => {
          res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
          res.setHeader('Content-Disposition', 'attachment; filename=Tools & Equipment.xlsx');
          res.send(data);
        });
      });
    });
});
app.post('/download_all_staff_data', (req, res) => {
    const query = 'SELECT * FROM new_schema.all_staff_data';
    connection.query(query, (err, result) => {
      if (err) throw err;
  
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Sheet1');
      worksheet.columns = [
        { header: 'Sr_no', key: 'sr_no', width: 10 },
        { header: 'Name', key: 'name', width: 32 },
        { header: 'Desgn', key: 'desgn', width: 20 },
        { header: 'Staff_no', key: 'staff_no', width: 20 },
        { header: 'Joining_date', key: 'joining_date', width: 20 },
        { header: 'Contract_starting_date', key: 'current_contract_starting_date', width: 25 },
        { header: 'Contract_validity_date', key: 'contract_validity_date', width: 25 },
        { header: 'AVSEC', key: 'avsec', width: 20 },
        { header: 'Avsec_training_due_date', key: 'avsec_training_due_date', width: 25 },
        { header: 'Aep_validity', key: 'aep_validity', width: 20 },
        { header: 'Adp_validity', key: 'adp_validity', width: 20 },
        { header: 'PCC_validity', key: 'pcc', width: 20 },
        { header: 'Remarks', key: 'remarks', width: 40 }
      ];      
        worksheet.addRows(result);
        connection.query(`SELECT COUNT(*) AS C FROM new_schema.all_staff_data`, function(error, resu) {
            if (error) throw error;
            const leng = resu[0].C;
            console.log(leng);
            var color=0;
            for (let i = 0; i < leng; i++) {
                color = getColor(result[i].contract_validity_date);
                worksheet.getCell(`F${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
                color = getColor(result[i].avsec_training_due_date);
                worksheet.getCell(`G${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
                color = getColor(result[i].aep_validity);
                worksheet.getCell(`H${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
                color = getColor(result[i].adp_validity);
                worksheet.getCell(`I${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
            }
          workbook.xlsx.writeBuffer().then((data) => {
          res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
          res.setHeader('Content-Disposition', 'attachment; filename=All Staff Data.xlsx');
          res.send(data);
        });
      });
    });
});
app.post('/download_gse', (req, res) => {
    const query = 'SELECT * FROM new_schema.gse';
    connection.query(query, (err, result) => {
      if (err) throw err;
  
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Sheet1');
      worksheet.columns = [
        { header: 'Sl no', key: 'sl_no', width: 10 },
        { header: 'Eqpt Name', key: 'eqpt_name', width: 32 },
        { header: 'Eqpt id no', key: 'eqpt_id_no', width: 20 },
        { header: 'Type of check', key: 'type_of_check', width: 20 },
        { header: 'Last check done date', key: 'last_check', width: 20 },
        { header: 'Next check due date', key: 'next_check', width: 20 },
      ];
      worksheet.addRows(result);
      connection.query(`SELECT COUNT(*) AS C FROM new_schema.gse`, function(error, resu) {
          if (error) throw error;
          const leng = resu[0].C;
          console.log(leng);
          for (let i = 0; i < leng; i++) {
              const color = getColor(result[i].next_check);
              console.log(color);
              worksheet.getCell(`F${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
          }
          workbook.xlsx.writeBuffer().then((data) => {
          res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
          res.setHeader('Content-Disposition', 'attachment; filename=GSE.xlsx');
          res.send(data);
        });
      });
    });
});
app.post('/download_regulator_approval_table', (req, res) => {
    const query = 'SELECT * FROM new_schema.regulators_amo_approvals';
    connection.query(query, (err, result) => {
      if (err) throw err;
  
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Sheet1');
      worksheet.columns = [
        { header: 'Sl_no', key: 'sl_no', width: 10 },
        { header: 'Regulator', key: 'regulator', width: 32 },
        { header: 'Amo_approval_no', key: 'amo_approval_no', width: 20 },
        { header: 'Initial_approval_date', key: 'initial_approval_date', width: 20 },
        { header: 'Approval_validity_date', key: 'approval_validity_date', width: 23 },
        { header: 'Scope_of_approval_a1', key: 'scope_of_approval_a1', width: 23 },
        { header: 'Scope_of_approval_a2', key: 'scope_of_approval_a2', width: 23 },
        { header: 'Scope_of_approval_a3', key: 'scope_of_approval_a3', width: 23 },
        { header: 'Scope_of_approval_a4', key: 'scope_of_approval_a4', width: 23 },
        { header: 'Operators_under_regulator', key: 'operators_under_regulator', width: 27 },
        { header: 'Staff_b1', key: 'staff_b1', width: 20 },
        { header: 'Staff_b2', key: 'staff_b2', width: 20 },
      ];
      worksheet.addRows(result);
      connection.query(`SELECT COUNT(*) AS C FROM new_schema.regulators_amo_approvals`, function(error, resu) {
          if (error) throw error;
          const leng = resu[0].C;
          console.log(leng);
          for (let i = 0; i < leng; i++) {
              const color = getColor(result[i].approval_validity_date);
              console.log(color);
              worksheet.getCell(`E${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}`} };
          }
          workbook.xlsx.writeBuffer().then((data) => {
          res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
          res.setHeader('Content-Disposition', 'attachment; filename=Regulator Approvals.xlsx');
          res.send(data);
        });
      });
    });
});
app.post('/download_operators', (req, res) => {
  const query = 'SELECT * FROM new_schema.operators';
  connection.query(query, (err, result) => {
    if (err) throw err;

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Sheet1');
    worksheet.columns = [
      { header: 'Sl_no', key: 'sl_no', width: 10 },
      { header: 'Operator', key: 'operator', width: 32 },
      { header: 'Op_code', key: 'op_code', width: 15 },
      { header: 'Ini_agree_date', key: 'ini_agree_date', width: 15 },
      { header: 'Agree_validity_date', key: 'agree_validity_date', width: 20 },
    ];
    worksheet.addRows(result);
    connection.query(`SELECT COUNT(*) AS C FROM new_schema.operators`, function(error, resu) {
        if (error) throw error;
        const leng = resu[0].C;
        console.log(leng);
        for (let i = 0; i < leng; i++) {
            const color = getColor(result[i].agree_validity_date);
            worksheet.getCell(`E${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}` }  };
        }
        workbook.xlsx.writeBuffer().then((data) => {
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader('Content-Disposition', 'attachment; filename=Operators.xlsx');
        res.send(data);
      });
    });
  });
});
app.post('/download_storage', (req, res) => {
    const query = 'SELECT * FROM new_schema.storage_life_monitoring';
    connection.query(query, (err, result) => {
      if (err) throw err;
  
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Sheet1');
      worksheet.columns = [
        { header: 'Sl_no', key: 'sl_no', width: 10},
        { header: 'Nomenclature', key: 'nomenclature', width: 32},
        { header: 'Part No', key: 'part_no', width: 15},
        { header: 'Batch No', key: 'batch_no', width: 15},
        { header: 'Storage Life', key: 'storage_life', width: 15}
      ];
      worksheet.addRows(result);
      connection.query(`SELECT COUNT(*) AS C FROM new_schema.storage_life_monitoring`, function(error, resu) {
          if (error) throw error;
          const leng = resu[0].C;
          console.log(leng);
          for (let i = 0; i < leng; i++) {
              const color = getColor(result[i].storage_life);
              worksheet.getCell(`E${i + 2}`).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: `FF${color}` }  };
          }
          workbook.xlsx.writeBuffer().then((data) => {
          res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
          res.setHeader('Content-Disposition', 'attachment; filename=Storage Life Monitoring.xlsx');
          res.send(data);
        });
      });
    });
});
app.post('/download_permission', (req, res) => {
    const query = 'SELECT * FROM new_schema.permissions';
    connection.query(query, (err, result) => {
      if (err) throw err;
  
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Sheet1');
      worksheet.columns = [
        { header: 'User ID', key: 'user_id', width: 10 },
        { header: 'User Fullname', key: 'user_fullname', width: 32 },
        { header: 'AME LICENSE', key: 'AME_LICENSE', width: 15 },
        { header: 'AME CONTINUATION', key: 'AME_CONTINUATION', width: 15 },
        { header: 'AME AUTHORISATION', key: 'AME_AUTHORISATION', width: 15 },
        { header: 'AUTHORISATION COVERAGE', key: 'AUTHORISATION_COVERAGE', width: 15 },
        { header: 'TECHNICIANS', key: 'TECHNICIANS', width: 15 },
        { header: 'REGULAR AUDIT', key: 'REGULAR_AUDIT', width: 15 },
        { header: 'AUDIT BY AIRLINE', key: 'AUDIT_BY_AIRLINE', width: 15 },
        { header: 'QUALITY AUDIT QUALITY', key: 'QUALITY_AUDIT_QUALITY', width: 15 },
        { header: 'QUALITY AUDIT LINE', key: 'QUALITY_AUDIT_LINE', width: 15 },
        { header: 'AUDIT EXTERNAL CIASL', key: 'AUDIT_EXTERNAL_CIASL', width: 15 },
        { header: 'INTERNAL QUALITY', key: 'INTERNAL_QUALITY', width: 15 },
        { header: 'TOOLS', key: 'TOOLS', width: 10 },
        { header: 'ALL STAFF', key: 'ALL_STAFF', width: 15 },
        { header: 'GROUND SUPPORT', key: 'GROUND_SUPPORT', width: 15 },
        { header: 'REGULATOR APPROVAL', key: 'REGULATOR_APPROVAL', width: 15 },
        { header: 'OPERATORS', key: 'OPERATORS', width: 10 },
        { header: 'STORAGE LIFE', key: 'STORAGE_LIFE', width: 15 }

      ];
          
      worksheet.addRows(result);
          workbook.xlsx.writeBuffer().then((data) => {
          res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
          res.setHeader('Content-Disposition', 'attachment; filename=Permissions.xlsx');
          res.send(data);
        });
      });
});
/*
//BACKUP
async function saveTableData(tableName) {
    const sql = `SELECT * FROM new_schema.${tableName}`;
    connection.query(sql, (err, rows, fields) => {
      if (err) throw err;
  
      const workbook = xlsx.utils.book_new();
      const sheet = xlsx.utils.json_to_sheet(rows);
      xlsx.utils.book_append_sheet(workbook, sheet, 'Sheet1');
      xlsx.writeFile(workbook, `${tableName}.xlsx`);
  
      console.log('Data saved successfully!');
    });
}
const tableNames = ['all_staff_data','ame_authorisations','ame_continuation_trainings','amelicense','audit_by_airline_operators','audit_of_external','gse','internal_quality_auditors','line_maintenance','operators','quality_audit','regular_audit','regulators_amo_approvals','storage_life_monitoring','technician_continuation_trainings','tools_and_equipment_calibration','login'];
for (const tableName of tableNames) {
  setInterval(() => saveTableData(tableName), 12*60*60*1000); 
}
*/
http.createServer(app).listen(PORT);
