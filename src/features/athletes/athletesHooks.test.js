import { renderHook } from "@testing-library/react";
import useAtheletes from "./athletesHooks";

test('should change word', ()=> {
  const {result} = renderHook(() => useAtheletes())
})