import React from 'react';

const Glossing = ({ data, translation, nativeScript, showNativeScript = false, title = "Linguistic Glosser" }) => {
  const containerStyle = {
    padding: '0.5rem',
    backgroundColor: '#fff',
    borderRadius: '0.75rem',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    maxWidth: '42rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '1rem',
    marginBottom: '1rem',
    border: '1px solid #e5e7eb',
    fontFamily: 'Inter, sans-serif',
    color: '#333',
  };

  const titleStyle = {
    fontSize: '1rem',
    fontWeight: '800',
    color: '#1f2937',
    marginBottom: '1.5rem',
    textAlign: 'center',
    letterSpacing: '-0.025em',
  };

  const wordsWrapperStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1.4rem', // Combina gap-x-8 e gap-y-4
    marginBottom: '1.5rem',
  };

  const wordItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '80px',
  };

  const nativeScriptStyle = {
    fontSize: '1.125rem',
    color: '#374151',
    marginBottom: '0.25rem',
    fontWeight: '500',
  };

  const originalWordStyle = {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '0.25rem',
  };

  const glossStyle = {
    fontSize: '0.875rem',
    color: '#4b5563',
    fontStyle: 'italic',
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
    paddingTop: '0.125rem',
    paddingBottom: '0.125rem',
    backgroundColor: '#f9fafb',
    borderRadius: '0.375rem',
    border: '1px solid #f3f4f6',
  };

  const translationStyle = {
    textAlign: 'center',
    fontSize: '1rem',
    fontWeight: '500',
    color: '#1d4ed8',
    paddingTop: '1rem',
    marginTop: '1rem',
    borderTop: '2px solid #bfdbfe',
  };

  const translationLabelStyle = {
    fontWeight: '700',
    color: '#374151',
    marginRight: '0.5rem',
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>
        {title}
      </h2>

      <div style={wordsWrapperStyle}>
        {data.map((item, index) => (
          <div key={index} style={wordItemStyle}>
            {showNativeScript && nativeScript && nativeScript[index] && (
              <div style={nativeScriptStyle}>
                {nativeScript[index]}
              </div>
            )}
            <div style={originalWordStyle}>
              {item.word}
            </div>
            <div style={glossStyle}>
              {item.gloss}
            </div>
          </div>
        ))}
      </div>

      <div style={translationStyle}>
        <span style={translationLabelStyle}>Translation:</span> "{translation}"
      </div>
    </div>
  );
};

export default Glossing;