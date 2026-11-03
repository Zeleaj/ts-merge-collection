TypeScript Project Template
โปรเจกต์ต้นแบบสำหรับเขียน TypeScript พร้อมระบบ Unit Test (ใช้ Vitest)
1. การติดตั้ง (Setup Dependencies)
จำเป็นต้องติดตั้ง Node.js ในเครื่องก่อน จากนั้นเปิด Terminal ในโฟลเดอร์นี้และรันคำสั่ง:
npm install
คำสั่งนี้จะทำการติดตั้ง typescript, ts-node (สำหรับรันไฟล์ .ts ทันที) และ vitest (สำหรับทำเทส) ตามที่ระบุไว้ใน package.json
3. การรันโค้ด (Execute Code)
สามารถรันโค้ด TypeScript เพื่อดูผลลัพธ์การทำงานได้ทันที โดยรันคำสั่ง:
npm start
4. การรัน Unit Test
การทดสอบโค้ดทั้งหมด (ไฟล์ที่ลงท้ายด้วย .test.ts) สามารถรันคำสั่ง:
npm test
ระบบจะรัน Unit test และแสดงผล Pass/Fail ใน Terminal
