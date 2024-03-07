const Index = ({ children, dynamicClass  }) => {
  return (
    <div className={`title ${dynamicClass}`}>
      <span>{children}</span>
    </div>
  );
};

export default Index;
