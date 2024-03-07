export default function guardrail(mathFunction) {
  const queue = [];
  try {
    return queue.push(mathFunction(), 'Guardrail was processed');
  } catch (e) {
    return queue.push(e, 'Guardrail was processed');
  }
}
