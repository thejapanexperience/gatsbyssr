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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`

const Tab = styled(UnstyledTab).attrs({
  selectedClassName: 'selected',
  disabledClassName: 'disabled'
})`
  background-color: #fff;
  border-bottom: 4px solid #e4e4e4;
  color: #7C7F8C;
  cursor: pointer;
  flex-grow: 1;
  font-size: 1.6rem;
  font-weight: 700;
  list-style: none;
  padding: 2rem 0;
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
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    color: #D20042;
    font-weight: 900;
    padding: 3rem 0;
    z-index: 1;
  }

  &.disabled {
    color: #e0e0e0;
    cursor: not-allowed;
  }
`

const TabPanel = styled(UnstyledTabPanel).attrs({ selectedClassName: 'selected' })`
  display: none;
  padding: 10px 20px;

  &.selected {
    display: block;
  }
`

Tab.tabsRole = 'Tab'
Tabs.tabsRole = 'Tabs'
TabPanel.tabsRole = 'TabPanel'
TabList.tabsRole = 'TabList'

export { Tab, TabList, Tabs, TabPanel }
