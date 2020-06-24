import React, { Component } from 'react'

export default class Content extends Component {
    render() {
        return (
            <div className="main-content">
                <section className="section">
                    <div className="section-header">
                    <h1>Advanced Forms</h1>
                    <div className="section-header-breadcrumb">
                        <div className="breadcrumb-item active"><a href="#">Dashboard</a></div>
                        <div className="breadcrumb-item"><a href="#">Forms</a></div>
                        <div className="breadcrumb-item">Advanced Forms</div>
                    </div>
                    </div>
                    <div className="section-body">
                    <h2 className="section-title">Advanced Forms</h2>
                    <p className="section-lead">We provide advanced input fields, such as date picker, color picker, and so on.</p>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6">
                        <div className="card">
                            <div className="card-header">
                            <h4>Input Text</h4>
                            </div>
                            <div className="card-body">
                            <div className="form-group">
                                <label>Default Input Text</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Phone Number (US Format)</label>
                                <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                    <i className="fas fa-phone" />
                                    </div>
                                </div>
                                <input type="text" className="form-control phone-number" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Password Strength</label>
                                <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                    <i className="fas fa-lock" />
                                    </div>
                                </div>
                                <input type="password" className="form-control pwstrength" data-indicator="pwindicator" />
                                </div>
                                <div id="pwindicator" className="pwindicator">
                                <div className="bar" />
                                <div className="label" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Currency</label>
                                <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                    $
                                    </div>
                                </div>
                                <input type="text" className="form-control currency" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Purchase Code</label>
                                <input type="text" className="form-control purchase-code" placeholder="ASDF-GHIJ-KLMN-OPQR" />
                            </div>
                            <div className="form-group">
                                <label>Invoice</label>
                                <input type="text" className="form-control invoice-input" />
                            </div>
                            <div className="form-group">
                                <label>Date</label>
                                <input type="text" className="form-control datemask" placeholder="YYYY/MM/DD" />
                            </div>
                            <div className="form-group">
                                <label>Credit Card</label>
                                <input type="text" className="form-control creditcard" />
                            </div>
                            <div className="form-group">
                                <label>Tags</label>
                                <input type="text" className="form-control inputtags" />
                            </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                            <h4>Toggle Switches</h4>
                            </div>
                            <div className="card-body">
                            <div className="form-group">
                                <div className="control-label">Toggle switches</div>
                                <div className="custom-switches-stacked mt-2">
                                <label className="custom-switch">
                                    <input type="radio" name="option" defaultValue={1} className="custom-switch-input" defaultChecked />
                                    <span className="custom-switch-indicator" />
                                    <span className="custom-switch-description">Option 1</span>
                                </label>
                                <label className="custom-switch">
                                    <input type="radio" name="option" defaultValue={2} className="custom-switch-input" />
                                    <span className="custom-switch-indicator" />
                                    <span className="custom-switch-description">Option 2</span>
                                </label>
                                <label className="custom-switch">
                                    <input type="radio" name="option" defaultValue={3} className="custom-switch-input" />
                                    <span className="custom-switch-indicator" />
                                    <span className="custom-switch-description">Option 3</span>
                                </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="control-label">Toggle switch single</div>
                                <label className="custom-switch mt-2">
                                <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input" />
                                <span className="custom-switch-indicator" />
                                <span className="custom-switch-description">I agree with terms and conditions</span>
                                </label>
                            </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                            <h4>Image Check</h4>
                            </div>
                            <div className="card-body">
                            <div className="form-group">
                                <label className="form-label">Image Check</label>
                                <div className="row gutters-sm">
                                <div className="col-6 col-sm-4">
                                    <label className="imagecheck mb-4">
                                    <input name="imagecheck" type="checkbox" defaultValue={1} className="imagecheck-input" />
                                    <figure className="imagecheck-figure">
                                        <img src="assets/img/news/img01.jpg" alt="}" className="imagecheck-image" />
                                    </figure>
                                    </label>
                                </div>
                                <div className="col-6 col-sm-4">
                                    <label className="imagecheck mb-4">
                                    <input name="imagecheck" type="checkbox" defaultValue={2} className="imagecheck-input" defaultChecked />
                                    <figure className="imagecheck-figure">
                                        <img src="assets/img/news/img02.jpg" alt="}" className="imagecheck-image" />
                                    </figure>
                                    </label>
                                </div>
                                <div className="col-6 col-sm-4">
                                    <label className="imagecheck mb-4">
                                    <input name="imagecheck" type="checkbox" defaultValue={3} className="imagecheck-input" />
                                    <figure className="imagecheck-figure">
                                        <img src="assets/img/news/img03.jpg" alt="}" className="imagecheck-image" />
                                    </figure>
                                    </label>
                                </div>
                                <div className="col-6 col-sm-4">
                                    <label className="imagecheck mb-4">
                                    <input name="imagecheck" type="checkbox" defaultValue={4} className="imagecheck-input" defaultChecked />
                                    <figure className="imagecheck-figure">
                                        <img src="assets/img/news/img04.jpg" alt="}" className="imagecheck-image" />
                                    </figure>
                                    </label>
                                </div>
                                <div className="col-6 col-sm-4">
                                    <label className="imagecheck mb-4">
                                    <input name="imagecheck" type="checkbox" defaultValue={5} className="imagecheck-input" />
                                    <figure className="imagecheck-figure">
                                        <img src="assets/img/news/img05.jpg" alt="}" className="imagecheck-image" />
                                    </figure>
                                    </label>
                                </div>
                                <div className="col-6 col-sm-4">
                                    <label className="imagecheck mb-4">
                                    <input name="imagecheck" type="checkbox" defaultValue={6} className="imagecheck-input" />
                                    <figure className="imagecheck-figure">
                                        <img src="assets/img/news/img06.jpg" alt="}" className="imagecheck-image" />
                                    </figure>
                                    </label>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                            <h4>Color</h4>
                            </div>
                            <div className="card-body">
                            <div className="form-group">
                                <label>Simple</label>
                                <input type="text" className="form-control colorpickerinput" />
                            </div>
                            <div className="form-group">
                                <label>Pick Your Color</label>
                                <div className="input-group colorpickerinput">
                                <input type="text" className="form-control" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                    <i className="fas fa-fill-drip" />
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Color Input</label>
                                <div className="row gutters-xs">
                                <div className="col-auto">
                                    <label className="colorinput">
                                    <input name="color" type="checkbox" defaultValue="primary" className="colorinput-input" />
                                    <span className="colorinput-color bg-primary" />
                                    </label>
                                </div>
                                <div className="col-auto">
                                    <label className="colorinput">
                                    <input name="color" type="checkbox" defaultValue="secondary" className="colorinput-input" />
                                    <span className="colorinput-color bg-secondary" />
                                    </label>
                                </div>
                                <div className="col-auto">
                                    <label className="colorinput">
                                    <input name="color" type="checkbox" defaultValue="danger" className="colorinput-input" />
                                    <span className="colorinput-color bg-danger" />
                                    </label>
                                </div>
                                <div className="col-auto">
                                    <label className="colorinput">
                                    <input name="color" type="checkbox" defaultValue="warning" className="colorinput-input" />
                                    <span className="colorinput-color bg-warning" />
                                    </label>
                                </div>
                                <div className="col-auto">
                                    <label className="colorinput">
                                    <input name="color" type="checkbox" defaultValue="info" className="colorinput-input" />
                                    <span className="colorinput-color bg-info" />
                                    </label>
                                </div>
                                <div className="col-auto">
                                    <label className="colorinput">
                                    <input name="color" type="checkbox" defaultValue="success" className="colorinput-input" />
                                    <span className="colorinput-color bg-success" />
                                    </label>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                        <div className="card">
                            <div className="card-header">
                            <h4>Select</h4>
                            </div>
                            <div className="card-body">
                            <div className="section-title mt-0">Default</div>
                            <div className="form-group">
                                <label>Default Select</label>
                                <select className="form-control">
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                                </select>
                            </div>
                            <div className="section-title">Select 2</div>
                            <div className="form-group">
                                <label>Select2</label>
                                <select className="form-control select2">
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Select2 Multiple</label>
                                <select className="form-control select2" multiple>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                                <option>Option 4</option>
                                <option>Option 5</option>
                                <option>Option 6</option>
                                </select>
                            </div>
                            <div className="section-title">jQuery Selectric</div>
                            <div className="form-group">
                                <label>jQuery Selectric</label>
                                <select className="form-control selectric">
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                                <option>Option 4</option>
                                <option>Option 5</option>
                                <option>Option 6</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>jQuery Selectric Multiple</label>
                                <select className="form-control selectric" multiple>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                                <option>Option 4</option>
                                <option>Option 5</option>
                                <option>Option 6</option>
                                </select>
                            </div>
                            <div className="section-title">Select Group Button</div>
                            <div className="form-group">
                                <label className="form-label">Size</label>
                                <div className="selectgroup w-100">
                                <label className="selectgroup-item">
                                    <input type="radio" name="value" defaultValue={50} className="selectgroup-input" defaultChecked />
                                    <span className="selectgroup-button">S</span>
                                </label>
                                <label className="selectgroup-item">
                                    <input type="radio" name="value" defaultValue={100} className="selectgroup-input" />
                                    <span className="selectgroup-button">M</span>
                                </label>
                                <label className="selectgroup-item">
                                    <input type="radio" name="value" defaultValue={150} className="selectgroup-input" />
                                    <span className="selectgroup-button">L</span>
                                </label>
                                <label className="selectgroup-item">
                                    <input type="radio" name="value" defaultValue={200} className="selectgroup-input" />
                                    <span className="selectgroup-button">XL</span>
                                </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Icons input</label>
                                <div className="selectgroup w-100">
                                <label className="selectgroup-item">
                                    <input type="radio" name="transportation" defaultValue={2} className="selectgroup-input" />
                                    <span className="selectgroup-button selectgroup-button-icon"><i className="fas fa-mobile" /></span>
                                </label>
                                <label className="selectgroup-item">
                                    <input type="radio" name="transportation" defaultValue={1} className="selectgroup-input" defaultChecked />
                                    <span className="selectgroup-button selectgroup-button-icon"><i className="fas fa-tablet" /></span>
                                </label>
                                <label className="selectgroup-item">
                                    <input type="radio" name="transportation" defaultValue={6} className="selectgroup-input" />
                                    <span className="selectgroup-button selectgroup-button-icon"><i className="fas fa-laptop" /></span>
                                </label>
                                <label className="selectgroup-item">
                                    <input type="radio" name="transportation" defaultValue={6} className="selectgroup-input" />
                                    <span className="selectgroup-button selectgroup-button-icon"><i className="fas fa-times" /></span>
                                </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Icon input</label>
                                <div className="selectgroup selectgroup-pills">
                                <label className="selectgroup-item">
                                    <input type="radio" name="icon-input" defaultValue={1} className="selectgroup-input" defaultChecked />
                                    <span className="selectgroup-button selectgroup-button-icon"><i className="fas fa-sun" /></span>
                                </label>
                                <label className="selectgroup-item">
                                    <input type="radio" name="icon-input" defaultValue={2} className="selectgroup-input" />
                                    <span className="selectgroup-button selectgroup-button-icon"><i className="fas fa-moon" /></span>
                                </label>
                                <label className="selectgroup-item">
                                    <input type="radio" name="icon-input" defaultValue={3} className="selectgroup-input" />
                                    <span className="selectgroup-button selectgroup-button-icon"><i className="fas fa-cloud-rain" /></span>
                                </label>
                                <label className="selectgroup-item">
                                    <input type="radio" name="icon-input" defaultValue={4} className="selectgroup-input" />
                                    <span className="selectgroup-button selectgroup-button-icon"><i className="fas fa-cloud" /></span>
                                </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Your skills</label>
                                <div className="selectgroup selectgroup-pills">
                                <label className="selectgroup-item">
                                    <input type="checkbox" name="value" defaultValue="HTML" className="selectgroup-input" defaultChecked />
                                    <span className="selectgroup-button">HTML</span>
                                </label>
                                <label className="selectgroup-item">
                                    <input type="checkbox" name="value" defaultValue="CSS" className="selectgroup-input" />
                                    <span className="selectgroup-button">CSS</span>
                                </label>
                                <label className="selectgroup-item">
                                    <input type="checkbox" name="value" defaultValue="PHP" className="selectgroup-input" />
                                    <span className="selectgroup-button">PHP</span>
                                </label>
                                <label className="selectgroup-item">
                                    <input type="checkbox" name="value" defaultValue="JavaScript" className="selectgroup-input" />
                                    <span className="selectgroup-button">JavaScript</span>
                                </label>
                                <label className="selectgroup-item">
                                    <input type="checkbox" name="value" defaultValue="Ruby" className="selectgroup-input" />
                                    <span className="selectgroup-button">Ruby</span>
                                </label>
                                <label className="selectgroup-item">
                                    <input type="checkbox" name="value" defaultValue="Ruby" className="selectgroup-input" />
                                    <span className="selectgroup-button">Ruby</span>
                                </label>
                                <label className="selectgroup-item">
                                    <input type="checkbox" name="value" defaultValue="C++" className="selectgroup-input" />
                                    <span className="selectgroup-button">C++</span>
                                </label>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                            <h4>Toggle Switches</h4>
                            </div>
                            <div className="card-body">
                            <div className="form-group">
                                <div className="control-label">Toggle switches</div>
                                <div className="custom-switches-stacked mt-2">
                                <label className="custom-switch">
                                    <input type="radio" name="option" defaultValue={1} className="custom-switch-input" defaultChecked />
                                    <span className="custom-switch-indicator" />
                                    <span className="custom-switch-description">Option 1</span>
                                </label>
                                <label className="custom-switch">
                                    <input type="radio" name="option" defaultValue={2} className="custom-switch-input" />
                                    <span className="custom-switch-indicator" />
                                    <span className="custom-switch-description">Option 2</span>
                                </label>
                                <label className="custom-switch">
                                    <input type="radio" name="option" defaultValue={3} className="custom-switch-input" />
                                    <span className="custom-switch-indicator" />
                                    <span className="custom-switch-description">Option 3</span>
                                </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="control-label">Toggle switch single</div>
                                <label className="custom-switch mt-2">
                                <input type="checkbox" name="custom-switch-checkbox" className="custom-switch-input" />
                                <span className="custom-switch-indicator" />
                                <span className="custom-switch-description">I agree with terms and conditions</span>
                                </label>
                            </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                            <h4>Date &amp; Time Picker</h4>
                            </div>
                            <div className="card-body">
                            <div className="form-group">
                                <label className="d-block">Date Range Picker With Button</label>
                                <a href="javascript:;" className="btn btn-primary daterange-btn icon-left btn-icon"><i className="fas fa-calendar" /> Choose Date
                                </a>
                            </div>
                            <div className="form-group">
                                <label>Date Picker</label>
                                <input type="text" className="form-control datepicker" />
                            </div>
                            <div className="form-group">
                                <label>Date Time Picker</label>
                                <input type="text" className="form-control datetimepicker" />
                            </div>
                            <div className="form-group">
                                <label>Date Range Picker</label>
                                <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                    <i className="fas fa-calendar" />
                                    </div>
                                </div>
                                <input type="text" className="form-control daterange-cus" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Time Picker</label>
                                <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                    <i className="fas fa-clock" />
                                    </div>
                                </div>
                                <input type="text" className="form-control timepicker" />
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            </div>
        )
    }
}