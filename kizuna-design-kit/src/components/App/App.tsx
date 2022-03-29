import { Component, h, State } from '@stencil/core';
import { tabMenus } from './App.data';

@Component({
  tag: 'kizuna-app',
})
export class App {
  @State() openModal: boolean = false;
  @State() open1Popover: boolean = false;
  @State() open2Popover: boolean = false;
  @State() open3Popover: boolean = false;
  @State() open4Popover: boolean = false;
  @State() open5Popover: boolean = false;
  @State() open6Popover: boolean = false;

  popoverListItems = [
    {
      icon: <kizuna-icon name="settings"></kizuna-icon>,
      name: 'Settings',
    },
    {
      icon: <kizuna-icon name="trash"></kizuna-icon>,
      name: 'Message Request',
    },
    {
      icon: <kizuna-icon name="calendar"></kizuna-icon>,
      name: 'Blocked',
    },
    {
      icon: <kizuna-icon name="emoticon"></kizuna-icon>,
      name: 'Report an issue',
    },
    {
      icon: <kizuna-icon name="settings"></kizuna-icon>,
      name: 'Logout',
    },
  ];

  _handleOpenModal = () => {
    this.openModal = true;
  };

  _handleCloseModal = () => {
    this.openModal = false;
  };

  _renderListItems = () => {
    return this.popoverListItems?.map((item, index) => {
      return (
        <kizuna-list-item
          key={index}
          text={item?.name}
          icon={item.icon}
        ></kizuna-list-item>
      );
    });
  };

  _togglePopover = (number: number) => {
    const popoverName = `open${number}Popover`;
    this[popoverName] = !this[popoverName];
  };

