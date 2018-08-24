/**
 * ประเภทตัวชี้วัด เช่น QOF, กระทรวง, เขต,​ จังหวัด
 * 
 * url: http://xxx.xx.xx/groups
 */

json = [
  {
    "group_id": "", // รหัสกลุ่มตัวชี้วัด
    "group_name": "" // ชื่อกลุ่มตัวชี้วัด
  }
]

/**
 * รายการตัวชี้วัดภาพรวม QOF, กระทรวง, เขต, จังหวัด (เรียงลำดับคะแนนจาก มาก ไป น้อย)
 * 
 * ตัวแปรที่รับเข้ามา
 * - groupId   ID ของกลุ่มตัวชี้วัด
 * - year       ปีงบประมาณ
 * 
 * url: http://xxx.xx.xx/kpi?groupId=xxx&year=xxxx
 */
json = {
  "group_name": "", // ชื่อกลุ่มตัวชี้วัด
  "target_score": "", // คะแนนที่ผ่านเกณฑ์
  "year": "", // ปีงบประมาณ
  "results": [
    {
      "kpi_id": "", // รหัสตัวชี้วัด
      "kpi_name": "", // ชื่อตัวชี้วัด
      "target": "", // จำนวนเป้าหมาย
      "result": "", // จำนวนผลงาน
      "score": "", // ร้อยละของผลงานที่ทำได้
      "updated_at": "" // วัน เวลา ที่อัปเดท เป็น Timestamp
    }
  ]
}
/**
 * คะแนนรายจังหวัด (เรียงลำดับคะแนนจาก มาก ไป น้อย)
 * 
 * ตัวแปรที่รับเข้ามา
 * - kpiId   ID ของตัวชี้วัด
 * - year       ปีงบประมาณ
 * url: http://xxx.xx.xx/chw?kpiId=xxx&year=xxxx
 */
json = {
  "kpi_id": "",
  "kpi_name": "",
  "year": "",
  "target_score": "",
  "results": [
    {
      "chwname": "", // ชื่อจังหวัด
      "chwcode": "", // รหัสจัวหวัด
      "target": "",
      "result": "",
      "score": "",
      "updated_at": ""
    }
  ]
}
/**
 * คะแนนรายอำเภอ (เรียงลำดับคะแนนจาก มาก ไป น้อย)
 * 
 * ตัวแปรที่รับเข้ามา
 * - kpiId     ID ของตัวชี้วัด
 * - chwCode    รหัสจังหวัด
 * - year       ปีงบประมาณ
 * url: http://xxx.xx.xx/amp?chwCode=xxx&year=xxxx&kpiId=xxx
 */
json = {
  "kpi_id": "",
  "kpi_name": "",
  "year": "",
  "chwname": "",
  "target_score": "",
  "results": [
    {
      "ampcode": "", // รหัสอำเภอ
      "ampname": "", // ชื่ออำเภอ
      "target": "",
      "result": "",
      "score": "",
      "updated_at": ""
    }
  ]
}

/**
 * คะแนนรายหน่วยบริการ (เรียงลำดับคะแนนจาก มาก ไป น้อย)
 * 
 * ตัวแปรที่รับเข้ามา
 * - kpiId     ID ของตัวชี้วัด
 * - chwCode    รหัสจังหวัด
 * - ampCode    รหัสอำเภอ
 * - year       ปีงบประมาณ
 * 
 * url: http://xxx.xx.xx/hospital?chwCode=xxx&ampCode=xxx&year=xxxx&kpiId=xxx
 */
json = {
  "kpi_id": "",
  "kpi_name": "",
  "chwname": "",
  "ampname": "",
  "year": "",
  "target_score": "",
  "results": [
    {
      "hospcode": "", // รหัสหน่วยบริการ
      "hospname": "", // ชื่อหน่วยบริการ
      "target": "",
      "result": "",
      "score": "",
      "updated_at": ""
    }
  ]
}
