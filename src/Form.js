import React from 'react';
import './Form.css';

function Form({ onCancel }) {
    return (
        <>
            <h3 style={{ color: "black" }}>Add Ranch</h3>
            <div className="form-container">

                <form>
                    <div className="form-group">
                        <div className="input-group-1">
                            <label>Name<span className="required">*</span></label>
                            <input type="text" placeholder="Enter Name" required className="input-field-1" />
                            <label>Area Size<span className="required">*</span></label>
                            <input type="text" placeholder="Enter Area Size" required className="input-field-1" />
                            <label>Phone Number<span className="required">*</span></label>
                            <input type="text" placeholder="Enter Phone Number" required className="input-field-1" />
                            <label>Zip Code<span className="required">*</span></label>
                            <input type="text" placeholder="Enter Zip Code" required className="input-field-1" />
                        </div>
                        <div className="input-group-2">
                            <label>Description<span className="required">*</span></label>
                            <input type="text" placeholder="Enter Description" required className="input-field-2" />

                            <div className="input-group-3">
                                <div className="input-pair">
                                    <label>Contact Person<span className="required">*</span></label>
                                    <input type="text" placeholder="Enter Contact Person" required className="input-field-3" />
                                </div>
                                <div className="input-pair">
                                    <label>Email<span className="required">*</span></label>
                                    <input type="text" placeholder="Enter Email" required className="input-field-3" />
                                </div>

                            </div>
                            <div className="input-group-3">
                                <div className="input-pair">
                                    <label>City<span className="required">*</span></label>
                                    <input type="text" placeholder="Enter City" required className="input-field-3" />
                                </div>
                                <div className="input-pair">
                                    <label>State<span className="required">*</span></label>
                                    <select type="text" placeholder="Enter State" required className="input-field-5" >
                                        <option value="New Delhi">New Delhi</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Karnataka">Karnataka</option>
                                        <option value="Telangana">Telangana</option>
                                    </select>
                                </div>

                            </div>
                            <div className="input-group-4">
                                <div >
                                    <label>Addtional Details</label>
                                    <textarea type="text" placeholder="Enter Addtional Details" required className="input-field-3" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="button" className="cancel-button" onClick={onCancel} title='cancel'>Cancel</button>
                        <button type="submit" className="save-button" title='save'>Save</button>
                    </div>
                </form >
            </div >
        </>
    );
}

export default Form;
