import React from 'react';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import WithTooltip from './WithTooltip';

export default function DutyTile(props) {
    const setDoctorOnDuty = props.setDoctorOnDuty;
    const highlight = props.highlight;
    const toggleHighlight = props.toggleHighlight;

    const doctors = props.doctors;
    const duty = props.duty;
    const date = duty.getDay().number;
    const doctor = duty.getDoctor();
    const position = duty.getPosition();

    const mobile = window.matchMedia("(max-width: 768px)").matches;


    const customToggle = React.forwardRef(({children, onClick}, ref) => (
        <div 
        className="duty-tile-control control" 
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}>
        <i className="bi bi-person-fill-add"></i>
        </div>
    ));

    const customMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => (
            <div
              ref={ref}
              style={style}
              className={className}
              aria-labelledby={labeledBy}
            >
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <ul className="list-unstyled">
                                    {React.Children.toArray(children.filter((ch, i) => i % 2 === 0))}
                                </ul>
                            </td>
                            <td>
                                <ul className="list-unstyled">
                                    {React.Children.toArray(children.filter((ch, i) => i % 2 === 1))}
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
          )
      );

    const options = [];
    if (doctors) {
        doctors.filter(d => d.getNumberOfDutiesLeft() > 0).forEach((currentDoctor, i) => {
            var unsafe = false;
            if (currentDoctor !== doctor) {
                const dutyDates = currentDoctor.getDuties().map(d => d.getDay().number);
                unsafe = [date-1, date, date+1].some(d => dutyDates.includes(d));
                options.push(
                    <Dropdown.Item key={`${date}-${position}-${i}`} eventKey={i} onClick={() => setDoctorOnDuty(duty, currentDoctor)}>{unsafe && '(zam.)'} {currentDoctor.name}</Dropdown.Item>
                );
            }
        });
    }

    var doctorDiv = <div className="duty-tile-off-duty"></div>;
    if (doctor) {
        doctorDiv = <div className="duty-tile-on-duty" onClick={() => toggleHighlight(doctor)}>{doctor.name}</div>;
    }

    let colClasses = "border-2 border-light text-light duty-tile ";
    if (highlight === doctor) {
        colClasses += "highlight ";
    } else if (highlight && !doctors.includes(highlight)) {
        colClasses += "outside-preferences ";
    } else {
        colClasses += `normal-${position} `;
    }

    if (!mobile) {
        colClasses += "border-start ";
    }

    return (
        <Col md className={colClasses} >
            { doctorDiv }
            <div className="duty-tile-controls">
                <Dropdown align={mobile ? "end" : "start"} drop={mobile ? "down" : "end"}>
                    <Dropdown.Toggle as={customToggle} />
                    <Dropdown.Menu as={customMenu} className="duty-tile-dropdown">
                        {options}
                    </Dropdown.Menu>
                </Dropdown>
                <div className="duty-tile-control control ms-1" onClick={() => setDoctorOnDuty(duty, null)}><i className="bi bi-x-lg fs-6"></i></div>
            </div>
        </Col>
    );
}

//✕