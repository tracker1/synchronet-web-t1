import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { push, replace, go, back, forward } from '@lagunovsky/redux-react-router'
import { createActionsHook } from '../hooks/react-redux-actions-hook';

import { ChatSection } from "../feature/chat";
import { DoorSection } from "../feature/door";
import { EmailSection } from "../feature/email";
import { FileSection } from "../feature/file";
import { ForumSection } from "../feature/forum";
import { MainSection } from "../feature/main";
import { SystemSection } from "../feature/system";

export const Router = () => {
  return (
    <Routes>
      <Route path={'/chat/*'} element={<ChatSection />} />
      <Route path={'/door/*'} element={<DoorSection />} />
      <Route path={'/email/*'} element={<EmailSection />} />
      <Route path={'/file/*'} element={<FileSection />} />
      <Route path={'/forum/*'} element={<ForumSection />} />
      <Route path={'/main/*'} element={<MainSection />} />
      <Route path={'/system/*'} element={<SystemSection />} />
      <Route path={'/'} element={<Navigate to="/main" />} />
    </Routes>
  );
}

export const useNavigationActions = createActionsHook({
  push, replace, go, back, forward,
});