'use strict';

import React from 'react';
import Example from '../../component/Example';
import renderer from 'react-test-renderer';

describe('Example', () => {

  it('レンダリングができること', () => {
    const tree = renderer.create(
      <Example />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('onClick', () => {
    const component = renderer.create(
      <Example />
    )
    // 1回目クリック
    component.getInstance()._onClick();
    expect(component.toJSON()).toMatchSnapshot();
    // 2回目クリック
    component.getInstance()._onClick();
    expect(component.toJSON()).toMatchSnapshot();
  });

});