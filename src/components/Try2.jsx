import React from "react";

export default function Try2() {
  return (
    <div className="Try2_Container" dir="rtl">
      <div className="Try2_H_Div">
        <div style={{display:'flex',flexDirection:'column'}}>
          <h2>معلومات هامة عن التبرع بالدم *</h2><br />
          <h3>لماذا يجب عليَّ أن أكون متبرعًا بالدم؟</h3>
        </div>
      </div><br /><br /><br />
      <div className="Try2_List">
         <ul>
          <li>كل ثلاث ثوان هناك شخص يحتاج إلى نقل الدم.</li>
          <li>واحد من كل عشرة مرضى يدخلون المستشفى في حاجة إلى نقل الدم.</li>
          <li>دمك يمكن أن ينقذ أربعة أشخاص عند فصل مكوناته وليس شخصًا واحدًا.</li>
          <li>تعيد عملية التبرع بالدم الحيوية والنشاط للجسم بسبب تجدد خلايا الدم.</li>
          <li>يمكن للمتبرع الحصول على نتائج فحوصات المسح الخاصة به، بما فيها فصيلة الدم.</li>
         </ul>
      </div>
    </div>
  )
}