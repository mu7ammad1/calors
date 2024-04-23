import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export default function Conversion({ HEX, RGB, HSL, CMYK, HWB, LCH }: any) {
  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">HEX</TableCell>
          <TableCell className="text-right">{HEX}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">RGB</TableCell>
          <TableCell className="text-right">{RGB}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">HSL</TableCell>
          <TableCell className="text-right">{HSL}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">CMYK</TableCell>
          <TableCell className="text-right">{CMYK}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">HWB</TableCell>
          <TableCell className="text-right">{HWB}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">LCH</TableCell>
          <TableCell className="text-right">{LCH}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
