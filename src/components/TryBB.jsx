import React from "react";

export default function TryBB() {
  return (
    <div style={{margin:'30px'}}>
      <div>
        <h2 className="ContactUs_Section1_H2">تواصل معنا</h2>
        <p className="ContactUs_Section1_P">
        استخدم النموذج أدناه للاتصال بنا إذا كنت بحاجة إلى مساعدة أو كان لديك سؤال لنا.

        </p>
      </div>
      <form className="ContactUs_Form">
        <div className="ContactUs_Form_Div1">
          <input
            className="ContactUs_Form_Div1_inputs"
            type="text"
            placeholder="Full Name *"
          />
          <input
            className="ContactUs_Form_Div1_inputs"
            type="number"
            placeholder="Phone Number *"
          />
          <input
            className="ContactUs_Form_Div1_inputs"
            type="email"
            placeholder="Email *"
          />
        </div>
        <div>
          <textarea
            className="ContactUs_Form_Textarea"
            placeholder="Type... "
          ></textarea>
        </div>
        <div>
          <button className="ContactUs_Form_btn" onClick={""}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
