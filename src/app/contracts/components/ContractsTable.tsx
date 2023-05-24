"use client";
import { Badge, Container, Table } from "@nextui-org/react";
import type { Contract } from "@/../../packages/spacetraders-sdk";

export default function ContractsTable(
  { contracts }: { contracts: Contract[] },
) {
  return (
    <Table>
      <Table.Header>
        <Table.Column>
          Id
        </Table.Column>
        <Table.Column>
          Accepted
        </Table.Column>
      </Table.Header>
      <Table.Body>
        {contracts.map((contract) => (
          <Table.Row key={contract.id}>
            <Table.Cell>{contract.id}</Table.Cell>
            <Table.Cell>
              {contract.accepted
                ? <Badge variant="flat" color="success">Yes</Badge>
                : <Badge variant="flat" color="error">No</Badge>}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
