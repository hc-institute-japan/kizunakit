import { Component, h } from '@stencil/core';
import { tabMenus } from './App.data';

@Component({
  tag: 'kizuna-app',
})
export class App {
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

  render() {
    return (
      <div>
        <div class="wrapper tabs">
          <h2 class="title">Calendar</h2>
          <kizuna-calendar></kizuna-calendar>
        </div>

        <div class="wrapper tabs">
          <h2 class="title">Tabs</h2>
          <kizuna-tabs value="tab1" menus={tabMenus}></kizuna-tabs>
          <br />
          <kizuna-tabs darkmode value="tab3" menus={tabMenus}></kizuna-tabs>
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
          <kizuna-popover
            button-text="Toggle Popover"
            item-list={this.popoverListItems}
          ></kizuna-popover>
          <kizuna-popover
            button-text="Toggle Popover (Dark mode)"
            darkmode
            item-list={this.popoverListItems}
          ></kizuna-popover>
        </div>

        <div>
          <h2 class="title">Icons</h2>
          <kizuna-icon name="search"></kizuna-icon>
          <kizuna-icon name="settings"></kizuna-icon>
          <kizuna-icon name="Emoticon"></kizuna-icon>
          <kizuna-icon name="CaLenDar"></kizuna-icon>
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
