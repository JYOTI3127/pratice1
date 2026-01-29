import React from "react";
import { ComboBracelets } from "../Data/Data";
import Card from "../components/Card";

const ComboBraceletPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold mb-6 text-center">
        Combo Bracelets
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {ComboBracelets.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ComboBraceletPage;