  render() {
    return (
      <div>
        <div class="wrapper modalContainer">
          <h2 class="title">Modal</h2>

          <kizuna-button
            type="secondary"
            text="Click me to open modal"
            onClick={this._handleOpenModal}
          />

          <kizuna-modal
            open={this.openModal}
            onClose={this._handleCloseModal}
            closeIcon={<kizuna-icon name="settings" />} //when icon library is complete, change to X icon
          >
            <h1>Hello world!</h1>
            <div>This is a modal!</div>
          </kizuna-modal>
        </div>

        <div class="wrapper">
          <h2 class="title">Badge</h2>
          <kizuna-badge
            text="Admin"
            icon={<kizuna-icon name="circle" />}
          ></kizuna-badge>
          <br />

          <kizuna-badge icon={<kizuna-icon name="circle" />}></kizuna-badge>
        </div>
        <div class="wrapper">
          <h2 class="title">Calendar</h2>
          <div class="calendar-display-content">
            <kizuna-calendar
              onChange={data => console.log(data)}
              value="Fri Mar 4 2022 21:31:58 GMT+0800 (Philippine Standard Time)"
            ></kizuna-calendar>
            <kizuna-calendar
              position="center"
              onChange={data => console.log(data)}
              value="Fri Mar 18 2022 21:31:58 GMT+0800 (Philippine Standard Time)"
            ></kizuna-calendar>
            <kizuna-calendar
              position="right"
              onChange={data => console.log(data)}
            ></kizuna-calendar>
          </div>
        </div>

        <div class="wrapper tabs">
          <h2 class="title">Tabs</h2>
          <kizuna-tabs
            value="tab1"
            menus={tabMenus}
            // on-click={(data, value) => console.log(data, value)}
          ></kizuna-tabs>
          <br />
          <kizuna-tabs
            darkmode
            value="tab3"
            menus={tabMenus}
            // onClick={data => console.log(data)}
          ></kizuna-tabs>
        </div>

        <div>
          <h2 class="title">List Items</h2>
          <kizuna-list-item
            text="List Item"
            onClick={() => alert('handle click here')}
          ></kizuna-list-item>
          <kizuna-list-item
            text="List Item with Icon"
            icon={<kizuna-icon name="settings" />}
          ></kizuna-list-item>
        </div>

        <div>
          <h2 class="title">Popovers</h2>
          {/* 1 */}
          <div class="popoverToggleButtonContainer">
            <kizuna-button
              type="secondary"
              text="Toggle Popover 1 - Left Align"
              onClick={() => this._togglePopover(1)}
            ></kizuna-button>
            <kizuna-popover open={this['open1Popover']}>
              {this._renderListItems()}
            </kizuna-popover>
          </div>

          <br />

          {/* 2 */}
          <div class="popoverToggleButtonContainer">
            <kizuna-button
              type="secondary"
              text="Toggle Popover 2 - Center align"
              onClick={() => this._togglePopover(2)}
            ></kizuna-button>
            <kizuna-popover open={this['open2Popover']} position="center">
              <p>Add Popover content here</p>
            </kizuna-popover>
          </div>

          <br />

          {/* 3 */}
          <div class="popoverToggleButtonContainer">
            <kizuna-button
              type="secondary"
              text="Toggle Popover 3 - Right Align"
              onClick={() => this._togglePopover(3)}
              classes={{
                btnWrapper: 'popoverToggleButton',
              }}
            ></kizuna-button>
            <kizuna-popover open={this['open3Popover']} position="right">
              {this._renderListItems()}
            </kizuna-popover>
          </div>

          <br />

          {/* 4 */}
          <div class="popoverToggleButtonContainer">
            <kizuna-button
              type="secondary"
              text="Toggle Popover 4 - Left Align -  Dark mode"
              onClick={() => this._togglePopover(4)}
            ></kizuna-button>
            <kizuna-popover open={this['open4Popover']} darkmode>
              {this._renderListItems()}
            </kizuna-popover>
          </div>

          <br />

          {/* 5 */}
          <div class="popoverToggleButtonContainer">
            <kizuna-button
              type="secondary"
              text="Toggle Popover 5 - Center align - Dark mode"
              onClick={() => this._togglePopover(5)}
            ></kizuna-button>
            <kizuna-popover
              open={this['open5Popover']}
              position="center"
              darkmode
            >
              <p>Add Popover content here</p>
            </kizuna-popover>
          </div>

          <br />

          {/* 6 */}
          <div class="popoverToggleButtonContainer">
            <kizuna-button
              type="secondary"
              text="Toggle Popover 6 - Right Align - Dark mode"
              onClick={() => this._togglePopover(6)}
            ></kizuna-button>
            <kizuna-popover
              open={this['open6Popover']}
              position="right"
              darkmode
            >
              {this._renderListItems()}
            </kizuna-popover>
          </div>
        </div>

        <div>
          <h2 class="title">Icons</h2>
          <kizuna-icon name="search"></kizuna-icon>
          <kizuna-icon name="settings"></kizuna-icon>
          <kizuna-icon name="emoticon"></kizuna-icon>
          <kizuna-icon name="calendar"></kizuna-icon>
          <kizuna-icon name="trash"></kizuna-icon>
        </div>

        <div class="button-container">
          <h1 class="title">Button</h1>
          <div>
            <table>
              <tr>
                <th></th>
                <th>Default</th>
                <th>Disabled</th>
              </tr>
              <tr>
                <td>Primary</td>
                <td>
                  <kizuna-button
                    type="primary"
                    text="Label"
                    onClick={() => alert('handle click here')}
                  ></kizuna-button>
                </td>
                <td>
                  <kizuna-button
                    type="primary"
                    text="Label"
                    disabled
                  ></kizuna-button>
                </td>
              </tr>
              <tr>
                <td>Primary with Icon</td>
                <td>
                  <kizuna-button
                    type="primary"
                    text="Label"
                    onClick={() => alert('handle click here')}
                    icon={<kizuna-icon name="settings" />}
                  ></kizuna-button>
                </td>
                <td>
                  <kizuna-button
                    type="primary"
                    disabled
                    text="Label"
                    icon={<kizuna-icon name="settings" />}
                  ></kizuna-button>
                </td>
              </tr>
              <tr>
                <td>Secondary</td>
                <td>
                  <kizuna-button
                    type="secondary"
                    text="Label"
                    onClick={() => alert('handle click here')}
                  ></kizuna-button>
                </td>
                <td>
                  <kizuna-button
                    type="secondary"
                    text="Label"
                    disabled
                  ></kizuna-button>
                </td>
              </tr>
              <tr>
                <td>Secondary with Icon</td>
                <td>
                  <kizuna-button
                    type="secondary"
                    text="Label"
                    onClick={() => alert('handle click here')}
                    icon={<kizuna-icon name="settings" />}
                  ></kizuna-button>
                </td>
                <td>
                  <kizuna-button
                    type="secondary"
                    text="Label"
                    disabled
                    icon={<kizuna-icon name="settings" />}
                  ></kizuna-button>
                </td>
              </tr>
            </table>
          </div>
        </div>

        <div class="wrapper">
          <h2 class="title">Toggle Button</h2>
          <kizuna-toggle-button></kizuna-toggle-button>
          <kizuna-toggle-button checked></kizuna-toggle-button>
        </div>

        <div class="wrapper">
          <h2 class="title">Checkbox</h2>
          <kizuna-checkbox
            value="Charlie Chan"
            name="Charlie Chan"
          ></kizuna-checkbox>
          <kizuna-checkbox
            value="Charlie Chan"
            name="Charlie Chan"
            checked
          ></kizuna-checkbox>
        </div>

        <div class="wrapper">
          <h2 class="title">Avatars</h2>
          <div class="avatars-content">
            <kizuna-avatar
              size="xl"
              image="https://media.wired.co.uk/photos/606d9c691e0ddb19555fb809/4:3/w_2664,h_1998,c_limit/dog-unsolicited.jpg"
              status="online"
              indicator
            ></kizuna-avatar>

            <kizuna-avatar
              size="lg"
              image="https://media.wired.co.uk/photos/606d9c691e0ddb19555fb809/4:3/w_2664,h_1998,c_limit/dog-unsolicited.jpg"
              status="offline"
              indicator
            ></kizuna-avatar>

            <kizuna-avatar
              size="md"
              image="https://media.wired.co.uk/photos/606d9c691e0ddb19555fb809/4:3/w_2664,h_1998,c_limit/dog-unsolicited.jpg"
              status="away"
              indicator
            ></kizuna-avatar>

            <kizuna-avatar
              size="md"
              image="https://media.wired.co.uk/photos/606d9c691e0ddb19555fb809/4:3/w_2664,h_1998,c_limit/dog-unsolicited.jpg"
            ></kizuna-avatar>
            {/* <!-- no images --> */}
            <kizuna-avatar
              size="xl"
              name="Elisse Cruise"
              status="online"
              indicator
            ></kizuna-avatar>

            <kizuna-avatar
              size="lg"
              name="Elisse Cruise"
              status="offline"
              indicator
            ></kizuna-avatar>

            <kizuna-avatar
              size="md"
              name="Marcus Gopez"
              status="away"
              indicator
            ></kizuna-avatar>

            <kizuna-avatar size="md" name="Marcus Donald Gopez"></kizuna-avatar>
          </div>
        </div>

        <div class="wrapper textbox">
          <h2 class="title">Textbox</h2>
          <kizuna-textbox
            placeholder="First Name"
            name="firstName"
            variant="standard"
            label="First Name"
          ></kizuna-textbox>
          <br />
          <kizuna-textbox
            placeholder="First Name"
            name="firstName"
            label="First Name"
          ></kizuna-textbox>
        </div>
      </div>
    );
  }
}
