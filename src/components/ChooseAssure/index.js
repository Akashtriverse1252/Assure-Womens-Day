import React from "react";
import "./index.css";
import { Alltime } from "../../images/SVG/Alltime";
import { Samedaydelivery } from "../../images/SVG//Samedaydelivery";
import { FoundedDoctor } from "../../images/SVG//FoundedDoctor";
import { AdvancedTechnology } from "../../images/SVG//AdvancedTechnology";
import { HighOn } from "../../images/SVG/HighOn";
import Nabh from "../../images/SVG/Nabh";
import { FiveHundredplus } from "../../images/SVG//FiveHundredplus";
import { ConsultingService } from "../../images/SVG//ConsultingService";
const index = () => {
  return (
    <>
      <div className="flex justify-center pt-3">
        <div className="why_assure_cnt">
          <div className="why_assure_item">
            <span className="flex items-center justify-center">
              <Nabh />
            </span>
            <div className="why_assure_text">NABH Certified Labs</div>
          </div>
          <div className="why_assure_item">
            <span className="flex items-center justify-center">
              <Alltime />
            </span>
            <div className="why_assure_text">24x7</div>
          </div>
          <div className="why_assure_item">
            <span className="flex items-center justify-center">
              <Samedaydelivery />
            </span>
            <div className="why_assure_text">Same Day Report</div>
          </div>
          <div className="why_assure_item">
            <span className="flex items-center justify-center">
              <FoundedDoctor />
            </span>
            <div className="why_assure_text">Founded by Doctors</div>
          </div>
          <div className="why_assure_item">
            <span className="flex items-center justify-center">
              <AdvancedTechnology />
            </span>
            <div className="why_assure_text">Advanced Technology</div>
          </div>
          <div className="why_assure_item">
            <span className="flex items-center justify-center">
              <HighOn />
            </span>
            <div className="why_assure_text">High on Safety and Hygiene</div>
          </div>
          <div className="why_assure_item">
            <span className="flex items-center justify-center">
              <FiveHundredplus />
            </span>
            <div className="why_assure_text">1000+ Test</div>
          </div>
          <div className="why_assure_item">
            <span className="flex items-center justify-center">
              <ConsultingService />
            </span>
            <div className="why_assure_text">Consultation Services</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
