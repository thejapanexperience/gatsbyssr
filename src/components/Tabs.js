import styled from 'styled-components'
import {
  Tab as UnstyledTab,
  TabList as UnstyledTabList,
  Tabs as UnstyledTabs,
  TabPanel as UnstyledTabPanel
} from 'react-tabs'

const Tabs = styled(UnstyledTabs)`
  padding-top: 100px;
  position: relative;
  width: 100%;
`

const TabList = styled(UnstyledTabList)`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  perspective: 1000;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`

const Tab = styled(UnstyledTab).attrs({
  selectedClassName: 'selected',
  disabledClassName: 'disabled'
})`
  align-items: center;
  background-color: #fff;
  border-bottom: 4px solid #e4e4e4;
  color: #7C7F8C;
  cursor: pointer;
  display: flex;
  flex: 1;
  font-size: 1.6rem;
  font-weight: 700;
  list-style: none;
  justify-content: center;
  min-height: 68px;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  transition: all 300ms ease;
  user-select: none;

  &:first-child {
    border-radius: 3px 0 0 3px;
  }

  &:last-child {
    border-radius: 0 3px 3px 0;
  }

  &.selected {
    border-color: #FE3D90;
    border-radius: 3px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    color: #D20042;
    font-weight: 900;
    min-height: 88px;
    z-index: 1;
  }

  &.disabled {
    color: #e0e0e0;
    cursor: not-allowed;
  }

  &::before {
    background-color: rgba(133, 188, 255, 1);
    content: '';
    height: 4px;
    left: 50%;
    top: 100%;
    position: absolute;
    transform: translateX(-50%);
    transition: all 300ms ease;
    width: 0%;
  }

  &:not(.selected) {

    &:hover {

      &::before {
        width: 100%;
      }

    }

  }
`

const TabPanel = styled(UnstyledTabPanel).attrs({ selectedClassName: 'selected' })`
  display: none;

  &.selected {
    display: block;
  }
`

Tab.tabsRole = 'Tab'
Tabs.tabsRole = 'Tabs'
TabPanel.tabsRole = 'TabPanel'
TabList.tabsRole = 'TabList'

export { Tab, TabList, Tabs, TabPanel }
