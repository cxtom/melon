/**
 * @file melon demo select
 * @author leon(ludafa@outlook.com)
 */

var React = require('react');

var Title = require('../src/Title');
var Select = require('../src/Select');

var View = React.createClass({

    getInitialState: function () {
        return {
            a: '',
            b: ''
        };
    },

    render: function() {

        var datasource = [
            {value: '1', name: 'Never'},
            {value: '2', name: 'Every Night'},
            {value: '3', name: 'Weeknights'},
            {value: '4', name: 'WeekendsWeekendsWeekendsWeekends'},
            {value: '5', name: 'Weekly'}
        ];

        return (
            <div>
                <Title level={4}>下拉选项</Title>
                <Title level={5}>Uncontrolled Select</Title>
                <div className="melon-row">
                    <div className="melon-column melon-column-6">
                        <Title level={6}>普通</Title>
                        <Select name="a" defaultValue={this.state.a} >
                            {Select.createOptions(datasource)}
                        </Select>
                    </div>
                    <div className="melon-column melon-column-6">
                        <Title level={6}>选项分组</Title>
                        <Select name="b" defaultValue={this.state.b}>
                            <optgroup label="fruit">
                                <option value="Apple" label="Apple" />
                                <option value="Banana" label="Banana" />
                                <option value="Mango" label="Mango" disabled />
                                <option value="Pear" label="Pear" disabled />
                            </optgroup>
                            <optgroup label="sport">
                                <option value="Basketball" label="Basketball" />
                                <option value="Football" label="Football" />
                            </optgroup>
                        </Select>
                    </div>
                </div>
                <Title level={5}>Controlled Select</Title>
                <div className="melon-row">
                    <div className="melon-column melon-column-6">
                        <Title level={6}>普通</Title>
                        <Select name="a" value={this.state.a} onChange={this.onChange.bind(null, 'a')}>
                            {Select.createOptions(datasource)}
                        </Select>
                        {this.getCurrentValue('a')}
                    </div>
                    <div className="melon-column melon-column-6">
                        <Title level={6}>选项分组</Title>
                        <Select name="b" value={this.state.b} onChange={this.onChange.bind(null, 'b')}>
                            <optgroup label="fruit">
                                <option value="Apple" label="Apple" />
                                <option value="Banana" label="Banana" />
                                <option value="Mango" label="Mango" disabled />
                                <option value="Pear" label="Pear" disabled />
                            </optgroup>
                            <optgroup label="sport">
                                <option value="Basketball" label="Basketball" />
                                <option value="Football" label="Football" />
                            </optgroup>
                        </Select>
                        {this.getCurrentValue('b')}
                    </div>
                </div>
            </div>
        );
    },

    getCurrentValue(name) {
        var value = this.state[name];
        return value
            ? <label style={{lineHeight: '48px', marginLeft: 10}}>当前的选择值是：{value}</label>
            : null;
    },


    onChange(name, e) {
        this.setState({
            [name]: e.value
        });
    }

});

module.exports = View;
