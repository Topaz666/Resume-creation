import React, { Component } from 'react'
import FormPersonalDetails from './FormPersonalDetails';
import FormWorkHistorys from './FormWorkHistorys';
import FormEducations from './FormEducations';
import FormSkills from './FormSkills';
import Confirm from './Confirm';
import Success from './Success';
import { Navigation } from './Navigation';
import jsPDF from 'jspdf';

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: 'hello',
        lastName: 'world',
        city: 'Toronto',
        province:'On',
        postalCode:'L0R422',
        workHistory:[{
          email:'12323456@gmail.com',
          phone: '66666435',
          jobTitle: 'Senior Sales Associate',
          employer: 'Bed Bath & Beyond Inc',
          city2: 'Ottawa',
          province2:'ON',
          startDate:'',
          endDate:''
        }],
        schoolName: 'xxxx University',
        schoolLocation: 'Ottawa',
        degree: 'Bachelor of Art',
        fieldOfStudy:'Buisness of Adminstration',
        month:'May', 
        year: '2013',
        skillList:[]
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({
          step: step + 1
        });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({
          step: step - 1
        });
    };

    changeStep = (input) => {
      this.setState({
        step: input
      });
    };

    addSkillList = () => e => {
      this.setState({
        skillList: this.state.skillList.concat(document.getElementById("skillListId").value)
      });
      document.getElementById("skillListId").value = "";
    }

    removeSklillList = (i)=>{
      const { skillList } = this.state;
      this.setState({
        skillList: skillList.filter((el,index) => index!==i)
      });
    }

    generatepdf = () => {
      let pdf = new jsPDF('p', 'pt', 'a4');
      let pWidth = pdf.internal.pageSize.width; // 595.28 is the width of a4
      let srcWidth = document.querySelector('#resume-document').scrollWidth;
      let margin = 18; // narrow margin - 1.27 cm (36);
      let scale = (pWidth - margin * 2) / srcWidth;
      pdf.html(document.querySelector('#resume-document'), {
          x: margin,
          y: margin,
          html2canvas: {
              scale: scale,
          },
          callback: function () {
              window.open(pdf.output('bloburl'));
          }
      });
    }


    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };

    onChange = (i, input) =>e=> {
      const newInputFields = this.state.workHistory.map((item,index) => {
        if(i === index) {
          item[input] = e.target.value
        }
        return item;
      })
      this.setState({ workHistory: [...newInputFields]});
    }

    handleAddWorkHistory = () =>{
      const inputState = {
        email:'',
        phone: '',
        jobTitle: '',
        employer: '',
        city2: '',
        province2:'',
        startDate:'',
        endDate:''
      };
      this.setState((prevState)=>({workHistory:[...prevState.workHistory, inputState]}))
    }

    handleCurCheckbox = (i) => e =>{
      if(e.target.checked){
          this.handleCurCheckboxInput(i, 'endDate', 'Current')
          e.target.parentElement.previousElementSibling.disabled = true;
      }
      else{
          this.handleCurCheckboxInput(i, 'endDate', '')
          e.target.parentElement.previousElementSibling.disabled = false;
      }
    }

    handleCurCheckboxInput = (i, input, data)=>{
      const newInputFields = this.state.workHistory.map((item,index) => {
        if(i === index) {
          item[input] = data
        }
        return item;
      })
      this.setState({ workHistory: [...newInputFields]});
    }

    render() {
        const { step } = this.state;
        const { firstName, lastName, city, province, postalcode, email, phone} = this.state;
        const { jobTitle, employer, city2, province2, startDate, endDate} = this.state;
        const { schoolName, schoolLocation, degree, fieldOfStudy, month, year, skillList} = this.state;

        const values = { firstName, lastName, city, province, postalcode, email, phone, jobTitle, employer, city2, province2, startDate, endDate ,schoolName, schoolLocation, degree, fieldOfStudy, skillList, month, year};
        switch (step) {
          case 1:
            return (
              <>
                <Navigation
                  changeStep={this.changeStep}
                />
                <FormPersonalDetails
                  nextStep={this.nextStep}
                  handleChange={this.handleChange}
                  values={values}
                />
              </>
            );
          case 2:
            return (
            <>
              <Navigation
                changeStep={this.changeStep}
              />
              <FormWorkHistorys
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.onChange}
                handleAddWorkHistory={this.handleAddWorkHistory}
                handleCurCheckbox={this.handleCurCheckbox}
                values={this.state.workHistory}
              />
            </>
          );

          case 3:
            return (
            <>
              <Navigation
                changeStep={this.changeStep}
              />
              <FormEducations
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
              />
            </>
          );

          case 4:
            return (
            <>
              <Navigation
                changeStep={this.changeStep}
              />
              <FormSkills
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              addSkillList={this.addSkillList}
              handleChange={this.handleChange}
              removeSklillList={this.removeSklillList}
              values={values}
              />
            </>
          );

          case 5:
            return (
            <>
              <Navigation
                changeStep={this.changeStep}
              />
              <Confirm
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              generatepdf={this.generatepdf}
              values={values}
              />
            </>
          );

          case 6:
            return(
            <>
              <Navigation
                changeStep={this.changeStep}
              />
              <Success
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              generatepdf={this.generatepdf2}/>
            </>
          );
          default:
            (console.log('This is a multi-step form built with React.'))
        }
    }
}

export default UserForm
