import React, { PureComponent } from 'react';
import Header from '../components/Header';
import { Panel, Cell, SwipeAction } from '../../components';

import '../styles/pages/SwipeAction';

class Page extends PureComponent {
  render() {
    return (
      <div className="swipeAction-page">
        <Header title="滑动操作 SwipeAction" />
        <main>
          <Panel>
            <Panel.Header>
              <Panel.Title>基本</Panel.Title>
            </Panel.Header>
            <Panel.Body>
              <SwipeAction
                right={[
                  {
                    className: 'custom-btn',
                    theme: 'error',
                    text: '右按钮1自定义class',
                    onClick: () => console.log('右按钮1'),
                  },
                  {
                    theme: 'success',
                    text: '右按钮2',
                    onClick: () => console.log('右按钮2'),
                  },
                ]}
                autoClose>
                <Cell>右侧按钮（自动关闭）</Cell>
              </SwipeAction>

              <SwipeAction
                left={[
                  {
                    theme: 'info',
                    text: '左按钮1',
                    onClick: () => console.log('左按钮1'),
                  },
                  {
                    theme: 'warning',
                    text: '左按钮2',
                    onClick: () => console.log('左按钮2'),
                  },
                ]}>
                <Cell>左侧按钮</Cell>
              </SwipeAction>

              <SwipeAction
                left={[
                  {
                    theme: 'info',
                    text: '左按钮1',
                    onClick: () => console.log('左按钮1'),
                  },
                  {
                    theme: 'warning',
                    text: '左按钮2',
                    onClick: () => console.log('左按钮2'),
                  },
                ]}
                right={[
                  {
                    theme: 'error',
                    text: '右按钮1',
                    onClick: () => console.log('右按钮1'),
                  },
                  {
                    theme: 'success',
                    text: '右按钮2',
                    onClick: () => console.log('右按钮2'),
                  },
                ]}>
                <Cell>双侧按钮</Cell>
              </SwipeAction>
            </Panel.Body>
          </Panel>

          <Panel>
            <Panel.Header>
              <Panel.Title>普通列表项</Panel.Title>
            </Panel.Header>
            <Panel.Body>
              <SwipeAction
                right={[
                  {
                    text: '右按钮1',
                    onClick: () => console.log('右按钮1'),
                    theme: 'info',
                  },
                  {
                    text: '右按钮2',
                    onClick: () => console.log('右按钮2'),
                    theme: 'warning',
                  },
                ]}>
                <div className="cell">右侧按钮(div)</div>
              </SwipeAction>
            </Panel.Body>
          </Panel>
        </main>
      </div>
    );
  }
}

export default Page;