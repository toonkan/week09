import React,{Component} from 'react';
import img5 from '../assets/history.jpg';


class About extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container mt-3">
                <div className="container">
                    <h2 className="text-success">เกี่ยวกับ</h2>

                    <p>
                        เริ่มก่อตั้งเมื่อ ปี 2480 ใช้ชื่อ "โรงเรียนช่างไม้" ในเนื่อที่ของกรมการศาสนา วัดบุรินทร์(วัดร้าง) ประมาณ 6 ไร่เศษ โดยมี นายจิรภัทร เป็นครูใหญ่ ในสมัยนั้น ปีพุทธศักราช 2510
                    โดยการใช้พื้นที่ของโรงเรียนการช่างสตรี ซึ่งถูกยุบรวมกับ โรงเรียนช่างไม้ ในเนื้อที่ 15 ไร่ 1 งาน 72 ตารางวา อันเป็นที่ ตั้งของวิทยาลัยเทคนิคในปัจจุบัน
                    </p>
                </div>


                <div className="container">
                    <ul type="square">
                        <li>ปี พ.ศ 2480 โรงเรียนช่างไม้ตราด</li>
                        <li>ปี พ.ศ 2500 โรงเรียนการช่างตราด</li>
                        <li>ปี พ.ศ 2510 รวมกับ โรงเรียนการช่างสตรีใช้ชื่อ โรงเรียนการช่างตราด</li>
                        <li>ปี พ.ศ 2522 โรงเรียนเทคนิคตราด</li>
                        <li>ปี พ.ศ 2525 ถึง ปัจจุบัน วิทยาลัยเทคนิคตราด</li>
                    </ul>
                </div>

                <div className="container ml-5">
                    <a href="http://www.trattc.ac.th/~nexttrat101.php" target="_blank"><img src={img5}/></a>
                </div>
            </div>
        )
    }    
}
export default About;