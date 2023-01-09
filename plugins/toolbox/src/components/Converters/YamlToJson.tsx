import React, { useEffect } from 'react';
import { DefaultEditor } from '../DefaultEditor/DefaultEditor';
import { ContentHeader } from '@backstage/core-components';
import YAML from 'yaml';

export const YamlToJson = () => {
  const [input, setInput] = React.useState('');
  const [output, setOutput] = React.useState('');
  const sample =
    '- type: car\n' +
    '  name: pedro\n' +
    '  stars: 3\n' +
    '- type: plant\n' +
    '  name: samuel\n' +
    '  stars: 2\n';

  useEffect(() => {
    let obj;
    let err;
    try {
      obj = YAML.parse(input);
    } catch (e) {
      err = e.message;
    }

    if (obj) {
      setOutput(JSON.stringify(obj, null, 4));
    } else if (input) {
      setOutput(err);
    } else {
      setOutput('');
    }
  }, [input]);

  return (
    <>
      <ContentHeader title="YAML to JSON" />
      <DefaultEditor
        input={input}
        setInput={setInput}
        output={output}
        sample={sample}
      />
    </>
  );
};