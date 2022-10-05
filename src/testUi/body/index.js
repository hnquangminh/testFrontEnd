import React from 'react';
import '../style.scss';
import useForm from './useForm';
import validate from './validate';

export default function Body(props) {
    const { values, errors, handleChange, handleSubmit } = useForm(submit, validate);

    function submit() {
        console.log('No errors, submit callback called!');
    }
    return (
        <div className="body">
            <div className="body-info">
                <h1>Drive More Customers Through Digital</h1>
                <p>We know how large objects will act, but things on a small scale</p>
                <div className="body-btn">
                    <button className="btn-private">Get Quote Now</button>
                    <button className="btn-transparent">Learn More</button>
                </div>
            </div>
            <div className="body-form">
                <form onSubmit={handleSubmit} noValidate className="form" id="form-1">
                    <h3 className="heading">Book Appointment</h3>
                    <div className="spacer" />
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">
                            Name*
                        </label>
                        <input
                            className={`input ${errors.name && 'is-danger'}`}
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={values.name || ''}
                            placeholder="Full Name"
                            require
                            style={{
                                height: '40px',
                                padding: '8px 12px',
                                border: '1px solid #b3b3b3',
                                borderRadius: '3px',
                            }}
                        />
                        {errors.name && (
                            <p className="help is-danger" style={{ color: 'red' }}>
                                {errors.name}
                            </p>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">
                            Email*
                        </label>
                        <input
                            autoComplete="off"
                            className={`input ${errors.email && 'is-danger'}`}
                            placeholder="example@gmail.com"
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={values.email || ''}
                            required
                            style={{
                                height: '40px',
                                padding: '8px 12px',
                                border: '1px solid #b3b3b3',
                                borderRadius: '3px',
                            }}
                        />
                        {errors.email && (
                            <p className="help is-danger" style={{ color: 'red' }}>
                                {errors.email}
                            </p>
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="department" className="form-label">
                            Department*
                        </label>
                        <select name="department" id="department" className="form-control">
                            <option value="select">Please Select</option>
                        </select>
                        <span className="form-message" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="time" className="form-label">
                            Time*
                        </label>
                        <select name="time" id="time" className="form-control">
                            <option value="volvo">4:00 Available</option>
                        </select>
                        <span className="form-message" />
                    </div>
                    <button type="submit" className="form-submit">
                        Book Appointment
                    </button>
                </form>
            </div>
        </div>
    );
}
