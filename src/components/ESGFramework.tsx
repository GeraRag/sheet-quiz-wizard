
import React from 'react';
import { esgCriteriaFramework } from '@/constants/esgCriteria';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const ESGFramework: React.FC = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>ESG Criteria Scoring Framework</CardTitle>
        <CardDescription>
          Reference guide for how each ESG criterion is scored
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[180px]">Section</TableHead>
                <TableHead className="w-[220px]">Criteria</TableHead>
                <TableHead className="w-[180px] text-esg-score-a">Score A</TableHead>
                <TableHead className="w-[180px] text-esg-score-b">Score B</TableHead>
                <TableHead className="w-[180px] text-esg-score-c">Score C</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {esgCriteriaFramework.map((criteria, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{criteria.section}</TableCell>
                  <TableCell>{criteria.criteria}</TableCell>
                  <TableCell>{criteria.scoreA}</TableCell>
                  <TableCell>{criteria.scoreB}</TableCell>
                  <TableCell>{criteria.scoreC}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};
