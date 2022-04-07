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
  @State() open7Popover: boolean = false;

  popoverListItems = [
    {
      icon: 'settings',
      name: 'Settings',
      value: 'settings',
    },
    {
      icon: 'trash',
      name: 'Message Request',
      value: 'messageRequest',
    },
    {
      icon: 'calendar',
      name: 'Blocked',
      value: 'blocked',
    },
    {
      icon: 'emoticon',
      name: 'Report an issue',
      value: 'reportAnIssue',
    },
    {
      icon: 'settings',
      name: 'Logout',
      value: 'logout',
    },
  ];

  messageReactItems = [
    {
      icon: 'heart',
    },
    {
      icon: 'like',
    },
    {
      icon: 'like',
      count: 10,
    },
    {
      icon: 'heart',
      count: 3,
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
      const isLastItem = this.popoverListItems.length === index + 1;
      return (
        <kizuna-list-item
          key={index}
          text={item?.name}
          value={item?.value}
          icon={item.icon}
          divider={!isLastItem}
          onHandleClick={data => console.log({ itemValue: data.detail })}
        ></kizuna-list-item>
      );
    });
  };

  _togglePopover = (number: number) => {
    const popoverName = `open${number}Popover`;
    this[popoverName] = !this[popoverName];
  };

  _handlePopoverClose = (number: number) => {
    const popoverName = `open${number}Popover`;
    this[popoverName] = false;
  };

  render() {
    console.log(this.open1Popover);

    return (
      <div>
        <div class="wrapper">
          <h2 class="title">Text Editor</h2>
          <div class="popoverToggleButtonContainer">
            <kizuna-button
              type="secondary"
              text="Text Editor"
              onClick={() => this._togglePopover(7)}
            ></kizuna-button>
            <kizuna-text-editor
              open={this['open7Popover']}
              selected="underline"
              position="center"
              onChange={data => console.log({ activeFormat: data })}
            ></kizuna-text-editor>
          </div>
        </div>
        <div class="wrapper">
          <h2 class="title">Message box</h2>
          <div class="margin-all-side">
            <kizuna-message-box
              message="Sample message box with 'sent' message status lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
              time="3:14pm"
              messageStatus="sent"
            />
          </div>

          <div class="margin-all-side">
            <kizuna-message-box
              message="Sample message box with 'delivered' message status lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumloreumlorem ipsumlorem ipsum"
              time="3:14pm"
              messageStatus="delivered"
            />
          </div>

          <div class="margin-all-side">
            <kizuna-message-box
              message="Sample message box with 'seen' message status lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
              time="3:14pm"
              messageStatus="seen"
            />
          </div>

          <div class="margin-all-side">
            <kizuna-message-box
              message="Sample received message with no message status"
              time="3:14pm"
            />
          </div>

          <div class="margin-all-side">
            <kizuna-message-box
              message="Sample received message with no message status (dark mode)"
              time="3:14pm"
              darkmode
              messageStatus="sent"
            />
          </div>

          <div class="margin-all-side">
            <kizuna-message-box
              message="Sample sent message"
              time="3:14pm"
              sent
            />
          </div>

          <div class="margin-all-side">
            <kizuna-message-box
              message="Sample sent message (Dark mode)"
              time="3:14pm"
              sent
              darkmode
            />
          </div>

          <div class="margin-all-side">
            <kizuna-message-box
              message="Message box with reactions"
              time="3:14pm"
              reactionList={this.messageReactItems}
            />
          </div>

          <div class="margin-all-side">
            <kizuna-message-box
              message="Message box with reactions (dark mode)"
              time="3:14pm"
              darkmode
              reactionList={this.messageReactItems}
            />
          </div>
        </div>{' '}
        <div class="wrapper">
          <h2 class="title">React Message Emoji</h2>
          <kizuna-message-react emoji={'heart'} count={3} />
          <br />
          <kizuna-message-react emoji={'heart'} />
          <br />
          <kizuna-message-react emoji={'like'} count={7} darkmode />
          <br />
          <kizuna-message-react emoji={'like'} darkmode />
        </div>
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
            closeIcon={'close'}
          >
            <h1>Hello world!</h1>
            <div>This is a modal!</div>
          </kizuna-modal>
        </div>
        <div class="wrapper">
          <h2 class="title">Badge</h2>
          <kizuna-badge text="Admin" icon={'circle'}></kizuna-badge>
          <br />

          <kizuna-badge icon={'circle'}></kizuna-badge>
        </div>
        <div class="wrapper">
          <h2 class="title">Calendar</h2>
          <div class="calendar-display-content">
            <kizuna-calendar
              onHandleChange={data => console.log({ date: data.detail })}
              value="Fri Mar 4 2022 21:31:58 GMT+0800 (Philippine Standard Time)"
              darkmode
            ></kizuna-calendar>
            <kizuna-calendar
              position="center"
              onHandleChange={data => console.log({ date: data.detail })}
              value="Fri Mar 18 2022 21:31:58 GMT+0800 (Philippine Standard Time)"
            ></kizuna-calendar>
            <kizuna-calendar
              position="right"
              onHandleChange={data => console.log({ date: data.detail })}
            ></kizuna-calendar>
          </div>
        </div>
        <div class="wrapper tabs">
          <h2 class="title">Tabs</h2>
          <kizuna-tabs
            value="tab1"
            menus={tabMenus}
            onHandleClick={data => console.log({ data: data.detail })}
          ></kizuna-tabs>
          <br />
          <kizuna-tabs
            darkmode
            value="tab3"
            menus={tabMenus}
            onHandleClick={data => console.log({ data: data.detail })}
          ></kizuna-tabs>
        </div>
        <div>
          <h2 class="title">List Items</h2>
          <kizuna-list-item
            text="List Item"
            onClick={() => alert('handle click here')}
            divider
          ></kizuna-list-item>
          <kizuna-list-item
            text="List Item with Icon"
            icon={'settings'}
          ></kizuna-list-item>
        </div>
        <div>
          <h2 class="title">Popovers</h2>
          {/* 1 */}
          <div class="popoverToggleButtonContainer">
            <kizuna-button
              type="secondary"
              text="Toggle Popover 1 - Left Align"
              handleClick={() => this._togglePopover(1)}
              disableClickEvent={this['open1Popover']}
            ></kizuna-button>
            <kizuna-popover
              open={this['open1Popover']}
              onClose={() => this._handlePopoverClose(1)}
            >
              {this._renderListItems()}
            </kizuna-popover>
          </div>

          <br />

          {/* 2 */}
          <div class="popoverToggleButtonContainer">
            <kizuna-button
              type="secondary"
              text="Toggle Popover 2 - Center align"
              handleClick={() => this._togglePopover(2)}
              disableClickEvent={this['open2Popover']}
            ></kizuna-button>
            <kizuna-popover
              open={this['open2Popover']}
              position="center"
              onClose={() => this._handlePopoverClose(2)}
            >
              <p>Add Popover content here</p>
            </kizuna-popover>
          </div>

          <br />

          {/* 3 */}
          <div class="popoverToggleButtonContainer">
            <kizuna-button
              type="secondary"
              text="Toggle Popover 3 - Right Align"
              handleClick={() => this._togglePopover(3)}
              classes={{
                btnWrapper: 'popoverToggleButton',
              }}
              disableClickEvent={this['open3Popover']}
            ></kizuna-button>
            <kizuna-popover
              open={this['open3Popover']}
              position="right"
              onClose={() => this._handlePopoverClose(3)}
            >
              {this._renderListItems()}
            </kizuna-popover>
          </div>

          <br />

          {/* 4 */}
          <div class="popoverToggleButtonContainer">
            <kizuna-button
              type="secondary"
              text="Toggle Popover 4 - Left Align -  Dark mode"
              handleClick={() => this._togglePopover(4)}
              disableClickEvent={this['open4Popover']}
            ></kizuna-button>
            <kizuna-popover
              open={this['open4Popover']}
              darkmode
              onClose={() => this._handlePopoverClose(4)}
            >
              {this._renderListItems()}
            </kizuna-popover>
          </div>

          <br />

          {/* 5 */}
          <div class="popoverToggleButtonContainer">
            <kizuna-button
              type="secondary"
              text="Toggle Popover 5 - Center align - Dark mode"
              handleClick={() => this._togglePopover(5)}
              disableClickEvent={this['open5Popover']}
            ></kizuna-button>
            <kizuna-popover
              open={this['open5Popover']}
              position="center"
              darkmode
              onClose={() => this._handlePopoverClose(5)}
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
              handleClick={() => this._togglePopover(6)}
              disableClickEvent={this['open6Popover']}
            ></kizuna-button>
            <kizuna-popover
              open={this['open6Popover']}
              position="right"
              darkmode
              onClose={() => this._handlePopoverClose(6)}
            >
              {this._renderListItems()}
            </kizuna-popover>
          </div>
        </div>
        <div class="icons-container">
          <h2 class="title">Icons</h2>
          <kizuna-icon name="addContact"></kizuna-icon>
          <kizuna-icon name="removeContact"></kizuna-icon>
          <kizuna-icon name="add"></kizuna-icon>
          <kizuna-icon name="attach"></kizuna-icon>
          <kizuna-icon name="blocked"></kizuna-icon>
          <kizuna-icon name="bold"></kizuna-icon>

          <kizuna-icon name="briefcase"></kizuna-icon>
          <kizuna-icon name="calendar"></kizuna-icon>
          <kizuna-icon name="call"></kizuna-icon>
          <kizuna-icon name="calendar"></kizuna-icon>
          <kizuna-icon name="cameraOff"></kizuna-icon>

          <kizuna-icon name="camera"></kizuna-icon>
          <kizuna-icon name="caution"></kizuna-icon>
          <kizuna-icon name="chat"></kizuna-icon>
          <kizuna-icon name="check"></kizuna-icon>
          <kizuna-icon name="circle"></kizuna-icon>

          <kizuna-icon name="close"></kizuna-icon>
          <kizuna-icon name="contacts"></kizuna-icon>
          <kizuna-icon name="copy"></kizuna-icon>
          <kizuna-icon name="create"></kizuna-icon>
          <kizuna-icon name="dottedMenuHorizontal"></kizuna-icon>

          <kizuna-icon name="dottedMenuVertical"></kizuna-icon>
          <kizuna-icon name="down"></kizuna-icon>
          <kizuna-icon name="emoticon"></kizuna-icon>
          <kizuna-icon name="emptyNotification"></kizuna-icon>
          <kizuna-icon name="end"></kizuna-icon>

          <kizuna-icon name="file"></kizuna-icon>
          <kizuna-icon name="gif"></kizuna-icon>
          <kizuna-icon name="information"></kizuna-icon>
          <kizuna-icon name="italic"></kizuna-icon>
          <kizuna-icon name="left"></kizuna-icon>

          <kizuna-icon name="leftArrow"></kizuna-icon>
          <kizuna-icon name="link"></kizuna-icon>
          <kizuna-icon name="menu"></kizuna-icon>
          <kizuna-icon name="message"></kizuna-icon>
          <kizuna-icon name="mic"></kizuna-icon>

          <kizuna-icon name="micOff"></kizuna-icon>
          <kizuna-icon name="pin"></kizuna-icon>
          <kizuna-icon name="pin2"></kizuna-icon>
          <kizuna-icon name="remove"></kizuna-icon>
          <kizuna-icon name="reply"></kizuna-icon>

          <kizuna-icon name="right"></kizuna-icon>
          <kizuna-icon name="rightArrow"></kizuna-icon>
          <kizuna-icon name="search"></kizuna-icon>
          <kizuna-icon name="send"></kizuna-icon>
          <kizuna-icon name="settings"></kizuna-icon>

          <kizuna-icon name="strikethrough"></kizuna-icon>
          <kizuna-icon name="trash"></kizuna-icon>
          <kizuna-icon name="underline"></kizuna-icon>
          <kizuna-icon name="up"></kizuna-icon>
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
                    handleClick={() => console.log('button clicked')}
                  ></kizuna-button>
                </td>
                <td>
                  <kizuna-button
                    type="primary"
                    text="Label"
                    disabled
                    handleClick={() => console.log('button clicked')}
                  ></kizuna-button>
                </td>
              </tr>
              <tr>
                <td>Primary with Icon</td>
                <td>
                  <kizuna-button
                    type="primary"
                    text="Label"
                    icon={'addContact'}
                    handleClick={() => console.log('button clicked')}
                  ></kizuna-button>
                </td>
                <td>
                  <kizuna-button
                    type="primary"
                    disabled
                    text="Label"
                    icon={'addContact'}
                    handleClick={() => console.log('button clicked')}
                  ></kizuna-button>
                </td>
              </tr>
              <tr>
                <td>Secondary</td>
                <td>
                  <kizuna-button
                    type="secondary"
                    text="Label"
                    handleClick={() => console.log('button clicked')}
                  ></kizuna-button>
                </td>
                <td>
                  <kizuna-button
                    type="secondary"
                    text="Label"
                    disabled
                    handleClick={() => console.log('button clicked')}
                  ></kizuna-button>
                </td>
              </tr>
              <tr>
                <td>Secondary with Icon</td>
                <td>
                  <kizuna-button
                    type="secondary"
                    text="Label"
                    icon={'addContact'}
                    handleClick={() => console.log('button clicked')}
                  ></kizuna-button>
                </td>
                <td>
                  <kizuna-button
                    type="secondary"
                    text="Label"
                    disabled
                    icon={'addContact'}
                    handleClick={() => console.log('button clicked')}
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
            handleClick={() => console.log('toggled checkbox')}
          ></kizuna-checkbox>
          <kizuna-checkbox
            value="Charlie Chan"
            name="Charlie Chan"
            checked
            handleClick={() => console.log('toggled checkbox')}
          ></kizuna-checkbox>
          <kizuna-checkbox
            value="Charlie Chan"
            name="Charlie Chan"
            rounded
            handleClick={() => console.log('toggled checkbox')}
          ></kizuna-checkbox>
          <kizuna-checkbox
            value="Charlie Chan"
            name="Charlie Chan"
            checked
            rounded
            handleClick={() => console.log('toggled checkbox')}
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
            value="hello world"
            onHandleChange={data => console.log({ text: data.detail })}
          ></kizuna-textbox>
          <br />
          <kizuna-textbox
            placeholder="Search textbox "
            name="searchBox"
            startIconName="search"
            onHandleChange={data => console.log({ text: data.detail })}
          ></kizuna-textbox>
          <br />
          <kizuna-textbox
            placeholder="Rounded "
            name="Rounded"
            startIconName="search"
            variant="outlined"
            rounded
            onHandleChange={data => console.log({ text: data.detail })}
          ></kizuna-textbox>
          <br />
          <kizuna-textbox
            placeholder="First Name (No Start Icon) "
            name="firstName"
            label="First Name"
            onHandleChange={data => console.log({ text: data.detail })}
          ></kizuna-textbox>

          <br />
          <kizuna-textbox
            placeholder="Input with emoticon"
            name="firstName"
            emoticon
            onEmoticonClick={() => console.log('Emoticon clicked')}
            onHandleChange={data => console.log({ text: data.detail })}
          ></kizuna-textbox>

          <br />
          <kizuna-textbox
            placeholder="Left Align Textbox"
            name="firstName"
            label="First Name"
            align="left"
            startIconName="search"
            onHandleChange={data => console.log({ text: data.detail })}
          ></kizuna-textbox>

          <br />
          <kizuna-textbox
            placeholder="Center Align Textbox"
            name="firstName"
            // label="First Name"
            align="center"
            startIconName="search"
            onHandleChange={data => console.log({ text: data.detail })}
          ></kizuna-textbox>
          <br />
          <kizuna-textbox
            placeholder="Center Right Textbox"
            name="firstName"
            label="First Name"
            align="right"
            startIconName="search"
            onHandleChange={data => console.log({ text: data.detail })}
          ></kizuna-textbox>
        </div>
      </div>
    );
  }
}
