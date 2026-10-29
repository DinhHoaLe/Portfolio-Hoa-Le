// Automatic activation with roving focus for both service and project tabs.
export function navigateTabs(event,current,values,select){
  const position=values.indexOf(current);
  let next;
  if(event.key==='ArrowRight'||event.key==='ArrowDown')next=(position+1)%values.length;
  else if(event.key==='ArrowLeft'||event.key==='ArrowUp')next=(position-1+values.length)%values.length;
  else if(event.key==='Home')next=0;
  else if(event.key==='End')next=values.length-1;
  else return;
  event.preventDefault();
  const buttons=event.currentTarget.closest('[role="tablist"]').querySelectorAll('[role="tab"]');
  select(values[next]);
  buttons[next]?.focus();
}
